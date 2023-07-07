import { useState } from "react";

function Todo(){
    const [activity,setActivity]=useState("");
    const [listdata,setListdata]=useState([]);
    function handleClick(){
          setListdata((listdata)=>{
            const updatedList=[...listdata,activity]
            console.log(updatedList)
            setActivity("");
            return updatedList;
          })
    }
    function removeActivity(i){
       const updatedListdata=listdata.filter((elem,id)=>{
          return i!==id;
       })
       setListdata(updatedListdata);
    }
    function clearall(){
       setListdata([]);
    }
         return(
            <>
            <div className="container">
               <div className="Header">To Do List</div>
               <input type="text" value={activity} onChange={(e)=>setActivity(e.target.value)} />
               <button onClick={handleClick}>Add</button>
               <p>Here is your list!</p>
               {listdata!==[] && listdata.map((data,i)=>{
                   return(
                    <>
                       <p key={i}>
                           <h2>{data}</h2><button onClick={()=>removeActivity(i)}>X</button>
                       </p>
                    </>
                   )
               })}
               {listdata.length>=1 && <button onClick={clearall}>Delete all</button>}
            </div>
          </>
         )
}
export default Todo;