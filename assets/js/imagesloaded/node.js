document.addEventListener('DOMContentLoaded', function () {
    const backendURL = "https://fkzproject-backend.vercel.app/api/feedback";
    const feedbackForm = document.getElementById("feedbackForm");
    const submitButton = feedbackForm.querySelector("button[type='submit']");
    let box = document.getElementById('alert6');
    let isSubmitting = false;

    feedbackForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (isSubmitting) return;
        isSubmitting = true;
        submitButton.disabled = true;
        submitButton.textContent = "Mengirim...";

        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();
        const recaptchaResponse = grecaptcha.getResponse();

        const nameRegex = /^[a-zA-Z0-9 ]{3,50}$/; 
        const messageMaxLength = 500; 

        if (!name.match(nameRegex)) {
            alert("Nama hanya boleh mengandung huruf dan angka (3-50 karakter)!");
            resetForm();
            return;
        }

        if (message.length > messageMaxLength) {
            alert("Pesan terlalu panjang! Maksimal 500 karakter.");
            resetForm();
            return;
        }

        if (!recaptchaResponse) {
            alert("Silahkan verifikasi bahwa kamu bukan robot!");
            resetForm();
            return;
        }

        try {
            const response = await fetch(backendURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, message, recaptchaResponse }),
            });

            const responseData = await response.json();

            if (response.ok) {
                showSuccess();
                feedbackForm.reset();
                grecaptcha.reset();
                loadFeedback();
            } else {
                alert(`Gagal mengirim ulasan: ${responseData.error || "Terjadi kesalahan!"}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan saat mengirim ulasan! Periksa koneksi internet Anda.");
        } finally {
            resetForm();
        }
    });

    function resetForm() {
        isSubmitting = false;
        submitButton.disabled = false;
        submitButton.textContent = "Kirim Ulasan!";
    }

    function showSuccess() {
        try {
            setTimeout(() => {
                box.classList.add('show');
                setTimeout(() => {
                    box.classList.remove('show');
                }, 2000);
            }, 500);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async function loadFeedback() {
        try {
            const response = await fetch(backendURL);
            if (response.ok) {
                const feedbacks = await response.json();
                const feedbackList = document.getElementById("feedbackList");
                feedbackList.innerHTML = "";

                feedbacks.forEach((fb) => {
                    const li = document.createElement("li");
                    li.textContent = `${fb.name}: ${fb.message}`;
                    feedbackList.appendChild(li);
                });
            } else {
                console.warn("Gagal memuat ulasan.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    loadFeedback();
});
