import './style.css'
import { gsap } from 'gsap'

const app = document.querySelector('#app')
const loader = document.querySelector('#loader')
const counterElement = document.querySelector('#counter')
const progressBar = document.querySelector('#progress-bar')

// Persistent UI elements
const logoContainer = document.createElement('div')
logoContainer.className = 'logo-container'
logoContainer.innerHTML = `<img src="/studio-logo-s-white.svg" alt="Studio Logo">`
document.body.appendChild(logoContainer)

const sourceLink = document.createElement('a')
sourceLink.className = 'source-link underline-hover'
sourceLink.href = 'https://github.com/IntellarisStudio/PRYourTemplates/tree/main/Machahary07/page-loader-v1-counter'
sourceLink.target = '_blank'
sourceLink.textContent = 'Source-Code'
document.body.appendChild(sourceLink)

const demoLink = document.createElement('a')
demoLink.className = 'demo-link underline-hover'
demoLink.href = 'https://istudio-page-loader-v1-counter.netlify.app'
demoLink.target = '_blank'
demoLink.textContent = 'Live-Demo'
document.body.appendChild(demoLink)

const copyright = document.createElement('div')
copyright.className = 'copyright'
copyright.textContent = '© 2026 Intellaris Pvt. Ltd.'
document.body.appendChild(copyright)

// Home page content
app.innerHTML = `
  <a class="main-button underline-hover" onclick="window.location.reload()">Refresh Me to see transition!</a>
`

// Loader Animation
function startLoader() {
  let counter = { value: 0 };
  
  gsap.to(counter, {
    value: 100,
    duration: 3,
    ease: "power2.inOut",
    onUpdate: () => {
      const val = Math.floor(counter.value);
      counterElement.textContent = val;
      progressBar.style.width = val + '%';
    },
    onComplete: () => {
      revealApp();
    }
  });
}

function revealApp() {
  gsap.to(loader, {
    y: "-100%",
    duration: 1,
    ease: "power4.inOut"
  });
}

// Start sequence
window.addEventListener('load', () => {
  startLoader();
});
