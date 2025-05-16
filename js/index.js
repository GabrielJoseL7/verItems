const swiper = new Swiper('.swiper', {
    // Opciones
    direction: 'horizontal', // o 'vertical'
    loop: true, // Para que el carrusel sea infinito
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });