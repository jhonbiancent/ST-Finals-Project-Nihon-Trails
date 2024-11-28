"use client";
import React, { useState, useEffect } from 'react';
import NavBar from '../navbar';
import Style from "./discoverPage.module.css";
import Style2 from "./fetchImagesStyle.module.css";
import MyMap from "./geoapifyMap";  
import fetchPlaces from './fetchPlaces'; 
import FetchImages from './fetchImages'; 
import DiscoverPageScript from './discoverPageScript'; 
import { closeModal } from './discoverPageScript';
import { CloseExpandedSection } from './discoverPageScript';
import Content from '../CONTENT/Content';


 interface FetchDataFromImagesPage {
    placeNameEnglish: string;
    imageUrls: String[];
  }
  const DiscoverPage: React.FC<FetchDataFromImagesPage> = ({placeNameEnglish, imageUrls}) => {
  const [coordinates, setCoordinates] = useState<{ lng: number; lat: number }>({ lng: 0, lat: 0 });
  const [places, setPlaces] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [placeName, setPlaceName] = useState<string | null>(null);
  const [requestImageBool, setRequestImageBool] = useState<boolean | false>(false);
  const [placeCategories, setPlaceCategories] = useState<string>("tourism");
  const [fetchedImageURLS, setFetchedImageURLS] = useState<string[]>(["ICONS/ICON-IMAGE.png"]);
  const language = "en";
  const proximitySearch = 30000;  
  const limitOfRequestedPlaces = 30;
  var placeIndex = 1;
 
  const handleCenterChange = (lng: number, lat: number) => {
    setCoordinates({ lng, lat });
    console.log(`Updated Coordinates - Longitude: ${lng}, Latitude: ${lat}`);
      console.log(placeCategories );
    getPlaces(lng, lat); 
  };


  const getPlaces = async (lng: number, lat: number) => {
    setLoading(true);
    const { data, error } = await fetchPlaces(
      lng,
      lat,
      placeCategories,       
      language,               
      proximitySearch,        
      limitOfRequestedPlaces  
    );

    if (error) {
      setError(error);
    } else {
      setPlaces(data || []);
    }
    setLoading(false);
    };
    
  useEffect(() => {
    getPlaces(coordinates.lng, coordinates.lat);
  }, []);
  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <body>
        <DiscoverPageScript/>
      <main>

        <section className={Style2.expandedResultsContainer} id="expandedResultsContainer">
          <section className={Style2.expandedResultsSubContainer}>
            <h2>{placeNameEnglish}</h2>
              <button className={Style2.CloseButtonExpandedSection} id="CloseButtonExpandedSection" onClick={CloseExpandedSection}>Close</button>
          </section>
          <h2 className={Style.placesName}></h2>
        </section>

        <section className={Style2.modalMainContainer} id="confirmationModalMainContainer">
          <div className={Style2.modalSucccessful} id="confirmationModal">
          <p>Successfully added to Buckelist!</p>
            <button id="closeButton" className={Style2.closeButton}
            onClick={closeModal}
            >Close</button>
          </div>
        </section>

        <NavBar />
        <div className={Style.mainContainer}>
          <section className={Style.contentContainer}>
            <div className={Style.mapContainer}>
              <MyMap onCenterChange={handleCenterChange} />
              <div className={Style.detectionContainer}>
                <img src="/ICONS/ICON-PINPOINT.svg"/>
                {/* <span className={Style.detectionCenter}></span> */}
                <span className={Style.detectionLines}></span>
                <span className={Style.detectionLines}></span>
              </div>
            </div>
            <div className={Style.detailsContainer}>
              <form className={Style.searchBarContainer}>
                <img src="/ICONS/ICON-SEARCH.png" className={Style.searchIconImage} />
                <input type="search" placeholder='search' className={Style.searchBar}/>
                <img src="/ICONS/ICON-FILTER.png" className={Style.iconFilter} />
                <section className={Style.categoryContainer}>
                  <div className={Style.categoryButtons} id="cameraIcon" onClick={()=> setPlaceCategories("tourism")} ><img src="/ICONS/ICON-CAMERA.png" /><p>Must See</p></div>
                  <div className={Style.categoryButtons} id="mountainIcon" onClick={()=> setPlaceCategories("mountain")} ><img src="/ICONS/ICON-MOUNTAIN.png" /><p>Mountains</p></div>
                  <div className={Style.categoryButtons} id="shrineIcon" onClick={()=> setPlaceCategories("religion.place_of_worship.shinto")} ><img src="/ICONS/ICON-SHRINES.png" /><p>Shrines</p></div>
                </section>
                <section className={Style.categoryContainer2}>
                  <div className={Style.categoryButtons} id="hotelIcon" onClick={()=> setPlaceCategories("accommodation")} ><img src="/ICONS/ICON-HOTEL.png" /><p>Hotels</p></div>
                  <div className={Style.categoryButtons} id="naturalParkIcon" onClick={()=> setPlaceCategories("natural")} ><img src="/ICONS/ICON-NATURAL-PARK.png" /><p>Natural Parks</p></div>
                  <div className={Style.categoryButtons} id="transportIcon" onClick={()=> setPlaceCategories("public_transport")} ><img src="/ICONS/ICON-TRANSPORTATION.png" /><p>Transport</p></div>
                </section>
              </form>
              <section className={Style.resultsContainer}>
        
                  <p>Current Location:</p>
                  <p>Longitude: {coordinates.lng}</p> 
                  <p>Latitude: {coordinates.lat}</p>
       
              


                {loading ? (
                <section className={Style.loadingContainerFetchingPlaces}>
                        <div>loading...</div>
                        <div className={Style.progressBarContainer}>
                        <div className={Style.progressBar}>
                        </div>
                      </div>
                </section>
                ) : (
                  <>
                  <section className={Style2.resultsSectionContainer}>
                      {places.map((place, index) => (
                        place.properties.name && (
                          <div className={Style2.resultsImagesContainer} key={index}>
                            <p className={Style.placesName}>{placeIndex++}. {place.properties.address_line1}</p> 
                            <div>
                              <FetchImages placeName={place.properties.name} isImageRequested={requestImageBool} placeNameEnglish={place.properties.address_line1} />
                              
                              
                              {/* <button className={Style.fetchImageButton} onClick={() => {
                                setPlaceName(place.properties.name);
                                setRequestImageBool(true);
                                console.log("requested!!!!");
                              }}> */}
                                {/* Fetch Images for {place.properties.name} */}
                                {/* See more
                              </button> */}
                            
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
        <Content/>
      </main>
    </body>
  );
};

export default DiscoverPage;
