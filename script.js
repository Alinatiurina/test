const btn = document.querySelector(".solid-menu-btn");
const closeBtn = document.querySelector(".mobile-close-btn");
const mob = document.querySelector(".mobile-menu");
const mobLi = document.querySelector(".mobile-menu-item");
const mainDoc = document.querySelector("main");

function mobileMenuOpen() {
  setTimeout(() => {
    mob.classList.add("is-open");
  }, 100);
}

function mobileMenuClose() {
  mob.classList.remove("is-open");
}
btn.addEventListener("click", mobileMenuOpen);
closeBtn.addEventListener("click", mobileMenuClose);

mainDoc.addEventListener("click", (e) => {
  if (e.target !== mob) {
    mob.classList.remove("is-open");
    return;
  }
});

mobLi.addEventListener("click", (e) => {
  mob.classList.remove("is-open");
  return;
});

const swiperBanner = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  keyboard: true,
  mousewheel: true,
  slidesPerView: 1,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".brand-btn-next",
    prevEl: ".brand-btn-prev",
  },
  keyboard: true,
  mousewheel: true,
  slidesPerView: 1,
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1180: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
