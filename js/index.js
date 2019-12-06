// Your code goes here
let button = document.querySelectorAll('.btn');
button.forEach( element => {
    element.addEventListener('click', () => {
        element.style.backgroundColor = 'slateblue'; 
    })
})


window.addEventListener("keydown", event => {
    if (event.key == "y") {
      document.body.style.background = "yellow";
    }
  });
  window.addEventListener("keyup", event => {
    if (event.key == "y") {
      document.body.style.background = "";
    }
  });


