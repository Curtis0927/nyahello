//like dislike//
let count = 0;

const value = document.querySelector("#likeDislike");
const likes = document.querySelectorAll(".like");

likes.forEach(function (like) {
  like.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("down")) {
      count--;
    } else if (styles.contains("up")) {
      count++;
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      //change color to white later//
      value.style.color = "white";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
//color switch//
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btnSwitch");
const color = document.querySelectorAll("color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
