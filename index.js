let wheel1 = document.getElementById('wheel1');
let wheel2 = document.getElementById('wheel2');
let car = document.getElementById('car');
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    wheel1.style.marginLeft = value * -2.5 + 'px';
    wheel2.style.marginLeft = value * -2.5 + 'px';
    car.style.marginLeft = value * -2.5 + 'px';
});