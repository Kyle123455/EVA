document.addEventListener('DOMContentLoaded', function () {
    const changeColorButton = document.createElement('button');
    changeColorButton.textContent = 'Change Background Color';
    changeColorButton.style.margin = '10px';
    changeColorButton.style.padding = '10px';
    changeColorButton.style.cursor = 'pointer';

    document.body.insertBefore(changeColorButton, document.querySelector('main'));

    changeColorButton.addEventListener('click', function () {
        const colors = ['#f4f4f4', '#e0e0e0', '#d1e8ff', '#ffd1d1'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});
