import React from "react";
import { useState } from "react";
import  "../styles/carousel.scss"
import leftArrow from "../assets/gaucheCarousel.png"
import rightArrow from "../assets/droiteCarousel.png"


function Logement({pictures}) {
    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const nextPicture = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
        //Si current picture est la dernière photo, je vais chercher la première photo
        //sinon, j'incrémente la position actuelle de 1 pour aller chercher la suivante
    };

    const previousPicture = () => {
        setCurrent(current === 0 ? length -1 : current -1)
        //si current picture est la première photo, je vais chercher la dernière photo
        //sinon je décrémente de 1 et je vais chercher la photo précédente
    };

    return (
        <div className="carousel">
            {length > 1 && (
          <img className="left-arrow" onClick={previousPicture} src={leftArrow} alt="flèche gauche" />
        
            )}
            {length > 1 && (
                    <img className="right-arrow" onClick={nextPicture} src={rightArrow} alt="flèche droite" />
                )}

        {pictures.map((image, index) => {

            return (
                <div key={index}>
                    {index === current && (
                        <img
                            src={image}
                            alt="Visuel du logement"
                            className="carousel-picture" 
                            />
                    )}
                    {index === current && length > 1 && (
                        <div className="compteur">
                            {/* le compteur affiche la position actuelle par rapport au total */}
                            {current + 1}/{length}
                            {/* compteur actif uniquement s'il y a au moins une autre photo à afficher */}
                        </div>
                    )}
                </div>
            );
                    })}
                    </div>
             );
    }

    export default Logement;
    