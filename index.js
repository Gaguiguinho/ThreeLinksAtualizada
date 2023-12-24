const darkModeButton = document.getElementById('dark-mode-button');

darkModeButton.addEventListener('click', function() {
    const moonIcon = document.querySelector('.moon');

    if (moonIcon.classList.contains('bx-sun')) {
        moonIcon.classList.remove('bx-sun', 'gold-color');
        moonIcon.classList.add('bx-moon');
    } else {
        moonIcon.classList.remove('bx-moon');
        moonIcon.classList.add('bx-sun', 'gold-color');
    }

    document.body.classList.toggle('dark-mode');
    const headerImg = document.querySelector('header img');
    if (headerImg.getAttribute('src') === 'assets/igao-circle.jpg') {
        headerImg.setAttribute('src', 'assets/igao-dark-mode.jpg');
    } else {
        headerImg.setAttribute('src', 'assets/igao-circle.jpg');
    }
});

