import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listNotes } from "../actions/noteActions";
//testing
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  //testing
  const [noteList, setNoteList] = useState([]);

  const noteTitle = useRef();
  const noteDescription = useRef();

  //const noteList = useSelector((state) => state.noteList);

  // 1) FETCH NOTES FROM DB
  const fetchedNotes = async () => {
    const { data } = await axios.get("/profile");
    setNoteList(data);
    return data;
  };

  // 2) ADD NOTE
  // TEST
  const addNoteTest = async (e) => {
    e.preventDefault();

    const dateID = Number(Date.now());
    await axios.post("/profile", {
      id: dateID,
      title: noteTitle.current.value,
      description: noteDescription.current.value,
    });
    noteTitle.current.value = "";
    noteDescription.current.value = "";
    // await fetchedNotes();
  };
  // 3) DELETE NOTE FROM DB USING ID
  const deleteNote = (e) => {
    const noteId = e.target.parentElement.id;
    axios.delete(`/profile/${noteId}`);
    // fetchedNotes();
  };

  useEffect(() => {
    fetchedNotes();
  }, [deleteNote, addNoteTest]);

  return (
    <main className="profile__page">
      <h1>Current Notes</h1>
      {/* <button onClick={(e) => addNoteTest(e)}>Add Filler Note</button> */}
      <form action="">
        <input ref={noteTitle} type="text" placeholder="Title" />
        <input ref={noteDescription} type="text" placeholder="Description" />
        <button onClick={(e) => addNoteTest(e)}>Add Note</button>
      </form>

      <section className="note__list">
        {noteList.map((note) => (
          <div key={note.id} className="note__card" id={note.id}>
            <h4>
              {note.title} : {note.id}
            </h4>
            <p>{note.description}</p>
            <button onClick={(e) => deleteNote(e)}>delete note</button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Profile;
