for (let i=1; i<9441; i++){
    var pixel = document.createElement('div');
    pixel.className = 'pixel';
    container.appendChild(pixel);
}

container.addEventListener('click', function (event){
  event.target.className = 'pixelRed';
});
