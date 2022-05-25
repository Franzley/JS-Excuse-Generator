/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Arrays
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

// Excuse List
function randomExcuse() {
  const generator = document.querySelector("#excuse");
  generator.innerHTML =
    who[randomGenerator(who)] +
    " " +
    action[randomGenerator(action)] +
    " " +
    what[randomGenerator(what)] +
    " " +
    when[randomGenerator(when)];
}

// Randomizer
function randomGenerator(array) {
  var a = Math.random();
  a = a * array.length;
  a = Math.floor(a);
  return a;
}

//windows onload
window.onload = function() {
  //write your code here
  var btn = document.getElementById("excuseRNG");
  btn.onclick = randomExcuse;
};
