let body = document.querySelector('body');
let header = document.querySelector('.header');
let menu = document.querySelector('.header__menu .menu__list');
let brg = document.querySelector('.header__brg');
let brg_links = document.querySelectorAll('.menu__link');

brg.addEventListener('click', function () {
  brg.classList.toggle('open');
  header.classList.toggle('open');
  menu.classList.toggle('open');
  body.classList.toggle('lock');
});

for (let link of brg_links) {
  link.addEventListener('click', function () {
    brg.classList.remove('open');
    header.classList.remove('open');
    menu.classList.remove('open');
    body.classList.remove('lock');
  });
}

const anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

window.addEventListener('scroll', function () {
  let window_height = document.documentElement.clientHeight;
  if (window.innerWidth > 768) {
    if (window.pageYOffset > window_height && window.pageYOffset > 320) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  }
});

function init() {
  let map = new ymaps.Map('map', {
    center: [43.61657091787194, 39.881550413953654],
    zoom: 17
  });
  let placemark = new ymaps.Placemark([43.61657091787194, 39.881550413953654], {
    balloonContent: 'Хоста чай'
  }, {
    preset: 'islands#dotIcon',
    iconColor: "#99ae85"
  });
  map.geoObjects.add(placemark);
}

ymaps.ready(init);