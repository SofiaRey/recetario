const popUp = document.querySelector(".popUp");

// Open pop up on click of info icon
document.querySelector(".nueva-receta").addEventListener("click", function () {
  popUp.style.display = "flex";
});

// Close pop up on click of info icon
document.querySelector(".cancelar-nueva").addEventListener("click", function () {
  popUp.style.display = "none";
});

// Close pop up on click of background
document
  .querySelector(".black-background")
  .addEventListener("click", function () {
    popUp.style.display = "none";
  });