import { useState, useEffect } from 'react';
import './App.css';
import EventForm from './components/EventForm';
import ShowEvents from './components/showEvents';
import Header from './components/Header';
import imge from './1.png'

function App() {
  const [note, setNote] = useState([]);

  useEffect(() => {
    const storedNote = localStorage.getItem('noteData');
    if (storedNote) {
      setNote(JSON.parse(storedNote));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('noteData', JSON.stringify(note));
  }, [note]);

  function call(events) {
    setNote(prev => [...prev, events]);
  }

  
  function deleteNoteById(id) {
    const filtered = note.filter((item, index) => index !== id);
    setNote(filtered);
    localStorage.setItem('noteData', JSON.stringify(filtered));
  }
  useEffect(() => {
    if (note.length === 0) {
      localStorage.removeItem('noteData');
    }
  }, [note]);

  return (
    <div>
      <Header />
      <EventForm call={call} />
      <div className='contii'>
        {note.map((val, index)=>{
        return <ShowEvents key={index} id={index} deleteNote={deleteNoteById} event={val.event} sdate={val.sdate} edate={val.edate} days={val.days} />
      })}
      </div>
     
    </div>
  );
}

export default App;


