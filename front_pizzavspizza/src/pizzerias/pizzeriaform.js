import React from "react";
import axios from "axios";


class PizzaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzeria_name: "",
            street: "",
            city: "",
            state: "",
            zip_code: "",
            website: "",
            phone_number: "",
            description: "",
            email: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()

        console.log('handleSubmit>>>', this.state.pizzeria_name);
        axios
            .post("http://127.0.0.1:8000/api/v1/", this.state)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    render() {
        const {
            pizzeria_name,
            street,
            city,
            state,
            zip_code,
            website,
            phone_number,
            description,
            email,
        } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    Pizzeria
                    <input
                        type="text"
                        name="pizzeria_name"
                        value={pizzeria_name}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Street
                    <input
                        type="text"
                        name="street"
                        value={street}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    City
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    State
                    <input
                        type="text"
                        name="state"
                        value={state}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Zip Code
                    <input
                        type="text"
                        name="zip_code"
                        value={zip_code}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Website
                    <input
                        type="text"
                        name="website"
                        value={website}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Phone Number
                    <input
                        type="text"
                        name="phone_number"
                        value={phone_number}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Description
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Email
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </div>


                <input type="submit" value="Submit"/>
            </form>
        )
    }

}

export default PizzaForm;