import React from 'react';
import DummyData from './dummydata.json'
import PizzaDetail from './pizzeriadetail'

class Pizzalist extends React.Component {
    render() {
        return (
            <div>
                {DummyData.map(item => {
                    return <PizzaDetail p={item}/>
                    })
                }
            </div>
        )
    }
}

export default Pizzalist