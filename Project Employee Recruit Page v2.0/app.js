
//employees//
const employees = [
  {
    id: 1,
    name: "Usada pekora",
    job: "Pilot/War criminal",
    img: "https://i.imgur.com/85vHQAg.png",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Ninomae Ina'nis",
    job: "Co-Pilot/A god",
    img:
      "https://i.imgur.com/q7vAjR3.png",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Gawr gura",
    job: "Flight attendant/A shark.",
    img:
      "https://i.imgur.com/IMjvZ43.png",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Uruha rushia",
    job: "Flight attendant/Necromancer",
    img:
      "https://i.imgur.com/TWnsT47.png",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// select items//
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item//
let currentItem = 0;

//load initial item//
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
  });

  //words//

  function showPerson(){
    const item = employees[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job
    info.textContent = item.text;
    
  }

  //show next//
  nextBtn.addEventListener('click', function (){
    currentItem++;
    if(currentItem > employees.length - 1){
      currentItem = 0;
    }
    showPerson();
  });

  prevBtn.addEventListener('click', function (){
    currentItem--;
    if(currentItem < 0) {
      currentItem = employees.length - 1;
    }
    showPerson();
  });

  randomBtn.addEventListener('click', function (){
    currentItem = Math.floor(Math.random()* employees.length);
    showPerson();
  });
