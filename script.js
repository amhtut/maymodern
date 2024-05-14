// Get all the service image links
const serviceImgLinks = document.querySelectorAll('.service-img-link');
// Loop through each service image link
serviceImgLinks.forEach(link => {
    // Add a click event listener to each link
    link.addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Get the parent service column of the clicked link
        const serviceCol = this.closest('.service-col');
        // Get the title of the service section
        const serviceTitle = serviceCol.querySelector('h3').textContent.trim();
        // Create an array of image URLs for the slideshow based on the service title
        let slideshowImages = [];
        switch (serviceTitle) {
            case 'Bridge Construction':
                slideshowImages = ['/Service-pic/bc/bc1.jpeg', '/Service-pic/bc/bc2.jpeg', '/Service-pic/bc/bc3.jpeg', '/Service-pic/bc/bc4.jpeg'];
                break;
            case 'Form Work System':
                slideshowImages = ['/Service-pic/fms/fms1.jpeg', '/Service-pic/fms/fms2.jpeg', '/Service-pic/fms/fmd3.jpeg', '/Service-pic/fms/fmd4.jpeg'];
                break;
            // Add cases for other service sections
        }
        // Open a slideshow modal with the images
        openSlideshowModal(slideshowImages);
    });
});
// Function to open the slideshow modal
function openSlideshowModal(images) {
    // Create a modal container element
    const modalContainer = document.querySelector('.modal-container');
    // Set display to flex to show the modal
    modalContainer.style.display = 'flex';
    // Create a modal content element
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    // Create a close button element
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;'; // Add close icon (×) to the button
    // Add event listener to close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        closeModal();
    });
    // Append close button to modal content
    modalContent.appendChild(closeButton);
    // Loop through the images and create image elements
    images.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.classList.add('modal-image');
        // Append each image to the modal content
        modalContent.appendChild(imgElement);
    });
    // Append modal content to modal container
    modalContainer.appendChild(modalContent);
    // Add class to body to prevent scrolling when modal is open
    document.body.classList.add('modal-open');
}