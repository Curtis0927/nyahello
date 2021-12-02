<<<<<<< HEAD
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
 const randomNumber = getRandomNumber();

 document.body.style.backgroundColor = colors[randomNumber];
 color,this.textContent = colors[randomNumber];

})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length;
}
=======
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
 const randomNumber = getRandomNumber();

 document.body.style.backgroundColor = colors[randomNumber];
 color,this.textContent = colors[randomNumber];

})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length;
}
>>>>>>> a9884edd8797f9933a5ffad2ee0b0bb397a9b491
