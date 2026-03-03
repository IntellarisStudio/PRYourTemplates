/*
 * Page Transition V1 - Column Drop
 * © 2026 Intellaris Pvt. Ltd. All rights reserved.
 */

const app = document.querySelector('#app');
const transitionContainer = document.querySelector('#transition-container');
const columns = document.querySelectorAll('.transition-column');

const pages = {
    page1: {
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
};

function triggerTransition(callback) {
    const tl = gsap.timeline();

    // 1. Columns drop down one by one
    tl.to(columns, {
        y: '0%',
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.inOut'
    });

    // 2. Change page content while screen is covered
    tl.add(() => {
        if (callback) callback();
    });

    // 3. Columns exit downwards one by one
    tl.to(columns, {
        y: '100%',
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.inOut',
        delay: 0.2
    });

    // 4. Reset columns to top for next transition
    tl.set(columns, { y: '-100%' });
}

function renderPage(pageKey) {
    app.innerHTML = pages[pageKey].content;
    
    // Re-attach event listeners and set active state
    app.querySelectorAll('[data-page]').forEach(link => {
        if (link.getAttribute('data-page') === pageKey) {
            link.classList.add('active');
        }

        link.addEventListener('click', (e) => {
            const targetPage = e.target.getAttribute('data-page');
            navigateTo(targetPage);
        });
    });
}

function navigateTo(pageKey) {
    triggerTransition(() => {
        renderPage(pageKey);
    });
}

// Initial Render
window.addEventListener('load', () => {
    renderPage('page1');
});
