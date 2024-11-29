import Image from "next/image";
import Link from "next/link";
import loginStyle from "./LogInPage.module.css";
import LandingPage from "./LANDING/landing";
import NavBar from './navbar';

export default function Home() {
  return (
    <body>
      <main>
          <div className = {loginStyle.background}></div>
        <NavBar />
        <LandingPage/>





        {/* <section className={loginStyle.parallaxContainer} >

          <img src="/ASSETS/FOREGROUND-TREE.png" id="foregroundTree"/>
          <img src="/ASSETS/FOREGROUND-TOWER.png" id="foregroundTower" />        
          <img src="/ASSETS/LAYER-1.png" id="parallaxLayer1"/>    
          <img src="/ASSETS/LAYER-2.png" id="parallaxLayer2"/>     
          <img src="/ASSETS/LAYER-3.png" id="parallaxLayer3"/>
          <img src="/ASSETS/LAYER-4.png" id="parallaxLayer4"/>
          <img src="/ASSETS/LAYER-7.png" id="parallaxLayer7" />
          <img src="/ASSETS/Moon.png" id="moon" />
          
          <section className={loginStyle.shootingStarContainer} id="shootingStarContainer">
              <span className={loginStyle.shootingStar} id="shootingStar"></span>
              <span className={loginStyle.shootingStar} id="shootingStar"></span>
              <span className={loginStyle.shootingStar} id="shootingStar"></span>
              <span className={loginStyle.shootingStar} id="shootingStar"></span>
          </section>

          <section className={loginStyle.cloudsContainer} id="cloudsContainer">
              <img className={loginStyle.clouds} id="clouds1" src="/ASSETS/CLOUD-1.png"/>
              <img className={loginStyle.clouds} id="clouds2" src="/ASSETS/CLOUD-2.png" />
              <img className={loginStyle.clouds} id="clouds3" src="/ASSETS/CLOUD-3.png"/>
            <img className={loginStyle.clouds} id="clouds4" src="/ASSETS/CLOUD-4.png" />
          </section>

        </section>    */}
      </main>
    </body>

  );
}