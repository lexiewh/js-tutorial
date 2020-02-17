// make the scoll line
const scrollLine = document.querySelector(".scroll-line");

// functions
function fillScrollLine(){
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const percentScrolled = (scrolled / (fullHeight - windowHeight))*100;
  //console.log(percentScrolled);

  scrollLine.style.width = `${percentScrolled}%`;
}

// event listener (listen to the window)
window.addEventListener('scroll', debounce(fillScrollLine));

function debounce(func, wait = 15, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
