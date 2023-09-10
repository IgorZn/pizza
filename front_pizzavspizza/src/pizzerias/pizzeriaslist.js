import React from 'react';
import PizzaDetail from './pizzeriadetail'
import axios from 'axios'
import PizzaForm from "./pizzeriaform";

const HOST_API = 'http://127.0.0.1:8000/api/v1/'

class Pizzalist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzeriasData: [],
            pizzeria: " ",
            showComponent: false,
        };
        this.getPizzaDetail = this.getPizzaDetail.bind(this);
        this.showPizzeriaDetails = this.showPizzeriaDetails.bind(this);
    }

    componentDidMount() {
        axios.get(HOST_API)
            .then(data => {
                this.setState({pizzeriasData: data.data})
                console.log(data.data)
            })
    }

    getPizzaDetail(url) {
        axios.get(url)
            .then(res => {
                this.setState({pizzeria: res.data})
            })
            .catch(err => console.log('getPizzaDetail__err>>>',err))
    }

    showPizzeriaDetails(url) {
        this.getPizzaDetail(url)
        this.setState({showComponent: true})
    }

    render() {
        return (
            <div>
                {this.state.pizzeriasData.map((item) => {
                    return (
                        <h3 key={item.id} onClick={() => this.showPizzeriaDetails(item.url)}>
                            {item.pizzeria_name}, {item.city}
                        </h3>
                    )
                })}
                {this.state.showComponent ? (
                    <PizzaDetail pizzariaDetail={this.state.pizzeria}/>
                ) : null}
                <PizzaForm/>
            </div>
        )
    }
}

export default Pizzalist