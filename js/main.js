const ham = document.querySelector(".ham");
const list = document.querySelector("ul");

const btn = document.querySelector(".btn");

ham.addEventListener("click", (e) => {
  list.classList.toggle("show");
});

// Typing effect
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    btn.href = "./gallery.html";
    text.textContent = "GALLERY";
  }, 0);
  setTimeout(() => {
    btn.href = "./articles.html";
    text.textContent = "ARTICLES";
  }, 4000);
  setTimeout(() => {
    btn.href = "./photos.html";
    text.textContent = "PHOTOS";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);
