import React from 'react';
import Reducer from './Reducer';
const Child2 = ()=> {

    let [state,dispatch] = React.useReducer(Reducer,1);
    return (
        <div>
<h1> This is the second child produced through reducer </h1>
<h2>the velu of the second child is :{state}</h2> 

<br></br>
<button onClick={()=> dispatch('INCREMENT')}> increment on push</button>
   </div>
    );

}
    export default Child2