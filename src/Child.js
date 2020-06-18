import React from 'react';
import Counter from './Counter.js';

const Child = () => {

 let countervalue = React.useContext(Counter)
    return (
        <div>
            <h1>The First Child of counter</h1>
            <h2> The counter for this Child is: {countervalue[0]}</h2>
            <button onClick={()=> {countervalue[1](++countervalue[0])}}>
                Increament </button>
        </div>
    )
}  
export default Child;