const style = document.createElement("style");
style.innerHTML = `
    [fkz1] {
    opacity: 0;
    position: relative;
    top: 50px;
    transition: opacity 2s, top 1s;
}

[fkz2] {
    opacity: 0;
    position: relative;
    left: 20px;
    transition: opacity 2s, left 1s;
}


[fkz3] {
    opacity: 0;
    position: relative;
    right: 20px;
    transition: opacity 2s, right 1s;
}

[fkz4] {
    opacity: 0;
    position: relative;
    bottom: 50px;
    transition: opacity 2s, bottom 1s;
}

[fkz5] {
    opacity: 0;
    position: relative;
    transition: opacity 0.3s;
}
`;
document.head.appendChild(style);

function fadeInElements() {
  var fadeUpElements = document.querySelectorAll('[fkz1], [fkz2], [fkz3], [fkz4], [fkz5]');
  fadeUpElements.forEach(function(element) {
    var rect = element.getBoundingClientRect();
    var elementTop = rect.top + window.pageYOffset;
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY;
    
    if (elementTop < windowHeight + scrollPosition) {
      if (!element.hasAttribute('kezt-transitioned')) {
        if (element.hasAttribute('fkz1')) {
          element.style.opacity = 1;
          element.style.top = 0;
        } else if (element.hasAttribute('fkz2')) {
          element.style.opacity = 1;
          element.style.left = 0;
        } else if (element.hasAttribute('fkz3')) {
          element.style.opacity = 1;
          element.style.right = 0;
        } else if (element.hasAttribute('fkz4')) {
          element.style.opacity = 1;
          element.style.bottom = 0;
        } else if (element.hasAttribute('fkz5')) {
          element.style.opacity = 1;
        }
        element.setAttribute('kezt-transitioned', 'true');
      }
    }
  });
}

window.addEventListener('scroll', function() {
  fadeInElements();
});

window.onload = function() {
  fadeInElements();
};