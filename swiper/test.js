var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".leftBtn",  // Класс для кнопки Next
        prevEl: ".rightBtn", // Класс для кнопки Prev
    },
});