export const createObserver = (renderFunction, margin = 0, threShold = 0) => {
  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          renderFunction();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: `${margin}px 0px ${margin}px 0px`,
      threshold: threShold,
    }
  );
};
