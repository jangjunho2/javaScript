const quotes = [
  {
    quote: "Seeing is believing.",
    author: "me",
  },
  {
    quote: "Whatever you do, make it pay..",
    author: "me",
  },
  {
    quote: "You will never know until you try.",
    author: "me",
  },
  {
    quote: "No sweat, no sweet.",
    author: "me",
  },
  {
    quote: "Let bygones be bygones.",
    author: "me",
  },
  {
    quote: "Do not count the eggs before they hatch.",
    author: "me",
  },
  {
    quote: "No pain no gain.",
    author: "me",
  },
  {
    quote: "Life is venture or nothing.",
    author: "me",
  },
  {
    quote: "She can do, he can do, why not me?",
    author: "me",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysquote.quote;
author.innerText = todaysquote.author;
