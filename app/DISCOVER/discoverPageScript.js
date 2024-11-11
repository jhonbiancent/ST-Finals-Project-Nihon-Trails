"use client";
import React, { useEffect } from 'react'; 
import Style from './discoverPage.module.css';

export default function discoverPageScript() {
    useEffect(() => {

        const cameraIcon = document.getElementById('cameraIcon');
        const mountainIcon = document.getElementById('mountainIcon');
        const shrineIcon = document.getElementById('shrineIcon');
        const hotelIcon = document.getElementById('hotelIcon');
        const naturalParkIcon = document.getElementById('naturalParkIcon'); 
        const transportIcon = document.getElementById('transportIcon');
    

        const CloseButtonExpandedSection = document.getElementById('closeButtonExpandedSection');
        const expandedResultsContainer = document.getElementById('expandedResultsContainer');

        var cameraClicked = false; 
        var mountainClicked = false; 
        var shrineClicked = false; 
        var hotelClicked = false; 
        var naturalParkClicked = false; 
        var transportClicked = false; 
        
        function CloseExpandedSection() {
             expandedResultsContainer.style.display = 'none';
        }
        


        cameraIcon.onclick = function () {
            cameraClicked = !cameraClicked;
            if (cameraClicked) {
                cameraIcon.classList.add(Style.cameraIconClicked);
            } else {
                cameraIcon.classList.remove(Style.cameraIconClicked);
            }
        };

            mountainIcon.onclick = function () {
            mountainClicked = !mountainClicked;
            if (mountainClicked) {
                mountainIcon.classList.add(Style.mountainIconClicked);
            } else {
                mountainIcon.classList.remove(Style.mountainIconClicked);
            }
        };

            shrineIcon.onclick = function () {
            shrineClicked = !shrineClicked;
            if (shrineClicked) {
                shrineIcon.classList.add(Style.shrineIconClicked);
            } else {
                shrineIcon.classList.remove(Style.shrineIconClicked);
            }
        };

            hotelIcon.onclick = function () {
            hotelClicked = !hotelClicked;
            if (hotelClicked) {
                hotelIcon.classList.add(Style.hotelIconClicked);
            } else {
                hotelIcon.classList.remove(Style.hotelIconClicked);
            }
        };

            naturalParkIcon.onclick = function () {
            naturalParkClicked = !naturalParkClicked;
            if (naturalParkClicked) {
                naturalParkIcon.classList.add(Style.naturalParkIconClicked);
            } else {
                naturalParkIcon.classList.remove(Style.naturalParkIconClicked);
            }
        };

            transportIcon.onclick = function () {
            transportClicked = ! transportClicked;
            if ( transportClicked) {
                transportIcon.classList.add(Style.transportIconClicked);
            } else {
                transportIcon.classList.remove(Style.transportIconClicked);
            }
        };

    })


  
    
    return (
        <div></div>
  );

}
export const showModal = () => {
        const confirmationModalMainContainer = document.getElementById('confirmationModalMainContainer');
    confirmationModalMainContainer.style.display = 'flex';
    console.log('showModal');
        }
        export const closeModal = ()=> {
        confirmationModalMainContainer.style.display = 'none';
        }

        export const CloseExpandedSection =()=> {
          const expandedResultsContainer = document.getElementById('expandedResultsContainer');
             expandedResultsContainer.style.display = 'none';
        }
           export const openReadmoreSection =()=> {
          const expandedResultsContainer = document.getElementById('expandedResultsContainer');
             expandedResultsContainer.style.display = 'flex';
        }