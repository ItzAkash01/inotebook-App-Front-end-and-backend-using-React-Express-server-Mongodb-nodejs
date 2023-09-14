
import noteContext from "./noteContext";
import { useState } from "react";
const NoteState =(props)=>{

const notesInitial = [
{

"_id":"61322f19553781a8cad0e065",
"user":"6131dc5e3e40637dc4734a068",
"title":"My title",
"description":"please wake up early",
"tag":"personal",
},
{

    "_id":"61322f19553781a8cad0e065",
    "user":"6131dc5e3e40637dc4734a068",
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
return(
<noteContext.Provider value={{notes}}>
    {props.children}
</noteContext.Provider>


    )
}

export default NoteState;
