  import React, { useState, useEffect } from "react";
  import Style from "./discoverPage.module.css";
  import Style2 from "./fetchImagesStyle.module.css";

  interface FetchImagesProps {
    placeName: string; // Accept placeName as a prop
  }
  const FetchImages: React.FC<FetchImagesProps> = ({placeName}) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    // Specify the term to search for
    // const imageToBeFetched 
    var imageToBeFetched = placeName;
    // Function to fetch images
    const fetchImage = async () => {
      const requestOptions = {
        method: "GET",  
        redirect: "follow" as RequestRedirect, // Specify the type for TypeScript
      };

      try {
        const response = await fetch(
          `https://google.serper.dev/images?q=${encodeURIComponent(imageToBeFetched)}&apiKey=a0d7e8830f060ac862c5bd538dc0da8be5a205ac`,
          requestOptions
        );
        const data = await response.json(); // Parse the response as JSON

        // Extract the images from the response
        const images = data.images || [];      

        if (images.length > 0) {
          // Limit to a maximum of 5 images
          setImageUrls(images.slice(0, 5).map((img: any) => img.imageUrl));
        } else {
          console.log("No images found.");
          setImageUrls([]); // Reset image array if none found
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to navigate to the next image
    const nextImage = () => {
      if (currentIndex < imageUrls.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    // Function to navigate to the previous image
    const prevImage = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    return (
      <div className={Style2.resultsContainer}>
        {imageUrls.length > 0 ? (
          <div className={Style.carouselContainer}>
            <button className={Style.prevButton} onClick={prevImage}>
              &#10094;
            </button>
            <div className={Style.imageContainer}>
              <img
                src={imageUrls[currentIndex]}
                alt={`Fetched ${currentIndex + 1}`}
                className={Style.carouselImage}
              />
            </div>
            <button className={Style.nextButton} onClick={nextImage}>
              &#10095;
            </button>
          </div>
        ) : (
            <p>no image found for {placeName}</p>
        )}
        <div className={Style2.seeMoreContainer}>
          <button className={Style.fetchImageButton2} onClick={fetchImage}>
            See Images
          </button>
        </div>
      </div>
    );
  };

  export default FetchImages;
