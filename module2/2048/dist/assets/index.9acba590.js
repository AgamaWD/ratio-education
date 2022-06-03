const r=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};r();function a(i){i.innerHTML=`
        <header class="header">
            <h1 class="title">2048</h1>
            <div class="score">
                <p class="score-title">\u0441\u0447\u0451\u0442</p>
                <p class="score-number" id="current-score">0</p>
            </div>
            <div class="score">
                <p class="score-title">\u043B\u0443\u0447\u0448\u0438\u0439</p>
                <p class="score-number" id="best-score">0</p>
            </div>
            <button class="btn new-btn" type="button">\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430</button>
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
    `}function d(){const i=document.getElementById("main");let l=document.querySelector("html"),s=i.offsetWidth-20;l.style.fontSize=s/38+"px"}function o(){const i=document.getElementById("field");let l=i.offsetWidth;i.style.height=l+"px"}function u(){o(),d()}function f(){const i=document.getElementById("main");d(),a(i),o()}document.addEventListener("DOMContentLoaded",f);window.onresize=u;
