import React from 'react';


const State = ({ state }) => {
    return (
        <div className = 'task'>
           <h4>{ state.color }</h4>
           <p>Bruh this is ID {state.id}</p>
        </div>
    )
}

export default State;