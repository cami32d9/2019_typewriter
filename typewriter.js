"use strict";

document.addEventListener("DOMContentLoaded", start);

const typeWriter = document.querySelector("#typewriter");
const typeWriterText = typeWriter.textContent;

let subStart = 0;
let letter;

/* ------------------ Functions ---------------------- */

function start() {
  typeWriter.textContent = "";
  typeWriterEffect();
}

function typeWriterEffect() {
  if (subStart < typeWriterText.length) {
    letter = typeWriterText.substring(subStart, subStart + 1);
    typeWriter.textContent += letter;
    subStart++;
    setTimeout(typeWriterEffect, 200);
  }
}
