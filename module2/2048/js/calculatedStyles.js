export function fontSize() {
    const container = document.getElementById("main")
    let html = document.querySelector('html');
    let w = container.offsetWidth - 20;

    html.style.fontSize = w/38 + "px";
}

export function fieldHeight() {
    const field = document.getElementById("field");
    let fieldWidth = field.offsetWidth;
    field.style.height = fieldWidth + "px";
} 