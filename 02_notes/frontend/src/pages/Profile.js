import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listNotes } from "../actions/noteActions";
//testing
import axios from "axios";

const Profile = () => {
  const dipatch = useDispatch();
  //testing
  const [noteList, setNoteList] = useState([]);

  const notesList = useSelector((state) => state.noteList);

  const fetchedNotes = async () => {
    const { data } = await axios.get("/profile");
    setNoteList(data);
    return data;
  };

  useEffect(() => {
    fetchedNotes();
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>{JSON.stringify(noteList)}</p>
    </div>
  );
};

export default Profile;
