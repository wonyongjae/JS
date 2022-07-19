const images = ['earth.jpg', 'eclipse.jpg', 'moon.jpg','black-hole.jpg','black-hole2.jpg',
'hd-wallpaper.jpg', 'moon2.jpg', 'moon3.jpg', 'orion-nebula.jpg', 'planet.jpg', 'science.jpg'];
const ranImage = Math.floor(Math.random() * images.length);
const backgroundImage = document.createElement('img');

backgroundImage.src = `img/${images[ranImage]}`;
document.body.appendChild(backgroundImage);