"use strict";
import { colors, randomIntegerFromInterval } from "./colors.js";
const refs = {
  documentBody: document.querySelector("body"),
  startButton: document.querySelector("[data-action='start']"),
  stopButton: document.querySelector('[data-action="stop"]')
};
let timerId;
function stopChangeBackgroundColor() {
  refs.startButton.removeAttribute("disabled");
  clearInterval(timerId);
}
function changeBackgroundColor() {
  refs.startButton.setAttribute("disabled", "");
  timerId = setInterval(cb => {
    const color = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[color];
  }, 1000);
}
refs.startButton.addEventListener("click", changeBackgroundColor);
refs.stopButton.addEventListener("click", stopChangeBackgroundColor);
