window.addEventListener("load", function () {
  let images = document.querySelectorAll(".image");
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for (let i = 0; i < 3; i++) {
    images[i].style.display = "block";
  }
});

const buttons = document.querySelectorAll(".buttons button");
const images = document.querySelectorAll(".image");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const year = event.target.id;

    const images = document.querySelectorAll(".image");
    images.forEach((image) => {
      const imageYear = image.getAttribute("data-year");
      console.log(imageYear);
      if (year === "all" || imageYear === year) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});
