// Your code goes here

//1. mousedown
let button = document.querySelectorAll('.btn');
button.forEach( element => {
    element.addEventListener('mousedown', () => {
        element.style.backgroundColor = 'slateblue'; 
    })
})

//2. mouseup
document.querySelectorAll('.btn');
button.forEach( element => {
    element.addEventListener('mouseup', () => {
        element.style.backgroundColor = ''; 
    })
})

//3. Keydown
window.addEventListener("keydown", event => {
    if (event.key == "y") {
      document.body.style.background = "yellow";
    }
  });

  //4. Keyup

  window.addEventListener("keyup", event => {
    if (event.key == "y") {
      document.body.style.background = "";
    }
  });

//5. mouseover
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.style.color = 'slateblue'; 
})
})

//6. mouseout
document.querySelectorAll('.nav-link');
navLink.forEach(element => {
  element.addEventListener('mouseout', () => {
    element.style.color = ''; 
})
})

//7. mousemove
let rotate = document.querySelector('.logo-heading');
rotate.addEventListener('mousemove', () => {
rotate.style.transform = 'rotate(180deg)';
})


//8. dblclick
const welcome = document.querySelector('.intro h2');
welcome.addEventListener('dblclick', () => {
  welcome.style.textAlign = "center";
    welcome.style.transform = 'scale(2)';
    welcome.style.color = 'red';
})

//9. mouseenter

const textContent = document.querySelectorAll('.text-content h2');
textContent.forEach( element => {
  element.addEventListener('mouseenter', () => {
    element.style.color = 'slateblue'; 
  })
})



//10. mousewheel
const destination = document.querySelectorAll('.destination');
destination.forEach( element => {
  element.addEventListener('mousewheel', () => {
    element.style.color = 'slateblue'; 
  })
})


//nested prevent default
navLink.forEach(element => {
  element.addEventListener('click', () => {
    element.preventDefault();
  })
})


