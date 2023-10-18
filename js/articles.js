const leftArticles = document.querySelectorAll(".left-article");
const rightArticles = document.querySelectorAll(".right li");

function handleGlow() {
  rightArticles.forEach((rightArticle, index) => {
    if (isElementInViewport(rightArticle)) {
      leftArticles.forEach((leftArticle, leftIndex) => {
        if (leftIndex <= index) {
          leftArticle.classList.add("glow");
        } else {
          leftArticle.classList.remove("glow");
        }
      });
    }
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleMediaQueryChange(event) {
  if (event.matches) {
    window.addEventListener("scroll", handleGlow);
    handleGlow();
  } else {
    window.removeEventListener("scroll", handleGlow);
  }
}

mediaQuery.addListener(handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);
