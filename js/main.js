const openModal = document.querySelector('.modal__open');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');
const closes = document.querySelector('.close');
const modalWindow = document.querySelector('.modal-window');

openModal.addEventListener('click', () => {
    modal.classList.add('active');
})

const closeModal = () => {
    modal.classList.remove('active');
}
overlay.addEventListener('click', closeModal);
closes.addEventListener('click', closeModal);

