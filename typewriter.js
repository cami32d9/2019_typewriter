"use strict";

document.addEventListener("DOMContentLoaded", start);

const typeWriter = document.querySelector("#typewriter");
const typeWriterText = typeWriter.textContent;

let index = 0;

/* ------------------ Functions ---------------------- */

function start() {
  typeWriter.textContent = "";
  typeWriterEffect();
}

function typeWriterEffect() {
  if (index <= typeWriterText.length) {
    typeWriter.textContent = typeWriterText.substring(0, index);
    index++;
    setTimeout(typeWriterEffect, 200);
  }
}
