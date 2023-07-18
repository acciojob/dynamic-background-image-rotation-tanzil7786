//your JS code here. If required.
// Function to set the background image based on screen orientation
function setBackgroundImage() {
  const portraitImageURL = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg";
  const landscapeImageURL = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg";
  const body = document.querySelector('body');

  if (window.matchMedia("(orientation: portrait)").matches) {
    body.style.backgroundImage = `url(${portraitImageURL})`;
  } else {
    body.style.backgroundImage = `url(${landscapeImageURL})`;
  }
}

// Call the function on initial page load
setBackgroundImage();

// Listen for orientation change and update the background image accordingly
window.addEventListener("orientationchange", setBackgroundImage);
