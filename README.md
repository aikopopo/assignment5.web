# Assignment 5 — JavaScript Basics (DOM & Events)

**Student:** Aigerim Karsakbay
**Group:** SE-2526

## Description

A multi-page website with small JavaScript tasks. Each task is on its own page, and all pages share the same navigation bar (Bootstrap).

| Page | Task | What it does |
|------|------|--------------|
| `index.html` | Task 0. First Script | Prints name and group to the console and shows an alert |
| `task1.html` | Task 1. Variables & Operators | Variables of different types, arithmetic operations, string concatenation (see the console) |
| `task2.html` | Task 2. Changing Content | A button changes the text of a paragraph |
| `task3.html` | Task 3. Changing Styles | One button changes the background color of a block, another changes the font size |
| `task4.html` | Task 4. Creating & Removing Elements | "Add Item" adds a list item, "Remove Item" removes the last one |
| `task5.html` | Task 5. Mouse Events | A box changes color on `mouseover` and restores it on `mouseout` |
| `task6.html` | Task 6. Keyboard Events | Shows the value of an input field in real time (`keyup`) |
| `task7.html` | Task 7. Calculator | Addition, subtraction, multiplication and division |
| `task8.html` | Task 8. To-Do App | Add, complete (strike-through) and delete tasks; tasks are stored in an array |

## Technologies

- HTML5
- CSS3 and Bootstrap 5 (via CDN)
- JavaScript (no libraries)

## How to run

1. Download or clone the repository.
2. Open `index.html` in a browser (double-click the file).
3. Use the navigation bar to switch between tasks.
4. For Task 0 and Task 1, open the browser console to see the output:
   - Chrome on Mac: `Cmd + Option + J`
   - Chrome on Windows: `Ctrl + Shift + J`

No installation or server is required. An internet connection is needed only to load Bootstrap.

## Project structure

```
├── index.html
├── task1.html ... task8.html
├── style.css
├── task8.css
├── index.js
└── task1.js ... task8.js
```

## Notes

- Task 8 does not use a database or `localStorage`: tasks are kept in an array and disappear when the page is reloaded.
