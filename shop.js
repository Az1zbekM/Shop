  // Function to fetch images from Unsplash API
  async function fetchImages() {
    try {
        const response = await fetch('https://api.unsplash.com/photos/random?count=12&client_id=MgTeQACD5mesciqsvNOSVE-GLLbGM5xTU7TV5wQ4Iyk');
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const data = await response.json();
      const images = data.map(photo => photo.urls.regular);
      return images;
    } catch (error) {
      console.error('Error fetching images:', error);
      return [];
    }
  }

  // Function to update card images with fetched images
  async function updateCardImages() {
    const images = await fetchImages();
    const cardImages = document.querySelectorAll('.card .zoom');

    cardImages.forEach((image, index) => {
      if (index < images.length) {
        image.src = images[index];
        image.onload = () => console.log(`Image ${index + 1} loaded successfully`);
        image.onerror = () => console.error(`Error loading image ${index + 1}`);
      }
    });
  }

  // Call the function to update card images on page load
  window.onload = updateCardImages;