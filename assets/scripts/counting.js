
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.count');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseFloat(counter.getAttribute('data-target'));
          const format = counter.getAttribute('data-format');
          const duration = 1800; // slightly faster
          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            let currentValue = target * progress;

            if (format === "2digit") {
              counter.textContent = currentValue < 10
                ? "0" + Math.floor(currentValue)
                : Math.floor(currentValue);
            } else if (format === "number-plus") {
              counter.textContent = Math.floor(currentValue) + "+";
            } else if (format === "star") {
  counter.innerHTML = `<span class="star">⭐</span> ${currentValue.toFixed(1)}`;
}


            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.6 });

    counters.forEach(counter => observer.observe(counter));
  });
