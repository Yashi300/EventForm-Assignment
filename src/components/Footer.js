import React from 'react';

function showEvents(props){
    function handleDelete() {
        const id=props.id;
        console.log(id);
        props.deleteNote(id);
      }
return <div>
    <div className="box">
        <div>{props.event}</div>
        <div>{props.sdate}</div>
        <div>{props.edate}</div>
        {props.days.map((val)=>{
       return <div>{val}</div>;
      })}
      <button onClick={handleDelete}>Delete</button>
    </div>
</div>
}

export default showEvents;