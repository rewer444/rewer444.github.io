$(document).ready(function(){

  //.gnb
  $('.gnb > li').on({
    mouseenter:function(){
      $('header').addClass('on');
    },
    mouseleave:function(){
      $('header').removeClass('on');
    }
  })

  //.main-slide
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });




})
