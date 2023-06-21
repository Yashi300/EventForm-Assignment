import React, { useState} from 'react';

function EventForm(props){
  const [item, setItem]=useState({
     event:"",
     sdate:"",
     edate:"",
     days:[]
  })

  function run(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name !== "Days") {
      setItem((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    } else {
      if (item.days.includes(value)) {
        setItem((prev) => {
          return {
            ...prev,
            days: prev.days.filter((day) => day !== value),
          };
        });
      } else {
        setItem((prev) => {
          return {
            ...prev,
            days: [...prev.days, value],
          };
        });
      }
    }
  }
  
function submit(event){
   props.call(item);
   event.preventDefault();
   setItem({
    event:"",
     sdate:"",
     edate:"",
     days:[]
   })  
   const selectedOptions = document.querySelectorAll('option');
   selectedOptions.forEach(option => option.classList.remove("alter"));   
}
function added(e){
// console.log(e.target.value);
const name = e.target.value;
// console.log(name);
const ele=document.getElementById(name);
ele.classList.toggle("alter");
}
    return <div className='event'>
        <form>
          <div className="boxi">
            <label htmlFor="sdate">Enter the event : </label>
            <input type="text" name="event" id="event" onChange={run} value={item.event} placeholder='Enter Your event'/>
          </div>
            <div className="boxi">
            <label htmlFor="sdate">Enter start date : </label>
            <input type="date" name="sdate" id="sdate" onChange={run} value={item.sdate}  placeholder='Enter Start date'/>
            </div>
            <div className="boxi">
            <label htmlFor="sdate">Enter etart date : </label>
            <input type="date" name="edate" id="edate" onChange={run} value={item.edate} placeholder='Enter End date'/>
            </div>
            <label htmlFor="sel">Days</label>
            <select name="Days" id='sel' onChange={run} multiple>
                <option name="Days" value="Monday" id='Monday' onClick={added} >Monday</option>
                <option name="days" value="Tuesday" id='Tuesday' onClick={added}  >Tuesday</option>
                <option name="days" value="Wednesday" id='Wednesday' onClick={added}  >Wednesday</option>
                <option name="days" value="Thursday" id='Thursday' onClick={added}  >Thursday</option>
                <option name="days" value="Friday" id='Friday' onClick={added}  >Friday</option>
                <option name="days" value="Saturday" id='Saturday' onClick={added}  >Saturday</option>
                <option name="days" value="Sunday" id='Sunday' onClick={added}  >Sunday</option>
            </select>
            <button type="submit" class="button-11" role="button" onClick={submit}>Add Event</button>
        </form>
        
    </div>
}

export default EventForm;