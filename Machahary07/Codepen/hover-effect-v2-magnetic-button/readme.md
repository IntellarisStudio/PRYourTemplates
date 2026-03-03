# Magnetic Hover Button (V2)

A premium, two-layer magnetic hover effect for circular buttons, built with **HTML**, **CSS**, and **GSAP**.

## ✨ Features

- **Layered Magnetic Effect**: The button and text move at different speeds (30% vs 45%) to create a beautiful parallax depth feel.
- **GSAP quickTo**: High-performance animations using GSAP's optimized `quickTo` method for buttery smooth tracking.
- **Elastic Transitions**: Smooth, organic transitions when the mouse leaves the button area.
- **Premium Aesthetics**: Clean design with the **Outfit** Google Font and a minimalist black-on-white color palette.

## 🚀 How to Use (CodePen)

1. **HTML**: Copy the structure from `index.html`. Make sure to include the GSAP CDN:

   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
   ```

2. **CSS**: Copy the styles from `style.css`. We use CSS variables and flexbox for easy centering.

3. **JS**: Copy the logic from `script.js`. It uses standard mouse events (`mousemove`, `mouseleave`) to drive the magnetic force.

## 🛠️ Built With

- **HTML5**: Semantic structure.
- **Vanilla CSS**: Premium styling and typography.
- **GSAP (GreenSock)**: Professional-grade animation engine for the magnetic logic.

## 📝 Magnetic Logic

```javascript
// Layer 1 (Button Shape)
xTo(x * 0.3); // Moves 30% of mouse displacement

// Layer 2 (Inner Text)
xToText(x * 0.45); // Moves 45% of mouse displacement (creates depth)
```

Enjoy the premium feel! 🧲
