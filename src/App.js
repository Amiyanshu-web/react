import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {


   const [info,setInfo]=useState(data);
   const remove=()=>{
     setInfo([]);

   }

  return <>
  <section className="container">
    <h3>{info.length} Birthday Today</h3>
    <List info={info}/>
    <button onClick={remove}>Clear All</button>
  </section>
  </>

}




export default App;
