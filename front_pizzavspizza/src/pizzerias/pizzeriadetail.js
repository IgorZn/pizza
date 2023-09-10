import React from 'react';

class PizzeriaDetail extends React.Component {
    render() {
        /*
        *  pizzariaDetail - это просто ключ аргумента, который мы передаем в 'PizzeriaDetail'
        *  pizzariaDetail={this.state.pizzeria}
        * */
        const p = this.props.pizzariaDetail
        return(
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4 key={p.id}>{p.pizzeria_name}</h4>
                <h5> Address: {p.street} {p.city} {p.state} {p.zip_code} </h5>
                <h6> Phone: {p.phone_number} </h6>
                <p>{p.description}</p>
            </div>
        )
    }
}

export default PizzeriaDetail