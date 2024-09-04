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
const loadMoreBtn = document.querySelector(".load-more-btn");
const isVisibled = document.querySelector(".hidden-section");
const remoteBtn = document.querySelector(".remote-btn");

function isVisible() {
  setTimeout(() => {
    isVisibled.classList.remove("isnt-visible");
    loadMoreBtn.classList.add("isnt-visible");
    remoteBtn.classList.remove("isnt-visible");
  }, 100);
}
loadMoreBtn.addEventListener("click", isVisible);

function isRemote() {
  setTimeout(() => {
    isVisibled.classList.add("isnt-visible");
    loadMoreBtn.classList.remove("isnt-visible");
    remoteBtn.classList.add("isnt-visible");
  }, 100);
}
remoteBtn.addEventListener("click", isRemote);

const loadMoreBtnHit = document.querySelector(".load-more-btn-hit");
const isVisibledHit = document.querySelector(".hidden-section-hit");
const remoteBtnHit = document.querySelector(".remote-btn-hit");

function isVisibleHit() {
  setTimeout(() => {
    isVisibledHit.classList.remove("isnt-visible");
    loadMoreBtnHit.classList.add("isnt-visible");
    remoteBtnHit.classList.remove("isnt-visible");
  }, 100);
}
loadMoreBtnHit.addEventListener("click", isVisibleHit);

function isRemoteHit() {
  setTimeout(() => {
    isVisibledHit.classList.add("isnt-visible");
    loadMoreBtnHit.classList.remove("isnt-visible");
    remoteBtnHit.classList.add("isnt-visible");
  }, 100);
}
remoteBtnHit.addEventListener("click", isRemoteHit);
