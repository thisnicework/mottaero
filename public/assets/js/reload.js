let container = document.querySelector("section#two");

function reload() {
  if (!container) return;
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "/reload/container");
  xhr.send(null);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let parser = new DOMParser();
        let newimg = new Image();

        let doc = parser.parseFromString(xhr.responseText, "text/html");
        let img = doc.querySelector("img.gallery");

        if (img) {
          newimg.src = img.src;
          newimg.addEventListener("load", function () {
            container.innerHTML = xhr.responseText;
          });
        } else {
          container.innerHTML = xhr.responseText;
        }
      }
    }
  }
}

window.setInterval(reload, 7000);
