import { gsap } from 'gsap';

export const triggerTransition = (callback) => {
  const container = document.getElementById('transition-container');
  if (!container) return;

  const columns = container.querySelectorAll('.transition-column');

  const tl = gsap.timeline({
    onComplete: () => {
      // Logic after animation ends (if needed)
    }
  });

  // 1 by 1 coming down
  tl.to(columns, {
    y: '0%',
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.inOut'
  });

  // Call the callback to change content when columns are fully covering the screen
  tl.add(() => {
    if (callback) callback();
  });

  // Coming down further or going out? 
  // "Coming down 1 by 1" usually implies they cover the screen, then go away.
  // I'll make them go down to clear the screen after the callback.
  tl.to(columns, {
    y: '100%',
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.inOut',
    delay: 0.2
  });

  // Reset columns for next time
  tl.set(columns, { y: '-100%' });
};
