import React from "react";
import { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import homeData from "../assets/logements.json";
import "../styles/Logement.scss";
import greyStar from "../assets/etoileGrise.png";
import redStar from "../assets/etoileRouge.png";
import Collapse from "../components/collapse";
import Carousel from "../../components/Carousel"

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
    <main className="main">
      <div className="carousel">
        <Carousel className="picture-container">
        <img
          className="photos"
          src={pictures}
          alt="visuel du logement"
        />
        </Carousel>
        <bouton></bouton>
        <bouton></bouton>
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
              <span key={tag.length}>{tag}</span>
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
        <div className="collapse">
          <Collapse
            className="title-container Description-title"
            title={<h2 className="title">Description</h2>}
            content={
              <div className="description-content">
                {description}
              </div>
            }
          />

          <Collapse
            className="title-container equipements-title"
            title={<h2 className="title">Équipements</h2>}
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