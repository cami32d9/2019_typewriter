"use strict";

document.addEventListener("DOMContentLoaded", start);

const typeWriter = document.querySelector("#typewriter");
const typeWriterText = typeWriter.textContent;

let subStart = 0;
let subEnd = 1;
let letter;

/* ------------------ Functions ---------------------- */

function start() {
  typeWriter.textContent = "";
  typeWriterEffect();
}

function typeWriterEffect() {
  if (subStart < typeWriterText.length) {
    letter = typeWriterText.substring(subStart, subEnd);
    typeWriter.textContent += letter;
    subStart++;
    subEnd++;
    setTimeout(typeWriterEffect, 200);
  }
}
