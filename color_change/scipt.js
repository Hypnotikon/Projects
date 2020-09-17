const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const colorBTN = document.querySelector(".colorBTN");
const body = document.querySelector("body");
const hex = document.querySelector(".hex");
const hexcolor = document.querySelector(".hexcolor")
const container = document.querySelector(".container")
const containerup =document.querySelector(".containerup")
const containerupup =document.querySelector(".containerupup")
colorBTN.addEventListener("click", change);
colorBTN.addEventListener("click", changes);
colorBTN.addEventListener("click", changess);
colorBTN.addEventListener("click", changesss);
colorBTN.addEventListener("click", changez);
colorBTN.addEventListener("click", changezz);

function change(){
  var hexon = "#";
  for (let i =0; i<6; i++){
    var x = Math.floor(Math.random() * colors.length);
    hexon += colors[x];
  }
  body.style.backgroundColor = hexon;
  hex.innerHTML = hexon;
  colorBTN.style.backgroundColor = hexons;
}

function changes(){
  var hexons = "#";
  for (let i =0; i<6; i++){
    var x = Math.floor(Math.random() * colors.length);
    hexons += colors[x];
  }
  colorBTN.style.backgroundColor = hexons;
}

function changess(){
  var hexonss = "#";
  for (let i =0; i<6; i++){
    var x = Math.floor(Math.random() * colors.length);
    hexonss += colors[x];
  }
  hexcolor.style.backgroundColor = hexonss;
}

function changesss(){
  var hexonsss = "#";
  for (let i =0; i<6; i++){
    var x = Math.floor(Math.random() * colors.length);
    hexonsss += colors[x];
  }
  container.style.backgroundColor = hexonsss;
}

function changez(){
  var hexonz = "#";
  for (let i =0; i<6; i++){
    var x = Math.floor(Math.random() * colors.length);
    hexonz += colors[x];
  }
  containerup.style.backgroundColor = hexonz;
}

function changezz(){
  var hexonzz = "#";
  for (let i =0; i<6; i++){
    var x = Math.floor(Math.random() * colors.length);
    hexonzz += colors[x];
  }
  containerupup.style.backgroundColor = hexonzz;
}
