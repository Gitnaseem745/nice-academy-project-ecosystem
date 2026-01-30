# 02. Planning

Keyboard chhune se pehle, planning zaroori hai. "Measure twice, cut once."

## 📐 The Structure (HTML)
Apni website ko ek document ki tarah sochiye. Main sections kaunse honge?

1.  **Header**: Logo aur Navigation links.
2.  **Hero**: Bada sa friendly "Hello".
3.  **About**: Text aur shayad ek photo.
4.  **Skills**: Jo technologies aapko aati hain.
5.  **Projects**: Aapke kaam ke cards.
6.  **Footer**: Copyright aur social links.

**Decision**: Hum semantic HTML5 tags use karenge: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`.

## 🎨 The Style (CSS)
**Theme**: Light Mode.
- **Background**: White (`#ffffff`) ya Off-White (`#f9f9f9`).
- **Text**: Dark Gray (`#333333`) kyuki pure black aankhon ke liye sharp hota hai.
- **Accent Color**: Koi *ek* color choose karein (jaise Deep Blue, Teal, ya Coral) buttons aur links ke liye.

**Layout Strategy**:
- **Mobile First**: Hum pehle mobile ke liye CSS likhenge, phir desktop ke liye `@media (min-width: 768px)` use karenge.
- **Flexbox**: Navbar aur content center karne ke liye best hai.
- **Grid**: "Skills" aur "Projects" ke liye perfect hai jaha items grid mein hote hain.

## 🧠 The Logic (JS)
Humein logic simple rakhna hai.
1.  **Mobile Menu**: Jab mobile par "Hamburger" icon click ho, toh menu slide hokar aana chahiye.
2.  **Smooth Scroll**: Jab nav link par click karein, toh page smoothly us section tak scroll hona chahiye.

## 📂 File Setup
Apne workspace mein ye folder structure banayein:

```text
/my-portfolio
  ├── index.html
  ├── style.css
  ├── script.js
  └── assets/
      └── (yaha images hongi)
```

**Task**: Ye files abhi banayein. `style.css` aur `script.js` ko apne `index.html` mein link karein.

[Aage: Execution ➡️](./03-execution.md)
