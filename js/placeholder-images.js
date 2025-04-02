// Generate placeholder images for the website
const placeholderImageUrls = {
  hero: "https://source.unsplash.com/1600x900/?fitness,woman,coach",
  about: "https://source.unsplash.com/800x600/?fitness,trainer,female",
  programs: [
    "https://source.unsplash.com/600x400/?personal,training",
    "https://source.unsplash.com/600x400/?online,coaching",
    "https://source.unsplash.com/600x400/?fitness,transformation"
  ],
  testimonials: [
    "https://source.unsplash.com/150x150/?woman,portrait",
    "https://source.unsplash.com/150x150/?man,portrait",
    "https://source.unsplash.com/150x150/?person,fitness"
  ],
  transformations: [
    {
      before: "https://source.unsplash.com/600x800/?before,fitness",
      after: "https://source.unsplash.com/600x800/?after,fitness"
    }
  ],
  blog: [
    "https://source.unsplash.com/600x400/?healthy,food",
    "https://source.unsplash.com/600x400/?workout,routine",
    "https://source.unsplash.com/600x400/?mindfulness,wellness"
  ]
};

// Function to download images (to be implemented in production)
function downloadPlaceholderImages() {
  console.log("In a production environment, this would download the placeholder images");
  // Implementation would use fetch API to download images and save them locally
}

// Export the image URLs for use in the website
export { placeholderImageUrls, downloadPlaceholderImages };
