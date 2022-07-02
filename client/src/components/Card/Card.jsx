import React from "react";
import "../../styles/Card.css";
import { NavLink } from "react-router-dom";

// Modelo de CARD de cada pais, con LINK al respect país
export default function Card(props) {
  return (
    <div className="country">
      <NavLink className="countryLink" to={`/home/${props.id}`}>
        <div className="countrydetail">
          <img className="flag" alt="img" src={`${props.flag}`} />
          <div id="nameCountry">{props.name.toUpperCase()}</div>
          <div className="containerCont">
            <span id="titleContinent">Continent:</span>
            <span id="nameContinent"> {props.continent}</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
