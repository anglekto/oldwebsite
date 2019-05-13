function myFunction() {
  var x = document.getElementById("mobile");
  if (x.className === "mobile-nav") {
    x.className += " responsive";
  } else {
    x.className = "mobile-nav";
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

function show() {
  const z = document.querySelector(".port-drop");
  z.classList.toggle("show");
  if (z.style.display === "none" || z.style.display === "") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}

function myFunction3() {
  var y = document.getElementById("port");
  if (y.className === "port") {
    y.className += " responsive";
  } else {
    y.className = "port";
  }
}

// window.onscroll = function() {
//   const y = document.getElementById("nav-bar");
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     y.style.backgroundColor = "hsla(0,0%,100%,.9)";
//   } else {
//     y.style.backgroundColor = "transparent";
//   }
// }
