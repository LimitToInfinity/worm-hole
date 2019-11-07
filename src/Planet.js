import React from "react";

function Planet(props) {

    const { planet, removePlanet } = props;

    return (
        <div className="planet">
            <h2>{planet.name}</h2>
            <p>{planet.radius}</p>

            <button onClick={() => removePlanet(planet.id)}>X</button>
        </div>
    );
}

export default Planet;