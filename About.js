const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
  });

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat h3");
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.replace(/\D/g, '');
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment + counter.getAttribute("data-suffix");
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + counter.getAttribute("data-suffix");
      }
    };
    updateCount();
  });
});