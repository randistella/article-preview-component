const shareBtn = document.querySelector('.share');
const socBox = document.querySelector('.socialBox');


shareBtn.addEventListener('click', () => {
    socBox.classList.remove('hide')
});

shareBtn.addEventListener('dblclick', () => {
    socBox.classList.add('hide');
} )