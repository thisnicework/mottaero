document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("section#one")) {
    document.querySelector("section#one").scrollTop = localStorage.scrollPos_one || 0;

    document.querySelector("section#one").addEventListener("scroll", function () {
      localStorage.setItem("scrollPos_one", document.querySelector("section#one").pageYOffset || document.querySelector("section#one").scrollTop);
    }, false);
  }

  if (document.querySelector("section#two")) {
    document.querySelector("section#two").scrollTop = localStorage.scrollPos_two || 0;

    document.querySelector("section#two").addEventListener("scroll", function () {
      localStorage.setItem("scrollPos_two", document.querySelector("section#two").pageYOffset || document.querySelector("section#two").scrollTop);
    }, false);
  }

  if (document.querySelector("section#one")) {
    Array.from(document.querySelectorAll("section#one a")).forEach(reset => {
      reset.addEventListener("click", function () {
        localStorage.removeItem("scrollPos_two");
      }, false);
    });
  }

  if (document.querySelector("section#two")) {
    Array.from(document.querySelectorAll("section#two a")).forEach(swap => {
      swap.addEventListener("click", function () {
        localStorage.setItem("scrollPos_one", localStorage.scrollPos_two);
        localStorage.removeItem("scrollPos_two");
      }, false);
    });
  }

  if (document.querySelectorAll("header h1 > a, header nav#menu > a")) {
    Array.from(document.querySelectorAll("header h1 > a, header nav#menu > a")).forEach(reset => {
      reset.addEventListener("click", function () {
        localStorage.removeItem("scrollPos_one");
        localStorage.removeItem("scrollPos_two");
      }, false);
    });
  }
}, false);
