# Page Loader V1 - Counter (Pure HTML/CSS/JS)

**© 2026 Intellaris Pvt. Ltd.**

A premium, high-impact page loader featuring a synchronized percentage counter and progress bar animation. This transition provides a professional bridge between initial site loading and site content.

## ✨ Features

- **GSAP Powered**: Uses the GreenSock Animation Platform for ultra-smooth easing and performance.
- **Synchronized Counter**: A large, bold percentage counter (0-100) that reflects the loading progress.
- **Dynamic Progress Bar**: A sleek bottom-aligned progress bar that grows in perfect sync with the counter.
- **Smooth Reveal**: A "sliding door" transition using `power4.inOut` easing to reveal the main content.
- **Premium Aesthetics**: Features a signature Intellaris Red (`#dc2626`) background and Poppins typography.
- **Fully Responsive**: Scaled fonts and bar heights for mobile, tablet, and desktop screens.

## 🚀 How it Works

1.  **Loader Phase**: The `#loader` overlay covers the entire viewport.
2.  **Counter Logic**: A JavaScript object value is tweened from 0 to 100 over a 3-second duration using GSAP.
3.  **Real-time Updates**: The `onUpdate` callback updates both the text in the `#counter` div and the `width` of the `#progress-bar`.
4.  **Completion**: Once the counter hits 100, the `revealApp()` function triggers, sliding the entire loader out of view.

## 🛠️ Usage

1.  Include the GSAP CDN in your project:
    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    ```
2.  Copy the CSS structure for `#loader`, `#counter`, and `#progress-bar`.
3.  Initialize the sequence using the provided `script.js`.

## 📄 License

© 2026 Intellaris Pvt. Ltd. All rights reserved.
