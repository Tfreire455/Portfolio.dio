const bgAnimation = document.getElementById('bgAnimation');

const colorBoxes = 400;


for (let i = 0; i < colorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
    
;}