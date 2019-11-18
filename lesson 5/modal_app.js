const modal = document.querySelector('.wrap');
const closeBtn = document.querySelector('span');
const openBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden')
});
openBtn.addEventListener('click', function () {
    modal.classList.remove('hidden')
});