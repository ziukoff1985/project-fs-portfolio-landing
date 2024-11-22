import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('#ac-list', {
    closeOther: true,
    openFirst: true,
  });

  const firstAccordionItem = document.querySelector('#ac-list .accordion-item');
  const firstAccordionTrigger =
    firstAccordionItem?.querySelector('.ac-trigger');

  if (firstAccordionTrigger) {
    firstAccordionTrigger.click();
  }
});
