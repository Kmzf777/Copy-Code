let wheel1 = document.getElementById('wheel1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    wheel1.style.marginLeft = value * -2.5 + 'px';
    wheel1.style.transformRotate = value * -2.5 + 'deg';

});