
function changeFontSize(delta) {
    const elements = document.querySelectorAll('body, section, p, h1, h2, h3, h4, h5, h6, span, a');
    elements.forEach(element => {
        const currentSize = window.getComputedStyle(element).fontSize;
        const newSize = (parseFloat(currentSize) + delta) + 'px';
        element.style.fontSize = newSize;
    });
}


document.getElementById('increase-font').addEventListener('click', function() {
    changeFontSize(2);
});


document.getElementById('decrease-font').addEventListener('click', function() {
    changeFontSize(-2);
});


document.getElementById('toggle-contrast').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});
