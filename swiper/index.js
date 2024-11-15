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
  
