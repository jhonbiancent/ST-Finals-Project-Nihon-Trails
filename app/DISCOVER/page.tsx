"use client";
import React, { useState, useEffect } from 'react';
import NavBar from '../navbar';
import Style from "./discoverPage.module.css";
import Style2 from "./fetchImagesStyle.module.css";
import MyMap from "./geoapifyMap";
import fetchPlaces from './fetchPlaces'; // Import the fetchPlaces function
import FetchImages from './fetchImages'; // Import the fetchPlaces function
import DiscoverPageScript from './discoverPageScript'; // Import the DiscoverPageScript function


const DiscoverPage: React.FC = () => {
  const [coordinates, setCoordinates] = useState<{ lng: number; lat: number }>({ lng: 0, lat: 0 });
  const [places, setPlaces] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [placeName, setPlaceName] = useState<string | null>(null); // State to hold the selected place name


  // Default parameters for fetchPlaces
  const placeCategories = "tourism";
  const language = "en";
  const proximitySearch = 30000;  
  const limitOfRequestedPlaces = 30;
  var placeIndex = 1;
  // Function to handle center change from the map
  const handleCenterChange = (lng: number, lat: number) => {
    setCoordinates({ lng, lat });
    console.log(`Updated Coordinates - Longitude: ${lng}, Latitude: ${lat}`);
    getPlaces(lng, lat); // Fetch places with updated coordinates
  };

  // Function to fetch places and update state
  const getPlaces = async (lng: number, lat: number) => {
    setLoading(true);
    const { data, error } = await fetchPlaces(
      lng,
      lat,
      placeCategories,        // Pass placeCategories
      language,               // Pass language
      proximitySearch,        // Pass proximitySearch
      limitOfRequestedPlaces  // Pass limitOfRequestedPlaces
    );

    if (error) {
      setError(error);
    } else {
      setPlaces(data || []);
    }
    setLoading(false);
  };


  // Effect to fetch places when the component mounts
  useEffect(() => {
    getPlaces(coordinates.lng, coordinates.lat);
  }, []);

  // Render loading or error messages if applicable
  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <body>
        <DiscoverPageScript/>
      <main>
        <NavBar />
        <div className={Style.mainContainer}>
          <section className={Style.contentContainer}>
            <div className={Style.mapContainer}>
              <MyMap onCenterChange={handleCenterChange} />
              <div className={Style.detectionContainer}>
                <span className={Style.detectionCenter}></span>
                <span className={Style.detectionLines}></span>
                <span className={Style.detectionLines}></span>
              </div>
            </div>
            <div className={Style.detailsContainer}>
              <form className={Style.searchBarContainer}>
                <img src="/ICONS/ICON-SEARCH.png" className={Style.searchIconImage} />
                <input type="search" placeholder='search' className={Style.searchBar} />
                <img src="/ICONS/ICON-FILTER.png" className={Style.iconFilter} />
                <section className={Style.categoryContainer}>
                  <div className={Style.categoryButtons} id="cameraIcon" ><img src="/ICONS/ICON-CAMERA.png" /><p>Must See</p></div>
                  <div className={Style.categoryButtons} id="mountainIcon" ><img src="/ICONS/ICON-MOUNTAIN.png" /><p>Mountains</p></div>
                  <div className={Style.categoryButtons} id="shrineIcon" ><img src="/ICONS/ICON-SHRINES.png" /><p>Shrines</p></div>
                </section>
                <section className={Style.categoryContainer2}>
                  <div className={Style.categoryButtons} id="hotelIcon" ><img src="/ICONS/ICON-HOTEL.png" /><p>Hotels</p></div>
                  <div className={Style.categoryButtons} id="naturalParkIcon" ><img src="/ICONS/ICON-NATURAL-PARK.png" /><p>Natural Parks</p></div>
                  <div className={Style.categoryButtons} id="transportIcon" ><img src="/ICONS/ICON-TRANSPORTATION.png" /><p>Transport</p></div>
                </section>
              </form>
              <section className={Style.resultsContainer}>
                <p>Longitude: {coordinates.lng}</p> 
                <p>Latitude: {coordinates.lat}</p>
                <h1 className={Style.placeTitle}>Places</h1>
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <>
                  <section className={Style2.resultsSectionContainer}>
                      {places.map((place, index) => (
                        place.properties.name && (
                          <div className={Style2.resultsImagesContainer} key={index}>
                            <p className={Style.placesName}>{placeIndex++}. {place.properties.address_line1}</p> 
                            <div>
                              {/* Add a button to trigger fetching of images */}
                              <FetchImages placeName={place.properties.name}/>
                              <button className={Style.fetchImageButton} onClick={() => setPlaceName(place.properties.name)}>
                                {/* Fetch Images for {place.properties.name} */}
                                See more
                              </button>
                              </div>
                          </div>  
                        )
                      ))}
                   </section>
        
                  </>)}
              </section>
            </div>
          </section>
        </div>
      </main>
    </body>
  );
};

export default DiscoverPage;