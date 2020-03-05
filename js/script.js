//FIRST ATTEMPT


// const items = document.querySelectorAll('.item')
// const image = document.querySelector('img')

// items.forEach((el) => {
//   items.addEventListener('mouseover', (e) => {
//     imageData = e.target.getAttribute('data-image')
//     console.log(imageData)
//     e.target.style.zIndex = 99
//     image.setAttribute('src', imageData)
//     image.style.visibility = "visible";
//   })
//   el.addEventListener('mousemove', (e) => {
//     image.style.top = e.clientY + 'px'
//     image.style.left = e.clientX + 'px'
//   })
//   el.addEventListener('mouseleave', (e) => {
//     e.target.style.zIndex = 1
//     image.setAttribute('src', '')
//     image.style.visibility = "hidden";
//   })
// })

//SECOND ATTEMPT


// var mouse = {x:0, y:0};
// var image = document.querySelector('img');
// const link = document.getElementById("linkhover");


// function getMouse(e) {
      
// }

// link.addEventListener('mouseover', function(e){
//   console.log("POON");
// });

// function delay(e) {
//   if (true) {
//   setInterval(showImage(e),1);
//   }
// }

// function showImage(e) {
//   console.log("TRUE");
//   mouse.x = e.clientX;
// 	mouse.y = e.clientY;
//   var image = document.querySelector('img');
//   image.style.left = mouse.x + 'px'
//   image.style.top = mouse.y + 'px'
// }

//THIRD ATTEMPT

// const image = document.getElementById("hoverimage");

// link.addEventListener('mouseover', (e) => {
//       image.style.visibility = "visible";
//       console.log("TRUE");
//     })
// link.addEventListener('mousemove', (e) => {
//   image.style.top = e.clientY + 'px'
//   image.style.left = e.clientX + 'px'
//     })
// link.addEventListener('mouseleave', (e) => {
//       image.style.visibility = "hidden";
//     })