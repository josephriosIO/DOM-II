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

//Event Listener : 2
const intro = document.querySelector(".intro");

intro.addEventListener("dblclick", function() {
  TweenLite.to(intro, 2.5, { ease: Bounce.easeOut, y: -500 });
});

// Event Listener : 3
const imgContent = document.querySelectorAll("img");

for (let i = 0; i < imgContent.length; i++) {
  let img = imgContent[i];
  img.addEventListener("dblclick", function(event) {
    img.style.border = "5px solid #89cff0";
    event.stopPropagation();
  });
}

// Event Listener : 4
const pTags = document.querySelectorAll("p");

for (let i = 0; i < pTags.length; i++) {
  let p = pTags[i];
  console.log(p);
  p.addEventListener("mouseover", function(e) {
    p.style.color = "#89cff0";
  });
}
