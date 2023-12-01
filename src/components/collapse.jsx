import React, { useState } from "react";
import vector from '../assets/flècheBas.png'

const MenuDeroulant = () => {
    // j'utilise le state pour gérer l'état du menu
    const [open, setOpen] = useState(false);
  
    // Fonction pour changer l'état du menu
    const toggleMenu = () => {
      setOpen(!open);
    };
  
    return (
      <div>
        {/* flèche pour activer/désactiver le menu */}
        <div onClick={toggleMenu}>
          <img src={open ? vector : '../assets/flècheBas.png'} alt="flècheBas"/>
        </div>
  
        {/* le contenu du menu est rendu conditionnellement en fonction de l'état */}
        {open && (
          <h1>
            <p>Description</p>
          </h1>
        )}
      </div>
    );
  };
  
  export default MenuDeroulant;