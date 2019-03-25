var nav = document.getElementsByClassName("mobile-nav");

for (var i = 0; i < nav.length; i++) {
  nav[i].onclick = function () {
    this.classList.toggle('nav-open');
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }
}
