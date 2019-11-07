import React from "react";

import Planet from "./Planet"

function Planets(props) {

    const { planets, removePlanet } = props;

    const planetList = () => planets.map(planet => {
        return ( <Planet 
            planet={planet}
            removePlanet={removePlanet}
        /> )
    });

    return (
        <section className="planets">
            { planetList() }
        </section>
    );
}

export default Planets;