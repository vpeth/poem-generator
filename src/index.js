function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "To whom I owe the leaping delight...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
