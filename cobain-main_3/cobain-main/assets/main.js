const scrollHeader = () => {
  const e = document.getElementById("header");
  this.scrollY >= 50
    ? e.classList.add("scroll-header")
    : e.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message"),
  sendEmail = (e) => {
    e.preventDefault(),
      "" === contactName.value ||
      "" === contactEmail.value ||
      "" === contactProject.value
        ? (contactMessage.classList.remove("color-blue"),
          contactMessage.classList.add("color-red"),
          (contactMessage.textContent = "Write all the input fields 💬"))
        : (emailjs
            .sendForm(
              "service_8ku0ajp",
              "template_d9hw035",
              "#contact-form",
              "EfUMcv3zkqiLtnKPS"
            )
            .then(
              () => {
                contactMessage.classList.add("color-blue"),
                  (contactMessage.textContent = "Message sent ✅"),
                  setTimeout(() => {
                    contactMessage.textContent = "";
                  }, 5e3);
              },
              (e) => {
                alert("OOPS! SOMETHING HAS FAILED...", e);
              }
            ),
          (contactName.value = ""),
          (contactEmail.value = ""),
          (contactProject.value = ""));
  };
contactForm.addEventListener("submit", sendEmail);
var swiperPopular = new Swiper(".services__container", {
    spaceBetweem: 32,
    grabCursor: !0,
    centeredSlides: !0,
    slidesPerView: "auto",
    loop: !0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiperGallery = new Swiper(".project-gallery", {
    spaceBetweem: 32,
    grabCursor: !0,
    centeredSlides: !0,
    slidesPerView: "auto",
    loop: !0,
    navigation: {
      nextEl: ".swiper-gallery-next",
      prevEl: ".swiper-gallery-prev",
    },
  });
const accordionItems = document.querySelectorAll(
  ".value__accordion-item, .services__accordion-item"
);
accordionItems.forEach((e) => {
  e.querySelector(
    ".value__accordion-header, .services__accordion-header"
  ).addEventListener("click", () => {
    const t = document.querySelector(".accordion-open");
    toggleItem(e), t && t !== e && toggleItem(t);
  });
});
const toggleItem = (e) => {
    const t = e.querySelector(".value__accordion-content");
    e.classList.contains("accordion-open")
      ? (t.removeAttribute("style"), e.classList.remove("accordion-open"))
      : ((t.style.height = t.scrollHeight + "px"),
        e.classList.add("accordion-open"));
  },
  sections = document.querySelectorAll("section[id]"),
  scrollActive = () => {
    const e = window.pageYOffset;
    sections.forEach((t) => {
      const o = t.offsetHeight,
        c = t.offsetTop - 58,
        s = t.getAttribute("id"),
        a = document.querySelector(".nav__menu a[href*=" + s + "]");
      e > c && e <= c + o
        ? a.classList.add("active-link")
        : a.classList.remove("active-link");
    });
  };
window.addEventListener("scroll", scrollActive);
const scrollUp = () => {
  const e = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? e.classList.add("show-scroll")
    : e.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
const themeButton = document.getElementById("theme-button"),
  darkTheme = "dark-theme",
  iconTheme = "ri-sun-line",
  selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon"),
  getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light",
  getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";
selectedTheme &&
  (document.body.classList["dark" === selectedTheme ? "add" : "remove"](
    darkTheme
  ),
  themeButton.classList["ri-moon-line" === selectedIcon ? "add" : "remove"](
    iconTheme
  )),
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme),
      themeButton.classList.toggle(iconTheme),
      localStorage.setItem(
        "selected-theme",
        document.body.classList.contains(darkTheme) ? "dark" : "light"
      ),
      localStorage.setItem(
        "selected-icon",
        themeButton.classList.contains(iconTheme)
          ? "ri-moon-line"
          : "ri-sun-line"
      );
  }),
  $(".counter").counterUp({ delay: 10, time: 4e3 }),
  $(".bg-img").each(function () {
    var e = $(this).children("img").attr("src");
    $(this)
      .parent()
      .css({
        "background-image": "url(" + e + ")",
        "background-size": "cover",
        "background-position": "center",
      }),
      $(this).parent().addClass("bg-img"),
      $(this).hasClass("background-size-auto") &&
        $(this).parent().addClass("background-size-auto"),
      $(this).remove();
  });
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((e) => {
  e.addEventListener("click", () => {
    const t = document.querySelector(e.dataset.target);
    tabContents.forEach((e) => {
      e.classList.remove("filters__active");
    }),
      t.classList.add("filters__active"),
      tabs.forEach((e) => {
        e.classList.remove("filter-tab-active");
      }),
      e.classList.add("filter-tab-active");
  });
});
const buttons = document.querySelectorAll(".card-buttons button"),
  cardSections = document.querySelectorAll(".card-section"),
  card = document.querySelector(".card"),
  handleButtonClick = (e) => {
    const t = e.target.getAttribute("data-section"),
      o = document.querySelector(t);
    "#cardabout" !== t
      ? card.classList.add("is-active")
      : card.classList.remove("is-active"),
      card.setAttribute("data-state", t),
      cardSections.forEach((e) => e.classList.remove("is-active")),
      buttons.forEach((e) => e.classList.remove("is-active")),
      e.target.classList.add("is-active"),
      o.classList.add("is-active");
  };
function loadMore(e, t) {
  $(e).on("click", function (e) {
    e.preventDefault(), $(this).fadeOut(), $(t).fadeIn();
  });
}
buttons.forEach((e) => {
  e.addEventListener("click", handleButtonClick);
}),
  loadMore(".loadMoreproject", ".project-hidden > .project__item"),
  loadMore(".loadMoremall", ".project-hiddenmall > .project__item"),
  loadMore(".loadMorehos", ".project-hiddenhos > .project__item"),
  loadMore(".loadMoreedu", ".project-hiddenedu > .project__item"),
  loadMore(".loadMoreoffc", ".project-hiddenoffc > .project__item"),
  loadMore(".loadMoresports", ".project-hiddensports > .project__item"),
  loadMore(".loadMoreother", ".project-hiddenother > .project__item");
