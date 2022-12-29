var x = document.getElementById("myList");
var bIcon = document.querySelector(".icon");
x.style.maxHeight = "0px";
function burgerMenu() {
  if (x.style.maxHeight == "0px") {
    x.style.maxHeight = "250px";
  } else {
    x.style.maxHeight = "0px";
  }
}
