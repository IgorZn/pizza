import React from 'react';

class PizzeriaDetail extends React.Component {
    render() {
        const p = this.props.p
        return(
            <div>
                <h4>{p.id}</h4>
                <h4>{p.pizzeria}</h4>
                <h4>{p.city}</h4>
            </div>
        )
    }
}

export default PizzeriaDetail