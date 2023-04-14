console.log("hi");

// toggling of nav
var bars = document.getElementsByClassName("bars")[0];
var toggleElm = document.getElementsByClassName("toggle")[0];

bars.onclick = () => {
  console.log(bars);
  console.log(toggleElm);

  toggleElm.classList.toggle("toggle-on");
};

// ......................................................

// Pop up--MODAL -subscribe
/// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelectorAll("#myBtn");
// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close");

console.log(span);

// When the user clicks the button, open the modal
btn.forEach((btn) => {
  btn.onclick = function () {
    modal.style.display = "block";
  };
});
// When the user clicks on <span> (x), close the modal
span.forEach((span) => {
  span.onclick = function () {
    modal.style.display = "none";
  };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//  Pop up--MODAL -contact popup
var contactModal = document.getElementById("contactModal");

var btn = document.querySelector("#contactUsBtn");
console.log(btn);

btn.onclick = function () {
  contactModal.style.display = "block";
};

span.forEach((span) => {
  span.onclick = function () {
    contactModal.style.display = "none";
  };
});

window.onclick = function (event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
};
