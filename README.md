# Minefun.io Mouse Trail

A highly customizable mouse trail and click effects overlay for **minefun.io**, with over 1000 emojis, multiple particle modes, shapes, gradients, and pointer lock support.  
Built as a Tampermonkey userscript.

Press `Alt + 5` to open the settings panel.  
Works on `minefun.io` and all its subdomains.

---

## Features

- **Mouse Trail** – particles follow your cursor with smooth animation.
- **6 Animation Modes** – Fade, Trail, Sparkle, Ribbon, Pulse, Swirl.
- **8 Particle Shapes** – Circle, Square, Triangle, Star, Heart, Diamond, Hexagon, Cross.
- **Colour Options** – Solid colour, gradient blending, or full rainbow cycle.
- **Glow Effect** – Neon glow around each particle (toggleable).
- **Emoji Mode** – Replace particles with any emoji from a library of 1000+ icons. Choose up to 15 emojis.
- **Click Effects** – 5 distinct effects on click: Ripple, Blast, Shockwave, Orbital, Confetti.
- **Per‑Effect Settings** – Separate colour, gradient, size, and duration for each click effect.
- **Pointer Lock Support** – Works correctly even when the game captures the pointer (e.g., first‑person view).
- **Draggable Settings Modal** – Adjust every parameter via a sleek, tabbed interface.
- **Persistent Configuration** – All settings saved to `localStorage` and restored automatically.
- **No External Dependencies** – Pure vanilla JavaScript and Canvas API.

---

## Installation

1. Install a userscript manager like **Tampermonkey**, **Greasemonkey**, or **Violentmonkey**.
2. Create a new script and paste the full source code.
3. Save – it will run automatically on `minefun.io` and its subdomains.

---

## Usage

Once installed, the mouse trail is active by default.

- Move your mouse to see the particle trail.
- Click anywhere to trigger the selected click effect.
- Press `Alt + 5` to open the settings panel and customise everything.

### Settings Panel
- **Trail Particles** – choose mode, shape, length, size, fade speed, colour, rainbow, gradient, glow, emoji mode.
- **Click Effect** – choose effect type, size, duration, colour, gradient.
- **Emoji Picker** – click any emoji from the grid to add/remove; drag to scroll. Maximum 15 active emojis.
- **Reset All** – revert to default settings.
- **Info Section** – built‑in guide and Discord link.

All changes take effect immediately and are saved automatically.

---

## Spam Feature (Auto Text)

This script also includes a smart spam/auto-text feature:

- Type any word or sentence, then **select it** with your mouse.
- Press `Ctrl+C` to copy, then `Ctrl+V` to paste it into the chat box or DM.
- Whatever you selected will be spammed continuously.
- Examples:
  - Select `B` and start spamming – the letter `B` will be sent repeatedly.
  - Select `Everlasting` and start spamming – `Everlasting` will be sent repeatedly.
  - Select any custom message – that exact text will be spammed.

This allows you to quickly flood chat with any message of your choice, including single letters, words, or full sentences.

---

## Keyboard Shortcuts

| Shortcut      | Action                  |
|---------------|-------------------------|
| `Alt + 5`     | Open settings modal     |

---

## Customization

All settings are stored in `localStorage`. The main keys are:

| Key              | Description                                    |
|------------------|------------------------------------------------|
| `mt_on`          | Master on/off toggle                           |
| `mt_len`         | Trail length (number of particles)             |
| `mt_sz`          | Particle size                                  |
| `mt_clr`         | Base colour (hex)                              |
| `mt_glw`         | Glow enabled                                   |
| `mt_fd`          | Fade speed (0.85–0.995)                        |
| `mt_md`          | Animation mode (fade, trail, sparkle, etc.)    |
| `mt_gr`          | Gradient enabled                               |
| `mt_g1` / `mt_g2`| Gradient start and end colours                 |
| `mt_rb`          | Rainbow mode                                   |
| `mt_sh`          | Particle shape (circle, square, star, etc.)    |
| `mt_em`          | Emoji mode                                     |
| `mt_es`          | JSON array of selected emojis                  |
| `mt_fx`          | Click effect type                              |
| `mt_fs`          | Click effect size (30–200)                     |
| `mt_fdur`        | Effect duration in ms (200–1500)               |
| `mt_fxc`         | JSON object: per‑effect base colours           |
| `mt_fxg`         | JSON object: per‑effect gradient toggles       |
| `mt_fx1` / `mt_fx2` | JSON objects: per‑effect gradient colours |

You can pre‑configure these keys before the script runs, or simply use the in‑game settings modal.

---

## Author

**Itz_Krishna AKA Everlasting**
