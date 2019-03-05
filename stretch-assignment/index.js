const blocks = document.querySelectorAll(".block");
const parent = document.querySelector(".blocks");

for (let i = 0; i < blocks.length; i++) {
  let block = blocks[i];
  console.log(block);

  block.addEventListener("click", function() {
    parent.prepend(block);
  });
}
