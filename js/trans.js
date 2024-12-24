// // Create and append the style element with animations
// const style = document.createElement("style");
// style.innerHTML = `
//   [fkzsec1] {
//     opacity: 0;
//     position: relative;
//     top: 20px;
//     transition: opacity 2s, top 2s;
//   }

//   [fkzsec2] {
//     opacity: 0;
//     position: relative;
//     left: 20px;
//     transition: opacity 2s, left 2s;
//   }

//   [fkzsec3] {
//     opacity: 0;
//     position: relative;
//     right: 20px;
//     transition: opacity 2s, right 2s;
//   }

//   [fkzsec4] {
//     opacity: 0;
//     position: relative;
//     bottom: 20px;
//     transition: opacity 2s, bottom 2s;
//   }

//   [fkzsec5] {
//     opacity: 0;
//     position: relative;
//     transition: opacity 1s;
//   }
// `;
// document.head.appendChild(style);

// // Function to fade in elements when they enter the viewport
// function fadeInElements() {
//   var fadeUpElements = document.querySelectorAll('[fkzsec1], [fkzsec2], [fkzsec3], [fkzsec4], [fkzsec5]');
//   fadeUpElements.forEach(function(element) {
//     var rect = element.getBoundingClientRect();
//     var elementTop = rect.top + window.pageYOffset;
//     var windowHeight = window.innerHeight;
//     var scrollPosition = window.scrollY;
    
//     if (elementTop < windowHeight + scrollPosition) {
//       if (!element.hasAttribute('fkzsec-transitioned')) {
//         if (element.hasAttribute('fkzsec1')) {
//           element.style.opacity = 1;
//           element.style.top = 0;
//         } else if (element.hasAttribute('fkzsec2')) {
//           element.style.opacity = 1;
//           element.style.left = 0;
//         } else if (element.hasAttribute('fkzsec3')) {
//           element.style.opacity = 1;
//           element.style.right = 0;
//         } else if (element.hasAttribute('fkzsec4')) {
//           element.style.opacity = 1;
//           element.style.bottom = 0;
//         } else if (element.hasAttribute('fkzsec5')) {
//           element.style.opacity = 1;
//         }
//         element.setAttribute('fkzsec-transitioned', 'true');
//       }
//     }
//   });
// }

// // Event listener for scroll
// window.addEventListener('scroll', function() {
//   fadeInElements();
// });

// // Trigger fade-in on page load
// window.onload = function() {
//   fadeInElements();
// };


const style = document.createElement("style");
style.innerHTML = `
  [fkzsec1] {
    opacity: 0;
    position: relative;
    top: 20px;
    transition: opacity 2s, top 2s;
  }

  [fkzsec2] {
    opacity: 0;
    position: relative;
    left: 20px;
    transition: opacity 2s, left 2s;
  }

  [fkzsec3] {
    opacity: 0;
    position: relative;
    right: 20px;
    transition: opacity 2s, right 2s;
  }

  [fkzsec4] {
    opacity: 0;
    position: relative;
    bottom: 20px;
    transition: opacity 2s, bottom 2s;
  }

  [fkzsec5] {
    opacity: 0;
    position: relative;
    transition: opacity 1s;
  }
`;
document.head.appendChild(style);

function fadeInElements() {
  var fadeUpElements = document.querySelectorAll('[fkzsec1], [fkzsec2], [fkzsec3], [fkzsec4], [fkzsec5]');
  fadeUpElements.forEach(function(element) {
    var rect = element.getBoundingClientRect();
    var elementTop = rect.top + window.pageYOffset;
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY;
    
    if (elementTop < windowHeight + scrollPosition) {
      if (!element.hasAttribute('fkzsec-transitioned')) {
        if (element.hasAttribute('fkzsec1')) {
          element.style.opacity = 1;
          element.style.top = 0;
        } else if (element.hasAttribute('fkzsec2')) {
          element.style.opacity = 1;
          element.style.left = 0;
        } else if (element.hasAttribute('fkzsec3')) {
          element.style.opacity = 1;
          element.style.right = 0;
        } else if (element.hasAttribute('fkzsec4')) {
          element.style.opacity = 1;
          element.style.bottom = 0;
        } else if (element.hasAttribute('fkzsec5')) {
          element.style.opacity = 1;
        }
        element.setAttribute('fkzsec-transitioned', 'true');
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
