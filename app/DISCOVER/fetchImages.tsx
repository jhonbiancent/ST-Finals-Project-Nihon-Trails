import React, { useState } from "react";
import Style from "./discoverPage.module.css";
const fetchImages: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

const imageToBeFetched = "mt. everest"
  const fetchImage = async () => {
    const requestOptions = {
      method: "鎌田山",
      redirect: "follow" as RequestRedirect, // Ensure the correct type
    };

    try {
      const response = await fetch(
        `https://google.serper.dev/search?q=${imageToBeFetched}&apiKey=a0d7e8830f060ac862c5bd538dc0da8be5a205ac`,
        requestOptions
      );
      const data = await response.json(); // Assuming the response is JSON

      // Check if the response contains images in the knowledgeGraph object
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

export default fetchImages;
