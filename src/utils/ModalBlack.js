document.addEventListener('DOMContentLoaded', function () {
  // Get modal and images
  const modal = document.getElementById('myModal2');
  const modalImg = document.getElementById('modalImg2');
  const images = Array.from(document.querySelectorAll('.myImg2'));

  // Add click handler to each image
  images.forEach(image => {
    image.addEventListener('click', handleImageClick);
  });

  // Image click handler  
  function handleImageClick(e) {
    // Get clicked image
    const clicked = e.target;
    // Open modal
    openModal(clicked);
  }

  // Open modal function
  function openModal(image) {
    modal.style.display = "block";
    // Set modal image src
    modalImg.src = image.src;
    // Add zoom class to clicked image
    image.classList.add('zoom');
    // Remove zoom from others
    images.forEach(img => {
      if (img !== image) img.classList.remove('zoom');
    });
  }

  // Close modal 
  modal.addEventListener('click', closeModal);
  function closeModal(e) {
    // Check if the click target is the modal or the close button
    if (e.target === modal || e.target.classList.contains('close')) {
      // Remove zoom from all images
      images.forEach(img => img.classList.remove('zoom'));
      modal.style.display = "none";
    }
  }
});