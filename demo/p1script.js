var isOn = false;

function changeImage() {
  var image = document.getElementById("img");

  if (isOn == false) {
    image.src = "on.png";
    isOn = true;
  } else {
    image.src = "off.png";
    isOn = false;
  }
}
