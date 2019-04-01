function myFunction() {
  var x = document.getElementById("mobile");
  if (x.className === "fas fa-times") {
    x.className = "mobile-nav";
  } else {
    x.className = "fas fa-times";
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
