import React from 'react';
import PizzaUpdate from "./pizzeriaupdate";
import axios from "axios";

console.log(process.env.REACT_APP_USER)
console.log(process.env.REACT_APP_PWD)

class PizzeriaDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            auth: {
                username: process.env.REACT_APP_USER,
                password: process.env.REACT_APP_PWD
            }
        };
        this.updatePizzeriaDetails = this.updatePizzeriaDetails.bind(this);
        this.deletePizzeria = this.deletePizzeria.bind(this);
    }

    updatePizzeriaDetails() {
        this.setState({showComponent: true});
    }

    deletePizzeria(p) {
        console.log(p)
        axios.delete( p.url, {auth: this.state.auth})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        /*
        *  pizzariaDetail - это просто ключ аргумента, который мы передаем в 'PizzeriaDetail'
        *  pizzariaDetail={this.state.pizzeria}
        * */

        const p = this.props.pizzariaDetail
        return (
            <div style={{color: "yellow", border: "1px solid yellow"}}>
                <h4 key={p.id}>{p.pizzeria_name}</h4>
                <h5> Address: {p.street} {p.city} {p.state} {p.zip_code} </h5>
                <h6> Phone: {p.phone_number} </h6>
                <p>{p.description}</p>

                <button
                    style={{backgroundColor: "white"}}
                    onClick={() => this.updatePizzeriaDetails()}>
                    Update
                </button>
                {this.state.showComponent ? <PizzaUpdate pizzariaUpdate={p} auth={this.state.auth}/> : null}

                <button
                    style={{backgroundColor: "white"}}
                    onClick={() => this.deletePizzeria(p)}>
                    Delete
                </button>
            </div>
        )
    };
}

export default PizzeriaDetail