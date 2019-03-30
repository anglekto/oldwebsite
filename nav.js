function myFunction() {
  var x = document.getElementById("mobile");
  if (x.innerHTML === "X") {
    x.innerHTML = "MENU";
  } else {
    x.innerHTML = "X";
  }
}

function myFunction2() {
  var x = document.getElementById("navi");
  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
}
