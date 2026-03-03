import './style.scss';
import gsap from 'gsap';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="magnetic-container">
    <button class="magnetic-button" id="magnetic">
        <span>hover me</span>
    </button>
  </div>
`;

const magnetic = document.querySelector('#magnetic');
const text = magnetic.querySelector('span');

// Magnetic Effect Logic for the Button (Layer 1)
const xTo = gsap.quickTo(magnetic, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
const yTo = gsap.quickTo(magnetic, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

// Magnetic Effect Logic for the Text (Layer 2)
const xToText = gsap.quickTo(text, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
const yToText = gsap.quickTo(text, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = magnetic.getBoundingClientRect();
    
    // Calculate the distance from the center of the button
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Apply different multipliers to create depth
    xTo(x * 0.3);      // Button moves 30% of the mouse distance
    yTo(y * 0.3);
    
    xToText(x * 0.45);   // Text moves 45% of the mouse distance (reduced from 70%)
    yToText(y * 0.45);
};

const mouseLeave = () => {
    xTo(0);
    yTo(0);
    xToText(0);
    yToText(0);
};

magnetic.addEventListener("mousemove", mouseMove);
magnetic.addEventListener("mouseleave", mouseLeave);
