import './style.css'
import { triggerTransition } from './column-drop-transition'

const app = document.querySelector('#app')

// Create persistent UI elements
const logoContainer = document.createElement('div')
logoContainer.className = 'logo-container'
logoContainer.innerHTML = `<img src="/studio-logo-s-white.svg" alt="Studio Logo">`
document.body.appendChild(logoContainer)

const sourceLink = document.createElement('a')
sourceLink.className = 'source-link'
sourceLink.href = 'https://github.com/IntellarisStudio/PRYourTemplates'
sourceLink.target = '_blank'
sourceLink.textContent = 'Source-Code'
document.body.appendChild(sourceLink)

const demoLink = document.createElement('a')
demoLink.className = 'demo-link'
demoLink.href = 'https://istudio-page-transition-v1-columnDrop.netlify.app'
demoLink.target = '_blank'
demoLink.textContent = 'Live-Demo'
document.body.appendChild(demoLink)

const copyright = document.createElement('div')
copyright.className = 'copyright'
copyright.textContent = '© 2026 Intellaris Pvt. Ltd.'
document.body.appendChild(copyright)

// Create transition container
const transitionContainer = document.createElement('div')
transitionContainer.id = 'transition-container'
for (let i = 0; i < 5; i++) {
  const col = document.createElement('div')
  col.className = 'transition-column'
  transitionContainer.appendChild(col)
}
document.body.appendChild(transitionContainer)

const pages = {
  page1: {
    class: 'page-1',
    content: `
      <div class="page page-1">
        <div class="nav-links">
          <a data-page="page1">PAGE 1</a>
          <a data-page="page2">PAGE 2</a>
          <a data-page="page3">PAGE 3</a>
        </div>
      </div>
    `
  },
  page2: {
    class: 'page-2',
    content: `
      <div class="page page-2">
        <div class="nav-links">
          <a data-page="page1">PAGE 1</a>
          <a data-page="page2">PAGE 2</a>
          <a data-page="page3">PAGE 3</a>
        </div>
      </div>
    `
  },
  page3: {
    class: 'page-3',
    content: `
      <div class="page page-3">
        <div class="nav-links">
          <a data-page="page1">PAGE 1</a>
          <a data-page="page2">PAGE 2</a>
          <a data-page="page3">PAGE 3</a>
        </div>
      </div>
    `
  }
}

function renderPage(pageKey) {
  app.innerHTML = pages[pageKey].content
  
  // Re-attach event listeners
  app.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetPage = e.target.getAttribute('data-page')
      navigateTo(targetPage)
    })
  })
}

function navigateTo(pageKey) {
  triggerTransition(() => {
    renderPage(pageKey)
  })
}

// Initial render
renderPage('page1')
