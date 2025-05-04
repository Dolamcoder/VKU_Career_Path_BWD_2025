// AOS
    AOS.init({
    duration: 1000, 
    });
  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  
  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        counter.innerText = '0';
        const countUp = () => {
          const count = +counter.innerText;
          const increment = target / speed;
  
          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(countUp, 10);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };
        countUp();
      };
  
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCount();
        }
      }, { threshold: 0.5 });
  
      observer.observe(counter);
    });
  };
  animateCounters();