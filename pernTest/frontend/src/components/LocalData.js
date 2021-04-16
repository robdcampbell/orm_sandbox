import React, { useEffect, useState } from "react";
import axios from "axios";

const LocalData = () => {
  const [message, setMessage] = useState({});

  const fetchedData = async () => {
    console.log(message);
    const { data } = await axios.get("/api");
    setMessage(data);
    return data;
  };

  useEffect(() => {
    const data = fetchedData();
  }, []);

  return (
    <section>
      <h3>This is where the data goes</h3>
      <h4>Name: {message.name}</h4>
      <p>Message: {message.message}</p>
    </section>
  );
};

export default LocalData;
