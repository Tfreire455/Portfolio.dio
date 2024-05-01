const carousel_item = document.querySelector(".carousel-inner");

for (let i = 2; i < 12; i++) {
carousel_item.innerHTML += `<div class="carousel-item">
                                <title>Placeholder</title>
                                <img class="img-carousel" src="./assets/Foto certificado/${i}.png"/>
                                </div>`;
}

