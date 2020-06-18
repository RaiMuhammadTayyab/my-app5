import React,{useState} from 'react';
import Parent from './Parent.js';
import './App.css';
import Counter from './Counter.js';

function App() {

  let countstate= useState(1)

  return (
      <Counter.Provider value={countstate}>
    <div>
     
      <Parent/>  
    
    </div> 
    
    </Counter.Provider>

  );
}

export default App;
