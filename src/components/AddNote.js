import React,{useContext,useState} from 'react'
import noteContext from "../context/noteContext";
const AddNote = () => {
  const context = useContext(noteContext);
  const {addNote } = context;
  const  [note, setNote] = useState({title:"", description:"",tag:""});
  const handleClick = (e) => {
   e.preventDefault();
    addNote(note.title,note.description,note.tag);


  }
  const onChange=(e)=>{
setNote({...note, [e.target.name]:[e.target.value]})

  }
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input type="text"className="form-control"id="title" name="title"aria-describedby="emailHelp" onChange={onChange}/>

          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="description"
           
            />
            <label className="form-check-label" htmlFor="description">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
