
import noteContext from "./noteContext";
import { useState } from "react";
const NoteState =(props)=>{

    const host = "http://localjost:5000"
const notesInitial = [
{

"_id":"61322f195533781rea8cad0e0651",
"user":"6131dc5e3e40637djh4734a068",
"title":"My title",
"description":"please wake up early",
"tag":"personal",
},
{

    "_id":"6133er22f19553781a8cad0e0652",
    "user":"6131dc5e3e406sd37dc4734a068",
    "title":"My title",
    "description":"please wake up early",
    "tag":"personal",
    },
    {

        "_id":"613322trf19553781a8cad0e0653",
        "user":"6131dc5e3hge40637dc4734a068",
        "title":"My title",
        "description":"please wake up early",
        "tag":"personal",
        }
,
{

    "_id":"613223f19553e781a8cad0e0654",
    "user":"6131dfdc5e3e40637dc4734a068",
    "title":"My title",
    "description":"please wake up early",
    "tag":"personal",
    }
,
{

    "_id":"61rt1322f19553781a8cad0e0655",
    "user":"6131dc5e3gfe40637dc4734a068",
    "title":"My title",
    "description":"please wake up early",
    "tag":"personal",
    },
    {

        "_id":"613sa22f139553781a8cad0e0656",
        "user":"6131dc5safe3e40637dc4734a068",
        "title":"My title",
        "description":"please wake up early",
        "tag":"personal",
        }
,
{

    "_id":"61322f195543781a8cad0e0657",
    "user":"6131dc5e3eaw40637dc4ds734a068",
    "title":"My title",
    "description":"please wake up early",
    "tag":"personal",
    },
    {

        "_id":"61322f19353453781a8cad0e0658",
        "user":"6131dc5e3e40637dc4d7ds34a068",
        "title":"My title",
        "description":"please wake up early",
        "tag":"personal",
        }
    



]









//     const S1 = {
//         "name":  "aakash" ,
//         "class": "5b"
//     }
//     const [state, setstate] = useState(S1);
//    const  update=()=>{
//         setTimeout(() => {
//             setstate({
//                 "name":"Larry",
//                 "class":"10b",
//             })
            
//         },1000); //{state, update}
//     }


const [notes, setNotes] = useState(notesInitial);

//add a note
const addNote=(title,description,tag)=>{
//todo api
console.log("adding a new note")
    const note={
        "_id":"61322f193553781a8cad0e0658",
        "user":"6131dc5e3e40637dc4d7ds34a068",
        "title":title,
        "description":description,
        "tag":tag
    };
    setNotes(notes.concat(note))
}


//delete a note
const deleteNote=(id)=>{
console.log("deleting the note with id" + id);
const newNotes = notes.filter((note)=>{return note._id!==id})
setNotes( newNotes)
}

//edit a note
// s
  //api call
  

//logic to edit in client{
// ss












return(
<noteContext.Provider value={{notes,addNote,deleteNote}}>
    {props.children}
</noteContext.Provider>


    )
}

export default NoteState;
