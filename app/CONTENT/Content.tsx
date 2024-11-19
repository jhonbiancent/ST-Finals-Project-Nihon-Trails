
import React, { useState } from "react";
import style from './content.module.css';
import Footer from '../footer';

const Content = () => {
  const [japanMapset1, setjapanMapset1] = useState<string[]>(["/CONTENT/MAP-kyushu.png", "/CONTENT/MAP-Shikoku.png", "/CONTENT/MAP-Chugoku.png",
    "/CONTENT/MAP-Kansai.png", "/CONTENT/MAP-Chubu.png", "/CONTENT/MAP-Kanto.png", "/CONTENT/MAP-Tohoku.png", "/CONTENT/MAP-Hokkaido.png"
  ]);
  const [regionName, setRegionName] = useState<string[]>(["Kyushu", "Shikoku", "Chugoku", "Kansai", "Chubu", "Kanto", "Tohoku", "Hokkaido"]);
  var [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < japanMapset1.length - 1 && regionName.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={style.ContentMainContainer}>
      <section className={style.headerContainer}>
        <h4>Regions of Japan</h4>
      </section>

      <div className={style.regionMapandPicturesContainer}>
        {/* <div className={style.regionsContainer}>
                    <div className={style.regionMapContainer}>
                        <p className={style.regionName}>Kyushu</p>
                        <img src="/CONTENT/MAP-kyushu.png"/>
                    </div>
                    </div> */}
                
        <div className={style.carouselContainer}>
          <button className={style.prevButton} onClick={prevImage}>
            &#10094;
          </button>
          <section className={style.sectionImageContainer}>
            <div className={style.imageContainer}>
              <p className={style.regionNameHeader}>{regionName[currentIndex]}</p>
              <img src={japanMapset1[currentIndex]} />
            </div>
          </section>
          <button className={style.nextButton} onClick={nextImage} >
            &#10095;
          </button>
        </div>
                
        <div className={style.regionPicturesMainContainer}>
          <section className={style.regionRowContainer}>
            <span className={style.pictureContainer}>
              <img src="/TOURISM/TOURISM-KYUSHU-DAZAIFU-TENMANGU.webp" />
              <h5>DAZAIFU TENMANGU</h5>
            </span>
            <span className={style.pictureContainer}>
              <img src="/TOURISM/TOURISM-KYUSHU-KUMAMOTO-CASTLE.webp" />
              <h5>KUMAMOTO CASTLE</h5>
            </span>
            <span className={style.pictureContainer}>
              <img src="/TOURISM/TOURISM-KYUSHU-SHURIJO-CASTLE.jpg" />
              <h5>SHURIJO CASTLE</h5>
            </span>
          </section>
          <section className={style.regionRowContainer}>
            <span className={style.pictureContainer}>
              <img src="/TOURISM/TOURISM-KYUSHU-TAKACHIHO-GORGE.jpg" />
              <h5>TAKACHIHO GORGE</h5>
            </span>
            <span className={style.pictureContainer}>
              <img src="/TOURISM/TOURISM-KYUSHU-YONOHA-MAEHAMA-BEACH.jpg" />
              <h5>YONOHA MAEHAMA</h5>
            </span>
            <span className={style.pictureContainer}>s
              <img src="/TOURISM/TOURISM-KYUSHU-BEPPU-JIGOKU.jpg" />
              <h5>BEPPU JIGOKU</h5>
            </span>
          </section>
        </div>
      </div>
            
      <div className={style.regionMapandPicturesContainer2}>
        <h6>
          Find inspiration for your Japan vacation,from<br/>
          sightseeing in the city and cultural immersion in<br/>
          the countryside to top picks and suggested<br/>
          itineraries
        </h6>
        <p className={style.paragraph1}>
          Arrive in Japan with a game plan. Discover the many events and festivals,<br/>
          temples and castles, theme parks and hot springs, beaches and outdoor<br/>
          activities that Japan has to offer. Whether you're passionate about sports, an<br/>
          art lover, a nature enthusiast, a history buff, a foodie, or just looking to relax<br/>
          on a beach, the possibilities for your Japan journey are endless.
        </p>
        <section className={style.exploreImage1}>
          <section className={style.exploreImageContainer}>
            <img src="/MUST-SEE/discover-page-explore-japan-image1.webp" />
          </section>
        </section>
        <p className={style.paragraph2}>
          Explore by Interest
        </p>
        <div className={style.exploreContainer}>
          <div className={style.exploreRow}>
            <span className={style.exploreBox}>Japan Attractions</span>
            <span className={style.exploreBox}>Action & Adventure Japan</span>
            <span className={style.exploreBox}>Art & Design Japan</span>
            <span className={style.exploreBox}>Culture in Japan</span>
            <span className={style.exploreBox}>Food & Drink in Japan</span>
          </div>
          <div className={style.exploreRow}>
            <span className={style.exploreBox}>Japanese Festivals</span>
            <span className={style.exploreBox}>Japanese Nature</span>
            <span className={style.exploreBox}>History in Japan</span>
            <span className={style.exploreBox}>Relaxation in Japan</span>
            <span className={style.exploreBox}>Shopping in Japan</span>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Content;
