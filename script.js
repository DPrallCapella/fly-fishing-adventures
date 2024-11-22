// Function to open the lightbox with the clicked image
function openLightbox(imageSrc) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';  // Show the lightbox
    lightboxImage.src = imageSrc;    // Set the image source to the clicked image
  }
  
  // Function to close the lightbox
  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';  // Hide the lightbox
  }
  
  // Get all the radio buttons and input sections
const shareRadio = document.getElementById('share');
const requestRadio = document.getElementById('request');
const shareFields = document.getElementById('share-fields');
const requestFields = document.getElementById('request-fields');

// Event listeners for the radio buttons to show/hide fields
shareRadio.addEventListener('change', function() {
  if (shareRadio.checked) {
    shareFields.style.display = 'block';  // Show share fields
    requestFields.style.display = 'none'; // Hide request fields
  }
});

requestRadio.addEventListener('change', function() {
  if (requestRadio.checked) {
    requestFields.style.display = 'block'; // Show request fields
    shareFields.style.display = 'none';    // Hide share fields
  }
});

// Initialize with "Share Information" by default
if (shareRadio.checked) {
  shareFields.style.display = 'block';
  requestFields.style.display = 'none';
}
