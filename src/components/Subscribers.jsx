import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const Subscribers = () => {
  const [subscribersArray, setSubscribersArray] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log("SUBSCRIBERS:")
    console.log(subscribersArray)
  }, [subscribersArray]);

  const fetchUsers = async () => {
    try {
      //The Supabase fetch returns a promise, therefore the async/await
      const { data, error } = await supabase
        .from("subscribers")
        .select("*")
        .limit(10);
      if (error) throw error;
      if (data) {
        setSubscribersArray(data);
        
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <h1>Subscribers List</h1>
      {subscribersArray && <ul>{subscribersArray.map((subscriber) => {
        { <li>Name: {subscriber.name}</li> }
      })}</ul>}
    </>
  );
};

export default Subscribers;
