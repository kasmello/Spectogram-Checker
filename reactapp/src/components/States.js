import React from 'react';
import State from './State';


const States = ({states}) => {
    return (
        <>
           {states.map((state) => (<State state={state}/>))}
        </>
    )
}

export default States;