import React, { useState } from "react";
import Style from "./discoverPage.module.css";

const FetchImages: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Specify the term to search for
  const imageToBeFetched = "Mt. Fuji";

  // Function to fetch the image
  const fetchImage = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect, // Specify the type for TypeScript
    };

    try {
      const response = await fetch(
        `https://google.serper.dev/search?q=${encodeURIComponent(imageToBeFetched)}&apiKey=a0d7e8830f060ac862c5bd538dc0da8be5a205ac`,
        requestOptions
      );
      const data = await response.json(); // Parse the response as JSON

      // Check if the response contains the image in the knowledgeGraph object
      const image = data.knowledgeGraph?.imageUrl;

      if (image) {
        setImageUrl(image); // Set the image URL if available
      } else {
        console.log("No image found.");
        setImageUrl(null); // Reset image if not found
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div>
      <button className={Style.fectchImageButton} onClick={fetchImage}>Fetch Image</button>
      {imageUrl && <img src={imageUrl} alt="Fetched" />}
    </div>
  );
};

export default FetchImages;
