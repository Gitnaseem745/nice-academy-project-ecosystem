# 02. Planning

Before we touch the keyboard, we must plan. "Measure twice, cut once."

## 📐 The Structure (HTML)
Think of your website as a document. What are the main sections?

1.  **Header**: Logo and Navigation.
2.  **Hero**: Big friendly "Hello".
3.  **About**: Text and maybe a photo.
4.  **Skills**: List of technologies.
5.  **Projects**: Cards showing your work.
6.  **Footer**: Copyright and social links.

**Decision**: We will use semantic HTML5 tags: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`.

## 🎨 The Style (CSS)
**Theme**: Light Mode.
- **Background**: White (`#ffffff`) or Off-White (`#f9f9f9`).
- **Text**: Dark Gray (`#333333`) for better readability than pure black.
- **Accent Color**: Pick *one* color (e.g., Deep Blue, Teal, or Coral) for buttons and links.

**Layout Strategy**:
- **Mobile First**: We will write CSS for mobile screens first, then use `@media (min-width: 768px)` to adjust for desktops.
- **Flexbox**: Great for the Navbar and centering content.
- **Grid**: Perfect for the "Skills" and "Projects" sections where items are in a grid.

## 🧠 The Logic (JS)
We want to keep it simple.
1.  **Mobile Menu**: When clicking the "Hamburger" icon on mobile, the menu needs to slide in or appear.
2.  **Smooth Scroll**: When clicking a nav link, the page should scroll smoothly to that section.

## 📂 File Setup
Go ahead and create this folder structure in your workspace:

```text
/my-portfolio
  ├── index.html
  ├── style.css
  ├── script.js
  └── assets/
      └── (your images go here)
```

**Task**: Create these files now. Link `style.css` and `script.js` in your `index.html`. Verify they are working by adding a `console.log('Hello')` in JS and a `body { background: red; }` in CSS (then remove them!).

[Next: Execution ➡️](./03-execution.md)
