const buttons = document.querySelectorAll('.selengkapnya');

          buttons.forEach(button => {
              button.addEventListener('click', () => {
                  const article = button.closest('.card').querySelector('.selengkap');
                  article.classList.toggle('selengkap-active');
                  if (article.classList.contains('selengkap-active')) {
                      button.textContent = 'Sembunyikan';
                  } else {
                      button.textContent = 'Lihat selengkapnya';
                  }
              });
          });