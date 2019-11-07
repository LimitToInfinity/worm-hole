import React, { Component } from 'react';
import './App.css';

import Planets from './Planets';
import NewPlanet from './NewPlanet';

class App extends Component {

  state = {
    planets: [],
  }

  planetsURL = "http://localhost:3000/planets";

  componentDidMount() {
    fetch(this.planetsURL)
      .then(response => response.json())
      .then(planets => this.setState({ planets }));
  }

  addPlanet = (planet) => {
    const { planets } = this.state;
    this.setState({ planets: [...planets, planet] });
  }

  removePlanet = (planetId) => {
    const { planets } = this.state;

    const newPlanets = planets.filter(planet => planet.id != planetId)

    this.setState({ planets: newPlanets })

    fetch(`${this.planetsURL}/${planetId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  render() {
    const { planets } = this.state;

    return (
      <div className="App">
        <h1>Planets yay!</h1>
        <NewPlanet addPlanet={this.addPlanet} />
        <Planets
          planets={planets}
          removePlanet={this.removePlanet}
        />
      </div>
    );
  }
}

export default App;
