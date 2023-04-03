const h1 = document.querySelector(".hello h1");
h1.innerText = "hello world";

function handleMouseCick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleMouseCick);
