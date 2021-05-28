import React from "react";
function ToDo(props)
{
    
return(<>
<button onClick={()=>{props.onSelect(props.id)}} className="cross">x</button> 
{props.item1}
</>);
}
export default ToDo;