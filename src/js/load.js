import { generationContentList } from './render-projects';
import { renderReviews, reviewList } from './reviews';
import { createObserver } from './observer';

document.addEventListener('DOMContentLoaded', () => {
  generationContentList(0, 2);
  const observer = createObserver(renderReviews);
  observer.observe(reviewList);
});
