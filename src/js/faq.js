// 'use strict';
// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// document.addEventListener('DOMContentLoaded', () => {
//   const accordion = new Accordion('.accordion', {
//     duration: 300,
//     showMultiple: false,
//   });
//   console.log(accordion);
// });
document.querySelectorAll('.wrapper-faq').forEach(item => {
  item.addEventListener('click', function () {
    const parent = this.parentElement;
    document.querySelectorAll('.accordion-item').forEach(accItem => {
      if (accItem !== parent) {
        accItem.classList.remove('active');
      }
    });
    parent.classList.toggle('active');
  });
});
