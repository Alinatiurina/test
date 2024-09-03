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
});

const swiper = new Swiper(".swiper", {
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
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
});

// document.addEventListener("DOMContentLoaded", function () {
//   const swiper = new Swiper(".swiper", {
//     slidesPerView: 3, // Кількість видимих елементів
//     spaceBetween: 20, // Відстань між слайдами
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     loop: true, // Зациклення слайдера
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const prevButton = document.querySelector(".brand-btn-prev");
//   const nextButton = document.querySelector(".brand-btn-next");
//   const list = document.querySelector(".brands-list");
//   const items = document.querySelectorAll(".brands-item");

//   const itemsCount = items.length;
//   const itemMargin = 20;
//   const itemWidth = items[0].offsetWidth + itemMargin;

//   for (let i = 0; i < itemsCount; i++) {
//     const cloneStart = items[i].cloneNode(true);
//     const cloneEnd = items[itemsCount - 1 - i].cloneNode(true);
//     list.insertBefore(cloneEnd, list.firstChild);
//     list.appendChild(cloneStart);
//   }

//   let currentIndex = itemsCount;
//   const totalItems = itemsCount * 3;

//   list.style.transform = `translateX(${-currentIndex * itemWidth}px)`;

//   function updateSlidePosition() {
//     list.style.transition = "transform 0.5s ease-in-out";
//     list.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
//   }

//   function handleTransitionEnd() {
//     if (currentIndex === 0) {
//       list.style.transition = "none";
//       currentIndex = itemsCount;
//       list.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
//     } else if (currentIndex === totalItems - 1) {
//       list.style.transition = "none";
//       currentIndex = itemsCount - 1;
//       list.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
//     }
//     setTimeout(() => {
//       list.style.transition = "transform 0.5s ease-in-out";
//     }, 20);
//   }

//   nextButton.addEventListener("click", () => {
//     currentIndex++;
//     updateSlidePosition();
//   });

//   prevButton.addEventListener("click", () => {
//     currentIndex--;
//     updateSlidePosition();
//   });

//   list.addEventListener("transitionend", handleTransitionEnd);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const prevButton = document.querySelector(".brand-btn-prev");
//   const nextButton = document.querySelector(".brand-btn-next");
//   const list = document.querySelector(".brands-list");
//   const items = document.querySelectorAll(".brands-item");

//   let visibleItemsCount = window.innerWidth >= 1180 ? 4 : 2; // Кількість видимих елементів
//   const itemMargin = 20; // Відступ між елементами
//   let itemWidth = items[0].offsetWidth + itemMargin; // Ширина елемента з відступом

//   const updateDimensions = () => {
//     visibleItemsCount = window.innerWidth >= 1180 ? 4 : 2;
//     itemWidth = items[0].offsetWidth + itemMargin;
//     updateSlidePosition();
//   };

//   window.addEventListener("resize", updateDimensions);
//   updateDimensions();

//   let currentIndex = 0;

//   function updateSlidePosition() {
//     const totalWidth = itemWidth * items.length;
//     const maxIndex = items.length - visibleItemsCount;
//     currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);
//     list.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
//   }

//   nextButton.addEventListener("click", () => {
//     currentIndex += visibleItemsCount;
//     if (currentIndex > items.length - visibleItemsCount) {
//       currentIndex = 0; // Циклічне прокручування
//     }
//     updateSlidePosition();
//   });

//   prevButton.addEventListener("click", () => {
//     currentIndex -= visibleItemsCount;
//     if (currentIndex < 0) {
//       currentIndex = items.length - visibleItemsCount; // Циклічне прокручування
//     }
//     updateSlidePosition();
//   });
// });
