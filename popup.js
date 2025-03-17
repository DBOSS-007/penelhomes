const button = document.getElementById("myButton");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");

button.addEventListener("hover", function() {
  popup.classList.remove("hidden"); // Make the pop-up visible
});

closeButton.addEventListener("hover", function() {
  popup.classList.add("hidden"); // Hide the pop-up
});