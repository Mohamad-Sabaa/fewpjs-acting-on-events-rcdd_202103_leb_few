// Your code here
function moveDodgerLeft() {
  let dodger = document.getElementById("dodger");
  document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  } else {
    dodger.style.left = `${left + 1}px`;
  }
})
}

moveDodgerLeft();
