"use client";
import React, { useEffect } from 'react'; 
import style from './content.module.css';

export default function contentJavascript() {
    useEffect(() => {

        const elements = document.getElementById('element1')
        const observer1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    elements.classList.add(style.regionsOfJapanContainerShow);
                } else {
                    elements.classList.remove(style.regionsOfJapanContainerShow);
                }
            }, {
                threshold: 1,
            });
        });
        observer1.observe(elements);

       const element2 = document.getElementById('element2')
        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    element2.classList.add(style.show2);
                } else {
                    element2.classList.remove(style.show2);
                }
            }, {
                threshold: 1,
            });
        });
        observer2.observe(element2);
    
        //--------------------------------------for the pictures--------------------------------//

        const elementPicture1 = document.getElementById('elementPicture1');
        const elementPicture2 = document.getElementById('elementPicture2');
        const elementPicture3 = document.getElementById('elementPicture3');
        const elementPicture4 = document.getElementById('elementPicture4');
        const elementPicture5 = document.getElementById('elementPicture5');
        const elementPicture6 = document.getElementById('elementPicture6');

        const details1 = document.getElementById('details1');
        const details2 = document.getElementById('details2');
        const details3 = document.getElementById('details3');
        const details4 = document.getElementById('details4');
        const details5 = document.getElementById('details5');
        const details6 = document.getElementById('details6');

        const observer3 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    slideInPictures();
                } else {
                    removeSlideInPictures();
                }
            }, {
                threshold: 1,
            });
        });
        observer3.observe(elementPicture6);
    

        function slideInPictures() {
   
            elementPicture1.style.transform = "translateX(0%)";
            elementPicture2.style.transform = "translateX(0%)";
            elementPicture3.style.transform = "translateX(0%)";
            elementPicture4.style.transform = "translateX(0%)";
            elementPicture5.style.transform = "translateX(0%)";
            elementPicture6.style.transform = "translateX(0%)";

            elementPicture1.style.opacity = 1;
            elementPicture2.style.opacity = 1;
            elementPicture3.style.opacity = 1;
            elementPicture4.style.opacity = 1;
            elementPicture5.style.opacity = 1;
            elementPicture6.style.opacity = 1;

            details1.style.transition = "all 2s ease ";
            details1.style.transform = 'translateY(0%)';
            details2.style.transition = "all 2s ease 0.4s";
            details2.style.transform = 'translateY(0%)';
            details3.style.transition = "all 2s ease 0.8s";
            details3.style.transform = 'translateY(0%)';

            details4.style.transition = "all 2s ease ";
            details4.style.transform = 'translateY(0%)';
            details5.style.transition = "all 2s ease 0.5s";
            details5.style.transform = 'translateY(0%)';
            details6.style.transition = "all 2s ease 0.1s";
            details6.style.transform = 'translateY(0%)';
        
            details1.style.opacity = 1;
            details2.style.opacity = 1;
            details3.style.opacity = 1;
            details4.style.opacity = 1;
            details5.style.opacity = 1;
            details6.style.opacity = 1;
        }
        function removeSlideInPictures() {
            elementPicture1.style.transform = "translateX(20%)";
            elementPicture2.style.transform = "translateX(20%)";
            elementPicture3.style.transform = "translateX(20%)";
            elementPicture4.style.transform = "translateX(20%)";
            elementPicture5.style.transform = "translateX(20%)";
            elementPicture6.style.transform = "translateX(20%)";
            elementPicture1.style.opacity = 0;
            elementPicture2.style.opacity = 0;
            elementPicture3.style.opacity = 0;
            elementPicture4.style.opacity = 0;
            elementPicture5.style.opacity = 0;
            elementPicture6.style.opacity = 0;

            details1.style.transform = 'translateY(40%)';
            details2.style.transform = 'translateY(40%)';
            details3.style.transform = 'translateY(40%)';
            details4.style.transform = 'translateY(40%)';
            details5.style.transform = 'translateY(40%)';
            details6.style.transform = 'translateY(40%)';
            
            details1.style.opacity = 0;
            details2.style.opacity = 0;
            details3.style.opacity = 0;
            details4.style.opacity = 0;
            details5.style.opacity = 0;
            details6.style.opacity = 0;
            

        }

        const contentTobeObserved2 = document.getElementById('contentTobeObserved2');
        const paragraph1before = document.getElementById('paragraph1before');
        const headerSlideIn = document.getElementById('headerSlideIn');
        const paragraph1 = document.getElementById('paragraph1');
        const exploreImage = document.getElementById('exploreImage');

            const observer4 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    slideInHeaders();
                } else {
                    removeSlideInHeaders();
                }
            }, {
                threshold: 1,
            });
        });
        observer4.observe(contentTobeObserved2);

        function slideInHeaders() {
            exploreImage.style.transition = "1s ease";
            exploreImage.style.transform = "scale(1)";
            exploreImage.style.opacity = 1;

            paragraph1before.style.transition = "1s ease 0.5s";
            paragraph1before.style.height = "20%";


            paragraph1.style.transition = "1s ease 1.2s";
            paragraph1.style.opacity = 1;
            paragraph1.style.transform = "translateX(0%)";

            headerSlideIn.style.transition = "1s ease 1.5s";
            headerSlideIn.style.opacity = 1;
            headerSlideIn.style.transform = "translateX(0%)";

    
        }
        function removeSlideInHeaders(){
            paragraph1before.style.height = "0%";

            paragraph1.style.opacity = 0;
            paragraph1.style.transform = "translateX(-5%)";

            headerSlideIn.style.opacity = 0;
            headerSlideIn.style.transform = "translateX(-5%)";

            exploreImage.style.transform = "scale(0.8)";
            exploreImage.style.opacity = 0;
        }

    })
            return (<></>);
}