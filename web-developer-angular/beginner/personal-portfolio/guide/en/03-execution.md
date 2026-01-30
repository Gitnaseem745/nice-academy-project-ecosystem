# 03. Execution

Time to build. Follow these steps one by one.

## Step 1: The Skeleton (HTML)
Open `index.html`.
1.  Add the standard HTML5 boilerplate (`!` + Tab in VS Code).
2.  Inside `<body>`, create your main blocks:
    - `<header id="navbar">...</header>`
    - `<section id="hero">...</section>`
    - `<section id="about">...</section>`
    - `<section id="projects">...</section>`
    - `<footer id="contact">...</footer>`
3.  **Tip**: Give each section a standard padding class like `.section-padding` to keep spacing consistent.

## Step 2: Global Styles (CSS)
Open `style.css`.
1.  **Reset**: Remove default margins from `*`, `body`, and `h1-h6`. Set `box-sizing: border-box`.
2.  **Typography**: Set a nice font-family on the `body` (e.g., 'Inter', 'Segoe UI', sans-serif).
3.  **Variables**: Define your colors at the top:
    ```css
    :root {
      --bg-color: #ffffff;
      --text-color: #333;
      --accent-color: #007bff;
    }
    ```

## Step 3: The Header & Navigation
1.  **HTML**: Inside `<header>`, add a `.logo` and a `<nav>`. inside `<nav>`, use a `<ul>` for links.
2.  **CSS**: Use `display: flex; justify-content: space-between;` on the header to push logo and nav apart.
3.  **Mobile Challenge**: How will this look on a small screen? You might need to hide the `<ul>` on mobile and show a "hamburger" button.

## Step 4: The Hero Section
1.  Centering content is the classic CSS interview question.
2.  **Try this**: Use `min-height: 100vh;` on the hero section and `display: flex; align-items: center; justify-content: center;` to perfectly center your intro text.

## Step 5: Projects Grid
1.  **HTML**: Create a container `.projects-grid`. Inside, add separate `.project-card` divs.
2.  **CSS**: This is the perfect time for CSS Grid.
    ```css
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    ```
    *Explanation*: `auto-fit` and `minmax` make it magical. It will automatically create columns that wrap responsibly without you needing media queries!

## Step 6: Navigation Logic (JS)
Open `script.js`.
1.  Select your hamburger button and your nav menu using `document.querySelector`.
2.  Add a `click` event listener to the button.
3.  Inside the function, toggle a class (e.g., `.active`) on the nav menu.
4.  **CSS Link**: Make sure your CSS knows what to do when `.active` is present (e.g., `display: block` or `transform: translateX(0)`).

## Checkpoint
Open your `index.html` in the browser.
- Does everything stack nicely on mobile?
- Does the menu work?
- Are the colors consistent?

[Next: Review ➡️](./04-review.md)
