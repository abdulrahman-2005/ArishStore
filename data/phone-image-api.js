async function getPhoneImage(phoneName) {
    try {

        const imageSearchResponse = await fetch(`https://api.google.com/search?q=${phoneName}`);
        const imageData = await imageSearchResponse.json();
        const imageUrls = imageData.results.map(result => result.url);

        // Return the first image URL
        return imageUrls[0];
    } catch (error) {
        console.error("Error fetching phone image:", error);
        throw error;
    }
}

// Example usage:
getPhoneImage("iPhone 14 Pro Max")
    .then(imageUrl => {
        // Display or use the image URL
        console.log(imageUrl)
    })
    .catch(error => {
        console.error("Error fetching phone image:", error);
    });