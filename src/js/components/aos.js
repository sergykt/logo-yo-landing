import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease-in-out', 
  once: true, 
  mirror: false,
  anchorPlacement: 'top-bottom',
});