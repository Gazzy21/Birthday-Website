// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// MODAL 2

// Get the modal
var modalTwo = document.getElementById("myModalTwo");

// Get the button that opens the modal
var btn = document.getElementById("myBtnTwo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeTwo")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalTwo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalTwo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }
}

// MODAL 2

// Get the modal
var modalThree = document.getElementById("myModalThree");

// Get the button that opens the modal
var btn = document.getElementById("myBtnThree");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeThree")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalThree.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalThree.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalThree) {
    modalThree.style.display = "none";
  }
}