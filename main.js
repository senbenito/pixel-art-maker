const palette = document.getElementById('palette');
const container = document.getElementById('container');
const current = document.getElementsByClassName('current')[0];

//canvas maker expression
for (let i=1; i<9441; i++){
    var pixel = document.createElement('div');
    pixel.className = 'pixel';
    container.appendChild(pixel);
}

//paint selector functionality
var pickedPaint = null;
palette.addEventListener('click', function(event){
  pickedPaint = event.target.className.slice(12);
  console.log(pickedPaint);
  current.className += ` ${pickedPaint}`;
});

//click to paint event & function
// container.addEventListener('click', paintPixels);
// container.addEventListener('mousedown', paintPixels);
// container.addEventListener('mouseenter', paintPixels);
// container.addEventListener('mouseup', paintPixels);
//
//
function paintPixels() {
  event.target.className += ` ${pickedPaint}`;
}
// container.addEventListener('mousedown', function(){
  container.addEventListener('mousedown', paintStuff);
  // container.addEventListener('mouseup', paintStuff);

// });

var shiftedTF = false;
function paintStuff(event){
  var shiftPress = event.shiftKey;
  if (shiftPress && shiftedTF === false){
    shiftedTF = true;
  } else if (shiftPress && shiftedTF === true){
    shiftedTF = false;
  }

  if (shiftedTF){
    container.addEventListener('mouseover', paintPixels);
    container.removeEventListener('click', paintPixels);
    window.alert('Brush-Mode is ON (Shift + Click to toggle off)');
  } else {
    container.addEventListener('click', paintPixels);
    container.removeEventListener('mouseover', paintPixels);
    // window.alert('Brush-Mode is OFF (Shift + Click to toggle on)')

  }
}

// function paintStuff(event){
//   var shiftPress = event.shiftKey;
//   var altPress = event.altKey;
//
//   if (shiftPress){
//     container.addEventListener('mouseover', paintPixels);
//     container.removeEventListener('click', paintPixels);
//     console.log('shift pressed');
//   } else if (altKey) {
//     container.addEventListener('click', paintPixels);
//     container.removeEventListener('mouseover', paintPixels);
//     console.log('alt pressed');
//   }
// }


// if mousedown, paint on mouseover.
// else mouseup, no paint

// function paintStuff(event){
//   if (event.mousedown){
//     container.addEventListener('mouseover', paintPixels);
//   }
// }

//drag to paint event & function
// container.addEventListener('mousedown', function (event) {
//   event.target.className += ` ${pickedPaint}`;
// });

// var red = document.getElementById('red');
// red.addEventListener('click', function(event){
//   pickedPaint = event.target.style.backgroundColor;
//   console.log(pickedPaint);
// });

// orange.addEventListener('click', function(event){
//   pickedPaint = event.target.style.backgroundColor;
//   console.log(pickedPaint);
// });
