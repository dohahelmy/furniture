$(function () {
  $("#modal-btn, .modal-close").click(function () {
    $("body, .modal-dialog, .modal").toggleClass("active");
  });
});

$('.common-carousel').owlCarousel({
  loop: false,
  rtl: true,
  margin: 12,
  dots: true,
  nav: true,
  navText: ["<img src='assets/img/arrow.svg' alt='Next' />", "<img src='assets/img/arrow.svg' alt='Prev' />"],
  stagePadding: 25,
  responsive: {
    0: {
      items: 2
    },
    475: {
      items: 3
    },
    992: {
      items: 4
    },
  }
})
$('.banners-carousel').owlCarousel({
  items: 1,
  autoplay: true,
  loop: true,
  rtl: true,
  center: true,
  dots: true,
  nav: true,
  navText: ["<img src='assets/img/arrow.svg' alt='Next' />", "<img src='assets/img/arrow.svg' alt='Prev' />"],
})