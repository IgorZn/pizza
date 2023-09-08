import React from 'react';

class PizzeriaDetail extends React.Component {
    render() {
        const p = this.props.pizzariaDetail
        console.log('this.props.p', p)
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