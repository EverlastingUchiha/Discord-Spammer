// ==UserScript==
// @name         Discord Spammer
// @namespace    http://tampermonkey.net
// @version      1.0
// @description  Type "spam WORD" to start, "stop" to stop.
// @author       Itz_Krishna AKA Everlasting
// @match        *://*.discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let active = false;
    let word = '';
    let timer = null;

    const send = (txt) => {
        let box = document.querySelector('[role="textbox"]');
        if (!box) return;

        let ev = new InputEvent('beforeinput', {
            data: txt,
            inputType: 'insertText',
            bubbles: true,
            cancelable: true,
        });
        box.dispatchEvent(ev);

        setTimeout(() => {
            let ent = new KeyboardEvent('keydown', {
                bubbles: true,
                cancelable: true,
                keyCode: 13,
                key: 'Enter'
            });
            box.dispatchEvent(ent);
        }, 100);
    };

    window.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;

        let box = document.querySelector('[role="textbox"]');
        if (!box) return;

        let txt = box.innerText.trim();

        if (txt.startsWith("spam ")) {
            e.preventDefault();
            word = txt.slice(5);
            if (word) {
                active = true;
                if (timer) clearInterval(timer);
                timer = setInterval(() => send(word), 1000);
            }
        }
        else if (txt === "stop") {
            e.preventDefault();
            active = false;
            if (timer) clearInterval(timer);
            timer = null;
        }
    }, true);
})();
