const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);

// document.body.appendChild(bgImage);
document.body.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100% 100%";
document.body.style.backgroundPosition = "center";
