const palette = document.getElementById('palette');
const container = document.getElementById('container');
const current = document.getElementsByClassName('current')[0];


for (let i=1; i<9441; i++){
    var pixel = document.createElement('div');
    pixel.className = 'pixel';
    container.appendChild(pixel);
}

var pickedPaint = null;
palette.addEventListener('click', function(event){
  pickedPaint = event.target.className.slice(12);
  console.log(pickedPaint);
  current.className += ` ${pickedPaint}`;
});

container.addEventListener('click', function (event) {
  event.target.className += ` ${pickedPaint}`;
});


// var red = document.getElementById('red');
// red.addEventListener('click', function(event){
//   pickedPaint = event.target.style.backgroundColor;
//   console.log(pickedPaint);
// });

// orange.addEventListener('click', function(event){
//   pickedPaint = event.target.style.backgroundColor;
//   console.log(pickedPaint);
// });
