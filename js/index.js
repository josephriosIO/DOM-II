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
  p.addEventListener("mouseover", function(e) {
    p.style.color = "#89cff0";
  });
}

// Event Listener : 5

const textContent = document.querySelector(".text-content");
const textContentH2 = textContent.querySelector("h2");

textContentH2.addEventListener("wheel", function() {
  TweenMax.from(textContentH2, 3, { x: 450, opacity: 0, scale: 0.5 });
});

// Event Listener : 6
const btns = document.querySelectorAll(".btn");

for (let i = 0; i < btns.length; i++) {
  let btn = btns[i];

  btn.addEventListener("click", function() {
    if (btn !== "clicked") {
      btn.classList.toggle("clicked");
      btn.textContent = "Thanks for Signing Up!";
    } else {
      btn.classList.remove("clicked");
    }
  });
}

// Event Listener : 7
const destination = document.querySelector(".destination");
const destinationH4 = destination.querySelector("h4");

destinationH4.addEventListener("click", function() {
  destinationH4.textContent = "HELLO";
});

// Event Listener : 8
const leavingPage = document.querySelector(".log");

function pause() {
  document.body.classList.add("paused");
}

function play() {
  document.body.classList.remove("paused");
  log.textContent = "This document has focus.";
}

window.addEventListener("blur", pause);
window.addEventListener("focus", play);

// Event Listener : 9
const contentDestination = document.querySelector(".content-destination");

contentDestination.addEventListener("keydown", function() {
  contentDestination.style.backgroundColor = "green";
});

// Event Listener : 10
const wholePage = document.querySelector("html");

console.log(wholePage);

wholePage.addEventListener("dblclick", function(event) {
  wholePage.style.color = "yellow";
  event.stopPropagation();
});
