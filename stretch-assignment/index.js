const blocks = document.querySelectorAll(".block");
const parent = document.querySelector(".blocks");
let counter = 0;
let stop;

for (let i = 0; i < blocks.length; i++) {
  let block = blocks[i];
  console.log(block);

  block.addEventListener("click", function() {
    parent.prepend(block);
  });

  block.addEventListener("mousedown", function(event) {
    console.log("inside mouse down");
    stop = setInterval(function() {
      block.style.transform = `translate(${counter}px,0)`;
      counter++;
    }, 0);
  });
  window.addEventListener("mouseup", function() {
    counter = 0;
    clearInterval(stop);
  });

  block.addEventListener("touchstart", function(event) {
    console.log("inside mouse down");
    stop = setInterval(function() {
      block.style.transform = `translate(${counter}px,0)`;
      counter++;
    }, 0);
  });
  window.addEventListener("touchend", function() {
    counter = 0;
    clearInterval(stop);
  });
}
