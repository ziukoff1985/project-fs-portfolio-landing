export const createObserver = renderFunction => {
  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          renderFunction(); // Вызываем переданную функцию
          observer.unobserve(entry.target); // Прекращаем отслеживание
        }
      });
    },
    {
      rootMargin: '0px 0px -300px 0px',
      threshold: 0,
    }
  );
};
