//////**************이미지*****/

const images = [
  "img-01.png",
  "img-02.png",
  "img-03.png",
  "img-04.png",
  "img-05.png",
  "img-06.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImgae = document.createElement("img");
const IMGBOX = document.querySelector(".IMG");
bgImgae.src = `src/${chosenImage}`;
IMGBOX.appendChild(bgImgae);
