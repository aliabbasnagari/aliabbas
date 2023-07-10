var x = document.getElementById("myList");
x.style.maxHeight = "0px";
function burgerMenu() {
  if (x.style.maxHeight == "0px") {
    x.style.maxHeight = "270px";
  } else {
    x.style.maxHeight = "0px";
  }
}
