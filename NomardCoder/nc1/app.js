const h1 = document.querySelector(".hello h1");
h1.innerText = "hello !!";

function handleTitleClick() {
  //   h1.innerText = "h1 was clicked";
  console.log("h1 was clicked");
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "mouse is here";
}

function handleMouseLeave() {
  h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato"; //창크기 바꾸면 색변경경
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("no wifi SOS");
}

function handleWindowOnline() {
  alert("ALL GOOOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;
