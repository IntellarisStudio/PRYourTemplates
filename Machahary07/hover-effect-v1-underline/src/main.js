import './style.css'

const app = document.querySelector('#app')

// Add logo
const logoContainer = document.createElement('div')
logoContainer.className = 'logo-container'
logoContainer.innerHTML = `<img src="/studio-logo-s-white.svg" alt="Studio Logo">`
document.body.appendChild(logoContainer)

// Add source link
const sourceLink = document.createElement('a')
sourceLink.className = 'source-link underline-hover'
sourceLink.href = 'https://github.com/IntellarisStudio/PRYourTemplates'
sourceLink.target = '_blank'
sourceLink.textContent = 'Source-Code'
document.body.appendChild(sourceLink)

const demoLink = document.createElement('a')
demoLink.className = 'demo-link underline-hover'
demoLink.href = 'https://istudio-hover-effect-v1-underline.netlify.app'
demoLink.target = '_blank'
demoLink.textContent = 'Live-Demo'
document.body.appendChild(demoLink)

const copyright = document.createElement('div')
copyright.className = 'copyright'
copyright.textContent = '© 2026 Intellaris Pvt. Ltd.'
document.body.appendChild(copyright)

// Add main link
app.innerHTML = `
  <a class="main-link underline-hover">Hover Me!</a>
  <div class="mobile-notice">
    <p>This effect is only for desktop screens</p>
    <a href="https://studio.intellaris.co" class="resources-link underline-hover" target="_blank">view other resources</a>
  </div>
`
