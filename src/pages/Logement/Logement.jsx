import React from "react";
import { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import homeData from "../../assets/logements.json";
import "../Logement/Logement.scss";
import greyStar from "../../assets/etoileGrise.png";
import redStar from "../../assets/etoileRouge.png";
import Collapse from "../../components/Collapse/collapse";
import Carousel from "../../components/Carousel/Carousell"
import "../../styles/base.scss"

function Logement() {
  const navigate = useNavigate()
  const { id } = useParams();
  const currentLogement = homeData.filter((logement) => logement.id === id);

  let array = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (currentLogement.length === 0) {
      navigate('/Error');
    }
  })

  return (
    <div>
      {currentLogement.map(
        ({
          id,
          title,
          pictures,
          description,
          host,
          rating,
          location,
          equipments,
          tags
        }) => (
    <main key={id} className="main">
      <div className="carousel">
        <Carousel pictures={pictures}>
        </Carousel>
        {/* <button>{previousPicture}</button>
        <button>{nextPicture}</button> */}
      </div>

      <section className="description-container">
        <div className="info">
          <div className="city-aera">
            <div className="quartier">{title}</div>
            <p className="city">{location}</p>
          </div>
          <div className="host">
            <p className="owner">{host.name}</p>
            <img
              className="host-picture"
              src={host.picture}
              alt="hôte"
            />
          </div>
          <div className="taga">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="rating-container">
            {/* Rating stars rendering */}
            {array.map((index) => (
              <img
                key={index}
                className="star"
                src={index <= rating ? redStar : greyStar}
                alt="star"
              />
            ))}
          </div>
        </div>
        <div className="logement-collapse">
          <Collapse
            className="title-container Description-title"
            title={"Description"}
            content={
              <div className="description-content">
                {description}
              </div>
            }
          />

          <Collapse
            className="title-container equipements-title"
            title={"Équipements"}
            content={
              <ul className="equipement-list">
                {equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    </main>
        )
      )}
      </div>
  );
}
export default Logement