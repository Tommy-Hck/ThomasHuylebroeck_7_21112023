import React, { useState } from "react";
import Arrow from '../../assets/arrow.png'
import '../Collapse/Collapse.scss'

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
            <h2 className="collapse-title">{title}</h2>
            {open ? (
              <img className="collapse-arrow" onClick={toggleMenu} src={Arrow} alt="flèche"/>
            ):(
              <img className="collapse-arrow-down" onClick={toggleMenu} src={Arrow} alt="flèche"/>
            )  
            }
          
        </div>
        
        <div className="open-collapse">
        {/* le contenu du menu est rendu conditionnellement en fonction de l'état */}
        {open && (
          <div className="collapse-content">
          <div className="collapse-text">{content}</div>
        </div>
        )}
        </div>
      </div>
    );
  };
  
  export default MenuDeroulant;