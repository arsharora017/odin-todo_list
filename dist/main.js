(() => {
  console.log("testing index.js webpack");
  const e = document.querySelector(".content"),
    t = document.createElement("h1");
  (t.textContent = "HELLO WORLD. ..TEST FROM WEBPACK INDEX. JS DOM MANIP"),
    e.appendChild(t);
})();
