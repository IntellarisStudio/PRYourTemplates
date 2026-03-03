# Hover Effect V1 - Underline (Pure HTML/CSS/JS)

**© 2026 Intellaris Pvt. Ltd.**

A premium, minimalist hover effect featuring a smooth "passing-through" underline animation. This project is a simplified version of the original interactive button effect, optimized for CodePen and static hosting.

## ✨ Features

- **Modern Underline Animation**: Uses CSS `transform-origin` manipulation to create a "draw-in from left, exit to right" motion sequence.
- **Premium Aesthetics**: Built with the **Poppins** typeface and a sleek dark mode palette.
- **Micro-interactions**: High-performance animations using `cubic-bezier` timing functions for a premium feel.
- **Fully Responsive**: Includes a specialized mobile view with a custom notice for non-hover devices.
- **Lightweight**: Zero dependencies. Just pure HTML, CSS, and some optional JS.

## 🚀 How it Works

The core magic lies in the `.underline-hover::after` pseudo-element:

1.  **Initial State**: The underline is scaled to `0` and anchored to the `right`.
2.  **Hover State**: It scales to `1` and pivots from the `left`, making it look like it's drawing across.
3.  **On Leave**: The origin shifts back to the `right`, so the line "follows" the cursor out.

```css
.underline-hover::after {
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}

.underline-hover:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

## 🛠️ Installation & Usage

1.  Clone this repository or copy the folder.
2.  Open `index.html` in any modern browser.
3.  To use in your own project, simply copy the `.underline-hover` classes from `style.css`.

## 📱 Mobile Support

On mobile devices (screens < 1024px), the main interactive hover areas are hidden, and a fallback "Mobile Notice" is displayed to ensure a clean user experience on touch-only screens.

## 📄 License

© 2026 Intellaris Pvt. Ltd. All rights reserved.
