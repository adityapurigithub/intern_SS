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
var span = document.querySelector("#closeSubscribe");

console.log(span);

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
    toggleElm.style.display = "none";
  }
};

//  Pop up--MODAL -contact popup
var contactModal = document.getElementById("contactModal");

var btn = document.querySelector("#contactUsBtn");
console.log(btn);

var close = document.querySelector("#closeContact");
if (btn) {
  btn.onclick = function () {
    contactModal.style.display = "block";
  };
}

if (close) {
  close.onclick = function () {
    contactModal.style.display = "none";
  };
}

window.onclick = function (event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
};

//count down timer...........................................

// Set the date we're counting down to
var countDownDate = new Date("Jul 5, 2023 13:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementsByClassName("timer")[0].innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// ......................

// gallery slider.........................................................

let slideIndex = 0;

let imgs = document.getElementsByClassName("slideImg");

if (imgs.length !== 0) {
  show_img();
}
function show_img() {
  let len = imgs.length;
  console.log(imgs);

  for (let i = 0; i < len; i++) {
    //none display to all images...
    imgs[i].style.display = "none";
  }

  imgs[slideIndex].style.display = "flex"; //after loop ....showing the image at that index
  slideIndex++; //inc index...

  // conditions....
  if (slideIndex >= len) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = len - 1;
  }
  setTimeout(show_img, 3500);
}
// .........................................................
