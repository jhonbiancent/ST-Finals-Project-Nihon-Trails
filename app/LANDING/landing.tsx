import React from 'react';
import style from './landingstyle.module.css';
import Script from './landingjavascript.js';
const landing = () => {
  return (
    <div className={style.main}>
      <Script/>
      <div className={style.introductionImagesContainer}>
        <div className={style.imageContainer}>
          <img src="/LANDINGPAGEASSETS/KIYOMIZUDERA TEMPLE.jpg" className={style.image1} id="image1" />
          <img src="/LANDINGPAGEASSETS/NISHIKI.jpeg" className={style.image2} id="image2" />
          <img src="/LANDINGPAGEASSETS/HIGASHIYAMA.jpg" className={style.image3} id="image3" />
           <img src="/LANDINGPAGEASSETS/GINKGO-PARK.jpeg" className={style.image4} id="image4" />
        </div>
        <div className={style.introheader} id="header1">
          <p className={style.firstheader}>Nihon Trails</p>
          <p className={style.secondheader}>Kiyomizudera Temple</p>
          <p className={style.thirdheader}>  <img src="/ICONS/ICON-LOCATION.png" className={style.locationicon} />
            Higashiyama Ward, Kyoto</p>  
        </div>
        <div className={style.introheader2} id="header2">
          <p className={style.firstheader}>Nihon Trails</p>
          <p className={style.secondheader}>Nishiki Market</p>
          <p className={style.thirdheader}>  <img src="/ICONS/ICON-LOCATION.png" className={style.locationicon} />
            Kamo, Kansai</p>  
        </div>
           <div className={style.introheader3} id="header3">
          <p className={style.firstheader}>Nihon Trails</p>
          <p className={style.secondheader}>Higashiyama District</p>
          <p className={style.thirdheader}>  <img src="/ICONS/ICON-LOCATION.png" className={style.locationicon} />
            Yasaka, Kanto</p>  
        </div>
           <div className={style.introheader4} id="header4">
          <p className={style.firstheader}>Nihon Trails</p>
          <p className={style.secondheader}>Maruyama Park</p>
          <p className={style.thirdheader}>  <img src="/ICONS/ICON-LOCATION.png" className={style.locationicon} />
            Kenninji, Kyoto</p>  
        </div>


        <div className={style.introcarouselContainer}>
          <span className={style.aboutUsContainer}>
            <p>About</p>
            <p>Best Spots In Japan</p>
          </span>
          <section className={style.carouselImagesContainer}>
              <button id="prev">&#10094;</button>
              <img src="/LANDINGPAGEASSETS/KIYOMIZUDERA TEMPLE.jpg" id="carouselimg1"/>
              <img src="/LANDINGPAGEASSETS/NISHIKI.jpeg" id="carouselimg2"/>
              <img src="/LANDINGPAGEASSETS/HIGASHIYAMA.jpg" id="carouselimg3"/>
            <img src="/LANDINGPAGEASSETS/GINKGO-PARK.jpeg" id="carouselimg4"/>  
            <button id="next"> &#10095;</button>
            </section>
           </div>
      </div>
      <div className={style.contentContainer}>
      <section className={style.headerContainer}>
        <section className={style.regionsOfJapanContainer} id="element1"> 
                  <h4>Travel Japan</h4>
        </section>
        </section>

          <section className={style.travelContainer}>
          <p>RECOMMENDED DESTINATIONS​</p>
          <p>Find out more about destinations that take care of their place and their local community.</p>
        </section>
        
        <div className={style.recommendedcontainer}>
          <div className={style.recommendedRow}>
            <span className={style.rowImageContainer}><img src="/LANDINGPAGEASSETS/KINKAKU-JI.jpg" />
              <p className={style.placeName}>KINKAKU-JI TEMPLE</p>
              <p className={style.placeLocation}>Kita Ward, Kyoto</p>
            </span>
            <div className={style.column1}>
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/OKAZAKI.jpg" />
               <p className={style.placeName}>OKAZAKI PARK</p>
                <p className={style.placeLocation}>Kita Ward, Kyoto</p>
              </span>
              <span className={style.columnImage}> <img src="/TOURISM/TOURISM-KYUSHU-DAZAIFU-TENMANGU.webp" />
                 <p className={style.placeName}>WISTERIA GARDEN</p>
                <p className={style.placeLocation}>Kitakyushu, Fukouka</p>
              </span>
            </div>
            <div className={style.column2}>
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/SHINSEKAI.jpg" />
               <p className={style.placeName}>SHINSEKAI</p>
                <p className={style.placeLocation}>Shinsekai, Osaka</p>
              </span>
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/KABUKICHO.jpg" />
               <p className={style.placeName}>XAVIER PORTELA</p>
                <p className={style.placeLocation}>Sidewalk, Tokyo</p>
              </span>
            </div>
          </div>

           <div className={style.recommendedRow}>
                   <div className={style.column1}>
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/KORIN TEMPLE.jpg" />
              <p className={style.placeName}>KASUGA TAISHA</p>
                <p className={style.placeLocation}>Kasuga, Nara</p>
              </span>
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/LAKE BIWA.jpg" />
               <p className={style.placeName}>SHIRAHIGE SHRINE</p>
                <p className={style.placeLocation}>Torii, Kyoto</p>
              </span>
            </div>
            <div className={style.column2}>
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/NAHAGOTO.jpg" />
               <p className={style.placeName}>SHINMACHI DORI</p>
                <p className={style.placeLocation}>Kanazawa, Nara</p> 
              </span>
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/MIHAGO SPRINGS.jpg" />
               <p className={style.placeName}>HOSHINO RESORTS</p>
                <p className={style.placeLocation}>Hoshinoya, Kyoto</p>
              </span>
            </div>
            <span className={style.rowImageContainer}><img src="/LANDINGPAGEASSETS/KINKAKUJI TEMPLE.jpg" />
             <p className={style.placeName}>KINKAKU-JI TEMPLE</p>
                <p className={style.placeLocation}>Kita-ku, Kyoto</p>
            </span>
          </div>
        </div>
       </div>
    </div>
  )
}

export default landing
