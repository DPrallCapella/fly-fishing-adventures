document.querySelector('.hamburger-menu-button').addEventListener('click', () => {
    const menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('expanded');
})

function openModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    caption.innerHTML = imgElement.alt;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

