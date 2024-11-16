/* const iframe = document.getElementById('swiperFrame');
iframe.onload = function() {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
};
 */


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".leftBtn",
    prevEl: ".rightBtn",
  },
});



function adjustTextLength() {
  let maxLength;  // Переменная для хранения максимальной длины текста
  const textElements = document.querySelectorAll('.textLenght');

  textElements.forEach(element => {
    const text = element.textContent || element.innerText;

    // Устанавливаем maxLength в зависимости от ширины экрана
    if (window.innerWidth <= 600) {
      maxLength = 10;  // Меньше текста при ширине экрана 600px и меньше
    } else if (window.innerWidth <= 700) {
      maxLength = 15;  // Немного больше текста при ширине экрана от 601px до 700px
    } else {
      maxLength = text.length;  // При ширине экрана больше 700px показываем полный текст
    }

    // Обрезаем текст, если его длина больше maxLength
    if (text.length > maxLength) {
      element.textContent = text.slice(0, maxLength) + '...';
    } else {
      element.textContent = text;  // Показываем полный текст, если длина меньше или равна maxLength
    }
  });
}

// Вызываем функцию при изменении размера экрана и при загрузке страницы
window.addEventListener('resize', adjustTextLength);
window.addEventListener('load', adjustTextLength);
