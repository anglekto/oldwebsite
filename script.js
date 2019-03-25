var accordion = document.getElementsByClassName("accordion");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function () {
    this.classList.toggle('open');
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      // accordion is open, we need to close it
      content.style.maxHeight = null;
    } else {
      // accordion is closed
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
