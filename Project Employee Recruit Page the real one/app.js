//navbar//
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
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
  let hexColor1 = "#";
  let hexColor2 = "#";
  let hexColor3 = "#";
  let hexColor4 = "#";
  let hexColor5 = "#";
  for (let i = 0; i < 6; i++) {
    hexColor1 += hex[getRandomNumber()];
    hexColor2 += hex[getRandomNumber()];
    hexColor3 += hex[getRandomNumber()];
    hexColor4 += hex[getRandomNumber()];
    hexColor5 += hex[getRandomNumber()];
  }
  color.textContent = hexColor1;
  document.body.style.backgroundColor = hexColor1;
  color.textContent = hexColor2;
  document.getElementById("navigation-bar").style.backgroundColor = hexColor2;
  color.textContent = hexColor3;
  document.getElementById('btnSwitch').style.backgroundColor= hexColor3;
  color.textContent = hexColor4;
  document.getElementById('rate').style.backgroundColor= hexColor4;
  color.textContent = hexColor5;
  document.getElementById('employees1').style.backgroundColor= hexColor5;
  
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
//employees//
const employees = [
  {
    id: 1,
    name: "Usada Pekora",
    job: "Pilot/War criminal",
    img: "https://i.imgur.com/85vHQAg.png",
    text: "Konpeko, konpeko, konpeko! Hororaibu san-kisei no Usada Pekora peko! Dōmo, dōmo!",
  },
  {
    id: 2,
    name: "Ninomae Ina'nis",
    job: "Co-Pilot/A god",
    img: "https://i.imgur.com/q7vAjR3.png",
    text: "wah",
  },
  {
    id: 3,
    name: "Gawr Gura",
    job: "Flight attendant/Cute shark",
    img: "https://i.imgur.com/IMjvZ43.png",
    text: "Dōmo, same desu",
  },
  {
    id: 4,
    name: "Uruha Rushia",
    job: "Flight attendant/Necromancer",
    img: "https://i.imgur.com/TWnsT47.png",
    text: "Hajimemashite, hororaibu san kisei no uruha rushia desu.",
  },
];
// select items//
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item//
let currentItem = 0;

//load initial item//
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});
function showPerson() {
  const item = employees[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next//
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > employees.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = employees.length - 1;
  }
  showPerson();
});

//change font size//

function fontChanger() {
  document.getElementById("ratetitle").style.fontSize = "x-large";
}