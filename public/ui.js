let wHeight = window.innerHeight;
let wWidth = window.innerWidth;

const player = {
  name: "",
  locX: 0,
  locY: 0,
};

const canvas = document.getElementById("the-canvas");
const ctx = canvas.getContext("2d");
canvas.width = wWidth;
canvas.height = wHeight;

const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
const spawnModal = new bootstrap.Modal(document.getElementById("spawnModal"));

window.addEventListener("load", function () {
  loginModal.show();
});

document.querySelector(".name-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name-input").value;
  player.name = name;
  document.querySelector(".player-name").textContent = player.name;

  loginModal.hide();
  spawnModal.show();
});

document.querySelector(".start-game").addEventListener("click", (e) => {
  spawnModal.hide();

  const elArray = Array.from(document.querySelectorAll(".hiddenOnStart"));
  elArray.forEach((el) => {
    el.removeAttribute("hidden");
  });

  init();
});
