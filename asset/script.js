console.log("hi");

// toggling of nav
var bars = document.getElementsByClassName("bars")[0];
var toggleElm = document.getElementsByClassName("toggle")[0];

console.log(bars);
// bars.map((bar) => {
bars.onclick = () => {
  console.log(bars);
  console.log(toggleElm);

  toggleElm.classList.toggle("toggle-on");
};
// });

// ......................................................

// Pop up--MODAL
/// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelectorAll("#myBtn");
console.log(btn);
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.forEach((btn) => {
  btn.onclick = function () {
    modal.style.display = "block";
  };
});
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
