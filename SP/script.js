// Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Закрываем меню при клике на мобильном
    const menu = document.querySelector('.nav');
    if (window.innerWidth <= 768 && menu.classList.contains('active')) {
      menu.classList.remove('active');
      document.querySelector('.menu-toggle').classList.remove('active');
    }
    
    // Определяем целевую секцию
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Плавная прокрутка
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Учитываем высоту хедера
        behavior: 'smooth'
      });
    }
  });
});

// Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
  
  // Анимация гамбургера
  const hamburger = document.querySelector('.hamburger');
  hamburger.classList.toggle('active');
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    document.querySelector('.hamburger').classList.remove('active');
  }
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      document.querySelector('.hamburger').classList.remove('active');
    }
  });
});

// Анимация гамбургера
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
});

// Плавная прокрутка при загрузке страницы (если есть якорь в URL)
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  }
});

// Анимация появления элементов при скролле
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.1
});

// Применяем анимацию к секциям
document.querySelectorAll('section, .team-photo, .service-card, .portfolio-item').forEach(section => {
  observer.observe(section);
});

// Добавляем класс для анимации
document.querySelectorAll('section, .team-photo, .service-card, .portfolio-item').forEach(section => {
  section.classList.add('animate-hidden');
});

// Анимация для кнопки
const submitButton = document.querySelector('.btn-submit');
submitButton.addEventListener('click', function() {
  this.classList.add('btn-submit-pressed');
  setTimeout(() => {
    this.classList.remove('btn-submit-pressed');
  }, 300);
});

// Форма записи
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Валидация
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    
    if (name && phone && service) {
      // Показываем успешное сообщение
      const originalText = this.querySelector('.btn-submit span:last-child').textContent;
      this.querySelector('.btn-submit span:last-child').textContent = 'Заявка отправлена!';
      this.querySelector('.btn-submit').classList.add('btn-success');
      
      // Сбрасываем форму
      setTimeout(() => {
        bookingForm.reset();
        this.querySelector('.btn-submit span:last-child').textContent = originalText;
        this.querySelector('.btn-submit').classList.remove('btn-success');
      }, 3000);
    }
  });
}

// Анимация гамбургера
const hamburgerLines = document.querySelectorAll('.hamburger');
hamburgerLines.forEach(line => {
  line.addEventListener('click', () => {
    line.classList.toggle('active');
  });
});