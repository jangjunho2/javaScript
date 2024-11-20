const ulEl = document.querySelector("ul");
console.log(ulEl);

for (let i = 0; i < 3; i += 1) {
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;

  li.addEventListener("click", function () {
    console.log(li.textContent);
  });
  ulEl.appendChild(li);
}

const timer = setTimeout(() => console.log("hello"), 3000);

const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => clearTimeout(timer));

// const timer = setInterval(() => console.log("hello"), 3000);

// const h1El = document.querySelector("h1");
// h1El.addEventListener("click", () => clearInterval(timer));

setTimeout(() => {
  console.log("hello");
  callb1();
}, timeout);
