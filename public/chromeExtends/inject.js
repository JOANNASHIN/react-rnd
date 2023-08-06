document.body.style.backgroundColor = `red !important`;
function like() {
  const likeButton = document.body.querySelector("._aamw div");
  
  if (likeButton && likeButton.querySelector("title").innerHTML === '좋아요') {
      likeButton.click();
  }
}

function goNext(nextButton) {
  nextButton.click();
}
function start() {
const macro = setInterval(() => {
  like();

  const nextButton = document.body.querySelector("._aaqg button");
  if (nextButton) {
      setTimeout(() => {
          goNext(nextButton);
      }, 3000);
  }
  else {
      clearInterval(macro);
  }
}, 4000);
}

window.onload = function () {
  document.addEventListener("click", start);
}