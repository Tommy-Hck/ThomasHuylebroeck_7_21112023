import React, { useState } from "react";
import '../assets/flècheBas.png'
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
            <h2>{title}</h2>
          <img className="down-arrow" onClick={toggleMenu} src={require('../assets/flècheBas.png').default} alt="flèche vers le bas"/>
        </div>
        
        <div>
        {/* le contenu du menu est rendu conditionnellement en fonction de l'état */}
        {open && (
          <div className="collapse-content">
          <p>{content}</p>
        </div>
        )}
        </div>
      </div>
    );
  };
  
  export default MenuDeroulant;