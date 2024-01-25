const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");
const mobileModalBtnOpen = document.querySelector('.mobile-modal-btn-open');
const toggleModal = () => modal.classList.toggle("is-hidden");


modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
mobileModalBtnOpen.addEventListener('click', toggleModal);