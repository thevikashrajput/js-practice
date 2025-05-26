const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYogelVa1DQosv-9hCPk0-HiaYVs4TnTF_lg&s",
  "https://www.computerhope.com/jargon/j/javascript.png",
];

let currentIndex = 0

const sliderImage = document.getElementById('sliderImage')

function updateImage() {
    sliderImage.src = images[currentIndex]
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    updateImage()
}

function nextImage() {
    currentIndex = (currentIndex + 1 + images.length) % images.length
    updateImage()
}

updateImage()