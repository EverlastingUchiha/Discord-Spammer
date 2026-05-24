# Discord Chat Spammer

A smart auto-text spammer for **Discord** that repeats whatever you select.  
Built as a Tampermonkey userscript.

Works on **Discord web app** (`discord.com`).

---

## Features

- Select any text and it will be spammed repeatedly in Discord chat or DM.
- Works with single letters, words, or full sentences.
- Example: Select `Everlasting` and spam starts sending `Everlasting` over and over.
- Example: Select `B` and the letter `B` will be spammed continuously.
- Example: Select any custom message and that exact text gets repeated.
- Simple and lightweight – no UI, just copy, paste, and go.
- No external dependencies – pure vanilla JavaScript.

---

## Installation

1. Install a userscript manager like **Tampermonkey**, **Greasemonkey**, or **Violentmonkey**.
2. Create a new script and paste the full source code.
3. Save – it will run automatically on `discord.com`.

---

## Usage

1. Type any message in a Discord channel or DM.
2. Select the text with your mouse.
3. Press `Ctrl+C` to copy, then `Ctrl+V` to paste.
4. The selected text will be spammed automatically.

Whatever you select and copy will keep repeating until you stop it.

---

## Examples

| Selected Text | Spammed Output |
|---------------|----------------|
| `B`           | B B B B B...   |
| `Everlasting` | Everlasting Everlasting Everlasting... |
| `Hello world` | Hello world Hello world Hello world... |

---

## Trick – How to Stop Spam

When spam is running and you want to stop it, the spam won't stop because the same text keeps getting pasted. Use this trick:

1. **Before** starting the spam, open another tab and copy (`Ctrl+C`) the word `stop`.
2. Or while spam is running, **open another browser tab**, type `stop` there and copy it.
3. Come back to the Discord tab and press `Ctrl+V` – now `stop` will be pasted and the spam will stop.

**Remember:** Always copy `stop` and keep it ready before you start spamming – that's the safest way.

---

## Author

**Itz_Krishna AKA Everlasting**
