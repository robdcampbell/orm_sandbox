import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listNotes } from "../actions/noteActions";
//testing
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  //testing
  const [noteList, setNoteList] = useState([]);

  //const noteList = useSelector((state) => state.noteList);

  // 1) FETCH NOTES FROM DB
  const fetchedNotes = async () => {
    const { data } = await axios.get("/profile");
    const allInfo = await axios.get("/profile");
    console.log(allInfo);
    setNoteList(data);
    return data;
  };

  // 2) ADD NOTE
  // TEST
  const addNoteTest = (e) => {
    e.preventDefault();
    const dateID = Number(Date.now());
    axios.post("/profile", {
      id: dateID,
      title: "Test Filler Note",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur cupiditate totam eum commodi itaque aliquid neque consequuntur numquam eaque dolorem deserunt saepe quis, repellat laboriosam voluptate sequi aspernatur maiores! Quia, officiis voluptates ut qui odit inventore modi vitae sed totam illum velit tenetur sequi officia sint labore blanditiis sit. ",
    });
    console.log(e.target.textContent);
  };
  // 3) DELETE NOTE FROM DB USING ID
  const deleteNote = (e) => {
    console.log(e.target.parentElement.id);
    const noteId = e.target.parentElement.id;
    axios.delete(`/profile/${noteId}`);
  };

  useEffect(() => {
    fetchedNotes();
  }, []);

  return (
    <main className="profile__page">
      <h1>Current Notes</h1>
      <button onClick={(e) => addNoteTest(e)}>Add Filler Note</button>
      <section className="note__list">
        {noteList.map((note) => (
          <div key={note.id} className="note__card" id={note.id}>
            <h4>
              {note.title} : {note.id}
            </h4>
            <p>{note.description}</p>
            <button onClick={(e) => deleteNote(e)}>X</button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Profile;
