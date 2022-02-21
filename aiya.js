run();

function run() {
  let windowWidth = window.innerWidth;
  setInterval(() => {
    let currText = document.getElementById("text").innerHTML;

    window.addEventListener("keydown", (e) => {
      e.preventDefault();

      if (e.key === "Enter") {
        currText += "_";
      } else if (e.key === "Space") {
        currText += " _";
      } else if (e.key === "Backspace") {
        currText = currText.slice(0, -2);
        currText += "_";
      }

      document.getElementById("text").innerHTML = currText;
    });
    window.addEventListener("resize", () => {
      windowWidth = window.innerWidth;
      currText =
        currText.slice(0, -1) + String.fromCharCode((windowWidth % 27) + 97);
      document.getElementById("text").innerHTML = currText;
    });
  }, 1000);
}
