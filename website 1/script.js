const carrouselImage = document.getElementById("carrouselImage");

const array = [
    "ressources/images/image-localisation-1.jpg",
    "ressources/images/image-localisation-2.jpg",
    "ressources/images/image-localisation-3.jpg",
    "ressources/images/image-localisation-4.jpg"
];

const array2 = [
    "ressources/images/image-hebergement-1.jpg",
    "ressources/images/image-hebergement-2.jpg",
    "ressources/images/image-hebergement-3.jpg",
    "ressources/images/image-hebergement-4.jpg"
];

let i = 0;

setInterval(() => {
    carrouselImage.src = array[i];
    i++;
    if (i === array.length) {
        i = 0;
    }
}, 5000);

const carrouselImage2 = document.getElementById("carrouselImage2");


let j = 0;

setInterval(() => {
    carrouselImage2.src = array2[j];
    j++;
    if (j === array.length) {
        j = 0;
    }
}, 5000);

