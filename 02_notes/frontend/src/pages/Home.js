import React, { useState, useEffect } from "react";
import AddNote from "../components/AddNoteModal";

const Home = ({ history }) => {
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  // Add redirect to login if no user logged in ***

  useEffect(() => {
    !loggedIn && history.push("/login");
  }, []);

  return (
    <main className="profile__page">
      <h1>Notes.</h1>
      <button onClick={(e) => setShowModal(!showModal)}>+ Add Note</button>
      <aside className="modal__container">
        {showModal && (
          <AddNote showModal={showModal} setShowModal={setShowModal} />
        )}
      </aside>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
        explicabo! Facilis vitae maxime a voluptas doloremque iste excepturi
        porro unde eos culpa quia adipisci, sunt quaerat dolor quasi illo quod
        cumque saepe earum illum. Sit sunt, aliquam exercitationem corporis
        natus voluptas, consequuntur cupiditate, impedit possimus quam dolorem
        libero? Corrupti, temporibus?
      </p>
    </main>
  );
};

export default Home;
