"use client";
import React, { useEffect } from 'react'; 
import loginStyle from '../LogInPage.module.css';

export default function FirstPageJavascript() {
    useEffect(() => {
      
    var shootingStarOpacity = true; 
    const layer1 = document.getElementById('parallaxLayer1');
    const layer2 = document.getElementById('parallaxLayer2');
    const layer3 = document.getElementById('parallaxLayer3');
    const layer4 = document.getElementById('parallaxLayer4');
    const layer7 = document.getElementById('parallaxLayer7');
    const moon = document.getElementById('moon');
        
    const toggleButtonDarkMode = document.getElementById('nightmodeContainer');
    const shootingStarContainer = document.getElementById('shootingStarContainer');
        const cloudsContainer = document.getElementById('cloudsContainer'); 
        
    const clouds1 = document.getElementById('clouds1');  
    const clouds2 = document.getElementById('clouds2');
    const clouds3 = document.getElementById('clouds3');
    const clouds4 = document.getElementById('clouds4');
        
    const toggle = document.getElementById('toggleButton');

    const handleScroll = () => {
      let value = window.scrollY;
      if (layer1) layer1.style.top = value * 0.1 + 'px';
      if (layer2) layer2.style.top = value * 0.3 + 'px';
      if (layer3) layer3.style.top = value * 0.4 + 'px';
      if (layer4) layer4.style.top = value * 0.5 + 'px';

      if (clouds1) clouds1.style.left = value * -0.6 + 'px'; 
      if (clouds2) clouds2.style.left = value * -0.3 + 'px'; 
      if (clouds1) clouds3.style.left = value * 0.7 + 'px'; 
      if (clouds2) clouds4.style.left = value * 0.2 + 'px'; 
        
      if (cloudsContainer) cloudsContainer.style.top = value * 0.7 + 'px';
        
      if (moon) {
          moon.style.top = value >= window.innerHeight * 0.7 ? value * 0.1 + 'px' : value * 1 + 'px';
        }


        toggle.onclick = function () {
            toggle.classList.toggle(loginStyle.toggleCircleClicked);
            changeToggleColor();
            shootingStarToggle();
        };

        function shootingStarToggle() {
            shootingStarOpacity =! shootingStarOpacity;
            if (shootingStarOpacity == true) {
                shootingStarContainer.classList.remove(loginStyle.shootingStarContainerAppear);
                cloudsContainer.classList.remove(loginStyle.cloudsContainerDisappear);

            } else {
                shootingStarContainer.classList.add(loginStyle.shootingStarContainerAppear);
                cloudsContainer.classList.add(loginStyle.cloudsContainerDisappear);
            }
        }



        function changeToggleColor() {
            if (toggleButtonDarkMode.style.backgroundColor === "blue") {
                toggleButtonDarkMode.style.backgroundColor = "teal"; 
            } else {
                toggleButtonDarkMode.style.backgroundColor = "blue"; 
            }

            if (layer1.src.includes('/ASSETS/LAYER-1.png')) {
                layer1.src = '/ASSETS/LAYER-1-DARKMODE.png'; 
            } else {
                layer1.src = '/ASSETS/LAYER-1.png'; 
            }

            if (layer2.src.includes('/ASSETS/LAYER-2.png')) {
                layer2.src = '/ASSETS/LAYER-2-DARKMODE.png'; 
            } else {
                layer2.src = '/ASSETS/LAYER-2.png'; 
            }

            if (layer3.src.includes('/ASSETS/LAYER-3.png')) {
                layer3.src = '/ASSETS/LAYER-3-DARKMODE.png'; 
            } else {
                layer3.src = '/ASSETS/LAYER-3.png'; 
            }

            if (layer4.src.includes('/ASSETS/LAYER-4.png')) {
                layer4.src = '/ASSETS/LAYER-4-DARKMODE.png';
            } else {
                layer4.src = '/ASSETS/LAYER-4.png';
            }

             if (layer7.src.includes('/ASSETS/LAYER-7.png')) {
                layer7.src = '/ASSETS/LAYER-7-DARKMODE.png'; 
            } else {
                layer7.src = '/ASSETS/LAYER-7.png'; 
            }


        }
      
    };

    window.addEventListener('scroll', handleScroll);

      
    
      
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
    return (
        <div></div>
  );

}
