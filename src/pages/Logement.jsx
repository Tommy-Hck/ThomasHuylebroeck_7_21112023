import React from "react";
import { useParams, Link } from "react-router-dom";
import homeData from "../assets/logements.json";
import "../styles/Logement.scss";
import greyStar from "../assets/etoileGrise.png";
import redStar from "../assets/etoileRouge.png";
import Collapse from "../components/collapse";

export default function Logement() {
  const { id } = useParams();
  const currentLogement = homeData.find((logement) => logement.id === id);
  console.log("id", id);

  if (!currentLogement) {
    return <Link to="/Error"></Link>;
  }

  let array = ["1", "2", "3", "4", "5", "6"];

  return (
    <main className="main">
      <div className="carrousel">
        <img
          className="photos"
          src={currentLogement.pictures[0]}
          alt="visuel du logement"
        />
      </div>

      <section className="description-container">
        <div className="location">
          <div>
            <h1 className="quartier">{currentLogement.title}</h1>
            <p className="city">{currentLogement.location}</p>
          </div>
          <div className="host">
            <p className="owner">{currentLogement.host.name}</p>
            <img
              className="host-picture"
              src={currentLogement.host.picture}
              alt="hôte"
            />
          </div>
        </div>
        <div className="main-tag">
          <div className="tag-container">
            <div className="taga">
              {/* Tags rendering */}
              {currentLogement.tags.map((tag) => (
                <span key={tag.length}>{tag}</span>
              ))}
            </div>

            <div className="rating-container">
              {/* Rating stars rendering */}
              {array.map((index) => (
                <img
                  key={index}
                  className="star"
                  src={index <= currentLogement.rating ? redStar : greyStar}
                  alt="star"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="collapse">
          <Collapse
            title={"description"}
            content={currentLogement.description}
          />

          <Collapse
            title={"Équipements"}
            content={
              <ul>
                {currentLogement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    </main>
  );
}
