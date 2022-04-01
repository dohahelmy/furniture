$(function () {
  $("#modal-btn, .modal-close").click(function () {
    $("body, .modal-dialog, .modal").toggleClass("active");
  });
});

$('.owl-carousel').owlCarousel({
  loop: false,
  rtl: true,
  margin: 12,
  dots: false,
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