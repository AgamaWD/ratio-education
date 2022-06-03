export default function contentRendering(container) {

    container.innerHTML = `
        <header class="header">
            <h1 class="title">2048</h1>
            <div class="score">
                <p class="score-title">счёт</p>
                <p class="score-number" id="current-score">0</p>
            </div>
            <div class="score">
                <p class="score-title">лучший</p>
                <p class="score-number" id="best-score">0</p>
            </div>
            <button class="btn new-btn" type="button">Новая игра</button>
        </header>
        <div class="field" id="field">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
    `
}