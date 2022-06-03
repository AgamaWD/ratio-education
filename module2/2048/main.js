import contentRendering from '/js/contentRendering.js';
import {fontSize, fieldHeight} from '/js/calculatedStyles.js';

function resize() {
    fieldHeight();
    fontSize()
}

function init() {
    const container = document.getElementById("main")
    fontSize();
    contentRendering(container);
    fieldHeight();
}

document.addEventListener("DOMContentLoaded", init);
window.onresize = resize;
