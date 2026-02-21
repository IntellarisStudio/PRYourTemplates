import './style.css';
import { gsap } from 'gsap';

document.querySelector('#app').innerHTML = `
  <div>
    <button class="menu-toggle" id="menuToggle">
      <span></span>
      <span></span>
      <span></span>
    </button>
    
    <div class="menu-overlay" id="menuOverlay">
      <nav class="menu-nav">
        <ul>
          <li class="menu-item"><a href="#" class="menu-link" data-text="Home">Home</a></li>
          <li class="menu-item"><a href="#" class="menu-link" data-text="About">About</a></li>
          <li class="menu-item"><a href="#" class="menu-link" data-text="Contact">Contact</a></li>
        </ul>
      </nav>
    </div>

    <div class="hero-text">
      <h1>Premium Experience</h1>
      <p>Click the menu to see the magic.</p>
    </div>
  </div>
`;

const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks = document.querySelectorAll('.menu-link');

// Helper function to split text into characters
function splitText(element) {
  const text = element.innerText;
  element.innerHTML = '';
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.classList.add('char');
    span.innerText = char === ' ' ? '\u00A0' : char; // Handle spaces
    element.appendChild(span);
  });
}

// Prepare links for animation
menuLinks.forEach(link => splitText(link));

let isOpen = false;

// Create GSAP timeline
const tl = gsap.timeline({ paused: true });

tl.to(menuOverlay, {
  duration: 1.2,
  clipPath: 'circle(150% at 100% 0%)',
  ease: 'power4.inOut'
})
  .to('.char', {
    duration: 0.8,
    y: 0,
    stagger: 0.03,
    ease: 'power4.out',
    delay: -0.6
  });

menuToggle.addEventListener('click', () => {
  if (!isOpen) {
    document.body.classList.add('menu-active');
    menuOverlay.classList.add('open');
    tl.play();
  } else {
    document.body.classList.remove('menu-active');
    tl.reverse();
    setTimeout(() => {
      menuOverlay.classList.remove('open');
    }, 1200);
  }
  isOpen = !isOpen;
});

// Close menu when link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('menu-active');
    tl.reverse();
    setTimeout(() => {
      menuOverlay.classList.remove('open');
    }, 1200);
    isOpen = false;
  });
});
