import React, { useState } from 'react';
import ToDo from "./ToDo.jsx"
function App()
{  
    
    
    const[item,updateditem]=useState("");
    const[totalitems,totalupdateditems]=useState([]);
    function inputEvent(event)
    {
      updateditem(event.target.value);
    }
    function listofItems()
    {
     totalupdateditems((allitems)=>{
         return[...allitems,item];
         
     });
    
    updateditem('');
    }
    function deleteitems(id)
    {
        console.log("deleted");
        totalupdateditems((arr)=>{
            return arr.filter((arrelements,index)=>{
                return (index!==id);
            });
        });
   
    }
    

    return(<>
    <div className="card">
    <div className="heading">
    <h1> Todo List</h1>
    </div>
    <div className="two">
    <input type="text" placeholder="Add an item" id="uniqueitem" onChange={inputEvent} value={item} />
    <button onClick={listofItems} id="submit">+</button>
    </div>
     <ul>
    {totalitems.map((val,index)=>{
        
        return(<>
             <ToDo
             item1={val}
             id={index}
             onSelect={deleteitems}
             />
            <br/>
            </>
        );
    })}
     </ul>
    </div>

    </>);
}
export default App;