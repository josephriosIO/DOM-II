// Your code goes here

// Event Listener : 1
const navContainer = document.querySelector(".nav-container");
const links = document.querySelectorAll("a");

navContainer.addEventListener("mouseover", function() {
  navContainer.style.backgroundColor = "#89cff0";
  navContainer.style.color = "white";
  for (let i = 0; i < links.length; i++) {
    let link = links[i];

    link.style.color = "white";
  }
});

// Event Listener : 2
const imgContent = document.querySelectorAll("img");

for (let i = 0; i < imgContent.length; i++) {
  let img = imgContent[i];
  console.log(img);
  img.addEventListener("click", function() {
    img.style.border = "5px solid #89cff0";
  });
}

//Event Listener : 3
