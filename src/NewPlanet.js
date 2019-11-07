import React, { Component } from "react";

class NewPlanet extends Component {

    state = {
        name: "",
        radius: "",
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { name, radius } = this.state;
        const { addPlanet } = this.props;

        const planetsPostURL = "http://localhost:3000/planets"
        const headers = {"Content-Type": "application/json"}
        const newPlanet = { planet: { name, radius } }

        fetch(planetsPostURL, {
            method: "POST",
            headers,
            body: JSON.stringify(newPlanet)
        })
            .then(response => response.json())
            .then(addPlanet)

        this.setState({ name: "", radius: "" })
    }

    render() {

        const { name, radius } = this.state;

        return (
            <form className="new-planet" onSubmit={this.handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <input
                    name="radius"
                    type="number"
                    placeholder="radius"
                    value={radius}
                    onChange={this.handleChange}
                />

                <input
                    type="submit"
                    value="New Planet"
                />
            </form>
        );
    }
}

export default NewPlanet;