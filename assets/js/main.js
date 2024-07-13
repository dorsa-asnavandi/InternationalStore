$(function () {
  
  const sliderHero = new Swiper(".slider-hero", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".slider-hero-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  const salesSlider = new Swiper(".sales-slider", {

    spaceBetween: 30,
    loop: true,
    slidesPerView: 1,

    breakpoints: {

      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      960: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next-sales",
      prevEl: ".swiper-button-prev-sales",
    },
  });

  const categorySlider = new Swiper(".category-slider", {

    spaceBetween: 30,
    loop: true,
    slidesPerView: 2,

    breakpoints: {

      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      960: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next-category",
      prevEl: ".swiper-button-prev-category",
    },
  });

  const bestSell = new Swiper(".best-sell-slider", {

    spaceBetween: 30,
    loop: true,
    slidesPerView: 1,

    breakpoints: {

      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      960: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next-best-sell",
      prevEl: ".swiper-button-prev-best-sell",
    },
  });

  const exploreProducts = new Swiper(".explore-products-slider", {
    spaceBetween: 30,
    slidesPerView: 1,

    breakpoints: {

      576: {
        slidesPerView: 2,
        spaceBetween: 20,
        grid: {
          rows: 1,
          fill: "row",
        },
      },

      960: {
        slidesPerView: 3,
        spaceBetween: 40,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },

    navigation: {
      nextEl: ".swiper-button-next-explore-products",
      prevEl: ".swiper-button-prev-explore-products",
    },
  });

  $("#future_date").countdowntimer({
    dateAndTime: "2024/07/30 12:10:05",
    labelsFormat: true,
    displayFormat: "DHMS",
    size: "lg",
    borderColor: "transparent",
    backgroundColor: "transparent",
    fontColor: "#000000",
    timeSeparator: ":",
  });

  $("#future_date_special").countdowntimer({
    dateAndTime: "2024/07/27 23:10:05",
    labelsFormat: true,
    displayFormat: "DHMS",
    borderColor: "transparent",
    backgroundColor: "transparent",
    fontColor: "white",
    timeSeparator: ":",
  });

  $("#top").click(function (e) {
    e.preventDefault();
    $("body,html").animate({
      scrollTop: 0,
    });
  });

});
