# Page Transition V1 - Column Drop (Pure HTML/CSS/JS)

**© 2026 Intellaris Pvt. Ltd.**

A premium, cinematic page transition featuring a sequential "Column Drop" animation. This effect provides a high-end feel for multi-page navigations within a single-page architecture.

## ✨ Features

- **GSAP Staggered Animation**: Utilizes GSAP's stagger feature to create a dynamic window-blind effect.
- **Cinematic Transitions**: Columns drop smoothly to cover the initial screen and reveal the new content.
- **Dynamic Content Injection**: Effortlessly switches between "pages" (state-based content) while hidden by the overlay.
- **Premium Aesthetics**: High-contrast colors paired with the Poppins typeface for a modern look.
- **Fully Responsive**: Adapts navigation and logo scaling for mobile, tablet, and desktop screens.

## 🚀 How it Works

1.  **Trigger**: User clicks on a navigation link (PAGE 1, PAGE 2, PAGE 3).
2.  **Phase 1 (Enter)**: Five vertical columns (`.transition-column`) drop from `-100%` to `0%` of the viewport height with a 0.1s stagger.
3.  **Phase 2 (Content Swap)**: While the screen is fully covered by the columns, the `#app` innerHTML is updated with the target page's content.
4.  **Phase 3 (Exit)**: The columns continue their motion downwards from `0%` to `100%`, revealing the new page.
5.  **Phase 4 (Reset)**: Columns are instantly reset to `-100%` off-screen, ready for the next transition.

## 🛠️ Usage

1.  Include the GSAP CDN in your project:
    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    ```
2.  Define your transition columns and container in HTML.
3.  Use the `triggerTransition` function in `script.js` to wrap your content-loading logic.

## 📄 License

© 2026 Intellaris Pvt. Ltd. All rights reserved.
