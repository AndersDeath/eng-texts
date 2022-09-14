document.addEventListener('DOMContentLoaded', () => {
    let baseSize = localStorage.getItem('fontSize') || 100;
    if(baseSize > 200) {
        baseSize = 100;
    }
    let sizeDispay = document.getElementById('size');
    sizeDispay.innerHTML = baseSize;
    const doc = document.querySelector('.doc');
    doc.style.fontSize = baseSize + '%';

    document.getElementById('increase').addEventListener('click', () => {
        baseSize = baseSize + 10;
        localStorage.setItem('fontSize', baseSize);
        sizeDispay.innerHTML = baseSize;
        doc.style.fontSize = baseSize + '%';
    });
    document.getElementById('decrease').addEventListener('click', () => {
        baseSize = baseSize - 10;
        localStorage.setItem('fontSize', baseSize);
        sizeDispay.innerHTML = baseSize;
        doc.style.fontSize = baseSize + '%';
    });
    document.getElementById('reset').addEventListener('click', () => {
        baseSize = 100;
        localStorage.setItem('fontSize', baseSize);
        sizeDispay.innerHTML = baseSize;
        doc.style.fontSize = baseSize + '%';
    });
})