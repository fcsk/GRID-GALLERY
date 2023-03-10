const lightbox = document.createElement("div");
const images = document.querySelectorAll("img");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

images.forEach((element) => {
  element?.addEventListener("click", (e) => {
    lightbox.classList.add("create");
    const img = document.createElement("img");
    img.src = element.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target != e.currentTarget) return;
  lightbox.classList.remove("create");
});
