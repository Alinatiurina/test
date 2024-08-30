const btn = document.querySelector(".solid-menu-btn");
const closeBtn = document.querySelector(".mobile-close-btn");
const mob = document.querySelector(".mobile-menu");
const mobLi = document.querySelector('.mobile-menu-item');
const mainDoc = document.querySelector('main');

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

mainDoc.addEventListener('click', (e) => {

    if (e.target !== mob) {
        mob.classList.remove("is-open")
        return;
    }
})

mobLi.addEventListener('click', (e) => {
        mob.classList.remove("is-open")
        return;
})
