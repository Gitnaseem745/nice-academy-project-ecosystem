# 03. Execution

Chaliye banate hain. Ek ek step follow karein.

## Step 1: The Skeleton (HTML)
`index.html` open karein.
1.  Standard HTML5 boilerplate add karein (`!` + Tab VS Code mein).
2.  `<body>` ke andar main blocks banayein:
    - `<header id="navbar">...</header>`
    - `<section id="hero">...</section>`
    - `<section id="about">...</section>`
    - `<section id="projects">...</section>`
    - `<footer id="contact">...</footer>`
3.  **Tip**: Har section ko ek `class="section-padding"` dein taaki spacing consistent rahe.

## Step 2: Global Styles (CSS)
`style.css` open karein.
1.  **Reset**: `*`, `body`, aur `h1-h6` se default margins hata dein. `box-sizing: border-box` set karein.
2.  **Typography**: `body` par koi accha font set karein (jaise 'Inter', 'Segoe UI').
3.  **Variables**: Top par colors define karein:
    ```css
    :root {
      --bg-color: #ffffff;
      --text-color: #333;
      --accent-color: #007bff;
    }
    ```

## Step 3: The Header & Navigation
1.  **HTML**: `<header>` mein ek `.logo` aur ek `<nav>` daalein. `<nav>` ke andar `<ul>` links ke liye use karein.
2.  **CSS**: `display: flex; justify-content: space-between;` use karein taaki logo aur nav dur dur ho lein.
3.  **Mobile Challenge**: Chote screen par ye kaisa dikhega? Sayad aapko `<ul>` chupana pade aur "hamburger" button dikhana pade.

## Step 4: The Hero Section
1.  Content ko center karna CSS ka classic interview question hai.
2.  **Try this**: `min-height: 100vh;` use karein aur `display: flex; align-items: center; justify-content: center;` lagayein. Sab perfectly center ho jayega.

## Step 5: Projects Grid
1.  **HTML**: Ek container `.projects-grid` banayein. Uske andar alag alag `.project-card` divs daalein.
2.  **CSS**: Yaha CSS Grid use karna best hai.
    ```css
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    ```
    *Samajhne wali baat*: `auto-fit` aur `minmax` magic karte hain. Ye automatically columns bana dega jo screen size ke hisaab se adjust honge!

## Step 6: Navigation Logic (JS)
`script.js` open karein.
1.  Apne hamburger button aur nav menu ko `document.querySelector` se select karein.
2.  Button par `click` event listener lagayein.
3.  Function ke andar, nav menu par ek class toggle karein (jaise `.active`).
4.  **CSS Link**: Ensure karein ki CSS ko pata ho ki jab `.active` class ho toh kya karna hai (jaise `display: block` ya `transform: translateX(0)`).

## Checkpoint
Apna `index.html` browser mein open karein.
- Kya mobile par sab sahi dikh raha hai?
- Kya menu kaam kar raha hai?
- Kya colors acche lag rahe hain?

[Aage: Review ➡️](./04-review.md)
