import React from 'react';
import imge from '../1.png'

function showEvents(props){
    function handleDelete() {
        const id=props.id;
        console.log(id);
        props.deleteNote(id);
      }
return <div className='conti'>
    <img src={imge} />
    <div className="box">
        <div className='title'>{props.event}</div>
        <div className='date'>From - {props.sdate}</div>
        <div className='date'>To - {props.edate}</div>
        <div className='check'>Events On : </div>
        <div className="dap">
        {props.days.map((val)=>{
       return <div>{val}</div>;
      })}
        </div>
      <button className="button-1" role="button" onClick={handleDelete}>Delete</button>
    </div>
</div>
}

export default showEvents;