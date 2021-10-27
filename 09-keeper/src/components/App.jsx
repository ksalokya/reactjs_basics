import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

    const [notes,setNotes] = useState([]);

    function addNote(note){
        setNotes(prevState => {
           return  [...prevState,note];
        });
    }

    function deleteItem(id){
        setNotes(prevState => {
            return prevState.filter((item,index)=>{
                return index !== id;
            });
        })
    }

  return (
    <div>
      <Header />
      <CreateArea
          onAdd={addNote}
      />
        {notes.map((noteItem,index) => (
            <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={deleteItem}
            />
        ))}
      <Footer/>
    </div>
  );
}

export default App;
