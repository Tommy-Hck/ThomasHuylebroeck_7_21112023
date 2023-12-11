import React, { useState } from "react";
import Arrow from '../assets/arrow.png'
import '../styles/Collapse.scss'

const MenuDeroulant = ({title, content}) => {
    // j'utilise le state pour gérer l'état du menu
    const [open, setOpen] = useState(false);
  
    // Fonction pour changer l'état du menu
    const toggleMenu = () => {
      setOpen(!open);
    };
  
    return (
      <div className={`collapse-container ${open ? 'open' : ''}`}>
        {/* flèche pour activer/désactiver le menu */}
        <div className='collapse-header'>
            <div>{title}</div>
            {open ? (
              <img className="arrow" onClick={toggleMenu} src={Arrow} alt="flèche"/>
            ):(
              <img className="arrow-down" onClick={toggleMenu} src={Arrow} alt="flèche"/>
            )  
            }
          
        </div>
        
        <div className="open-collapse">
        {/* le contenu du menu est rendu conditionnellement en fonction de l'état */}
        {open && (
          <div className="collapse-content">
          <p className="collapse-text">{content}</p>
        </div>
        )}
        </div>
      </div>
    );
  };
  
  export default MenuDeroulant;