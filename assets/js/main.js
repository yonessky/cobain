/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
  spaceBetweem: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== SWIPER SERVICES ===============*/
var swiperPopular = new Swiper(".services__container", {
  spaceBetweem: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item, .services__accordion-item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value__accordion-header, .services__accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// /*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   origin: "top",
//   distance: "60px",
//   duration: 2500,
//   delay: "400",
//   // reset: true
// });

// sr.reveal(
//   `.home__title, .popular__container, .subscribe__container, .footer__container`
// );
// sr.reveal(`.home__description, .footer__info`, { delay: 500 });
// sr.reveal(`.home__search`, { delay: 600 });
// sr.reveal(`.home__value`, { delay: 700 });
// sr.reveal(`.home__images`, { delay: 800, origin: "bottom" });
// sr.reveal(`.logos__img`, { interval: 100 });
// sr.reveal(`.value__images, .contact__content`, { origin: "left" });
// sr.reveal(`.value__content, .contact__images`, { origin: "right" });

// /* ---------------------------------------------- /*
//          * Youtube video background
// /* ---------------------------------------------- */

// $(function () {
//   $(".video-player").mb_YTPlayer();
// });

// $("#video-play").click(function (event) {
//   event.preventDefault();
//   if ($(this).hasClass("fa-play")) {
//     $(".video-player").playYTP();
//   } else {
//     $(".video-player").pauseYTP();
//   }
//   $(this).toggleClass("fa-play fa-pause");
//   return false;
// });

// $("#video-volume").click(function (event) {
//   event.preventDefault();
//   if ($(this).hasClass("fa-volume-off")) {
//     $(".video-player").YTPUnmute();
//   } else {
//     $(".video-player").YTPMute();
//   }
//   $(this).toggleClass("fa-volume-off fa-volume-up");
//   return false;
// });

/*==========   counterUp  ==========*/
$(".counter").counterUp({
  delay: 10,
  time: 4000,
});


/*==========   Slick Carousel ==========*/
$(".slick-carousel").slick();

$(".slider-with-navs").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  dots: false,
  asNavFor: ".slider-nav",
});

$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-with-navs",
  dots: false,
  arrows: true,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: "15px",
});

/*----------  slick Carousel with Filter  ----------*/
$("#slick-filter-buttons .nav__link").on("click", function (e) {
  e.preventDefault();
  $(this).addClass("active").siblings().removeClass("active");
  var key = "." + $(this).data("value");

  $("#filter-carousel").slick("slickUnfilter");
  $("#filter-carousel").slick("slickFilter", key).slick("refresh");
  $("#filter-carousel").slick("slickGoTo", 0);
});


/*==========   Set Background-img to section   ==========*/
$(".bg-img").each(function () {
  var imgSrc = $(this).children("img").attr("src");
  $(this)
    .parent()
    .css({
      "background-image": "url(" + imgSrc + ")",
      "background-size": "cover",
      "background-position": "center",
    });
  $(this).parent().addClass("bg-img");
  if ($(this).hasClass("background-size-auto")) {
    $(this).parent().addClass("background-size-auto");
  }
  $(this).remove();
});
