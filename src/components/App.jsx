import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Recycle from "./Recylcle/Recylce";

function App() {
  const [noteArray, setNoteArray] = useState([]);
  const [rec, setRec] = useState([]);

  function addArray(newNote) {
    setNoteArray((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNote(id) {
    setNoteArray((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        if (index === id) {
          setRec((prev) => {
            return [...prev, noteItem];    
          });
        }
        return index !== id;
      });
    });
  }
  function recover(id){
    setRec((prevRec) => {
      return prevRec.filter((noteItem, index) => {
        if (index === id) {
          setNoteArray((prev) => {
            return [...prev, noteItem];    
          });
        }
        return index !== id;
      });
    });
   console.log(id);
  }
  function clearRecycleBin(){
    setRec([]);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addArray} />
      {noteArray.map((item, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Recycle rec={rec} restore={recover} deleteAllContent={clearRecycleBin} />
      <Footer />
    </div>
  );
}

export default App;
