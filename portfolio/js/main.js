document.addEventListener('DOMContentLoaded', function() {
  // Плавная прокрутка по якорям
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 20, // -20px для отступа от хедера
          behavior: 'smooth'
        });
      }
    });
  });
});