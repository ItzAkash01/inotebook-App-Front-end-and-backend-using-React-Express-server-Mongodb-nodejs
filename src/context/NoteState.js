
import noteContext from "./noteContext";
import { useState } from "react";
const NoteState =(props)=>{
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
return(
<noteContext.Provider value={{}}>
    {props.children}
</noteContext.Provider>


    )
}

export default NoteState;
