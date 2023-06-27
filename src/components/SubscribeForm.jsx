import { supabase } from "../supabaseClient";
import SignUpButton from "./SignUpButton";
import { useState } from "react";


const SubscribeForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const nameIsValid = () => {
    const nameREGEX = /^[a-z ,.'-]{2,}$/i;
    const nameResult = nameREGEX.test(firstName)
    const lastNameResult = nameREGEX.test(lastName)
    return nameResult && lastNameResult
  };

  const emailIsValid = () => {
    const emailREGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const emailResult = emailREGEX.test(email);
    return emailResult
  };
  const addSubscriber = async () => {
    if (nameIsValid() && emailIsValid()) {
      try {
        const { data, error } = await supabase
          .from("subscribers")
          .insert({
            name: firstName,
            lastname: lastName,
            email: email,
          })
          .single();
        if (error) throw error;
        alert("Thank you for subscribing to Ging House!");
      
        // window.location.reload();
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Invalid Name/Lastname or e-mail!")
    }
      setFirstName("");
      setLastName("");
      setEmail("");
  };

  return (
    <>
      <div className=" mx-20 mb-10 mt-10 drop-shadow-lg bg-zinc-400">
        <h2 className="pt-6 tracking-wider text-center font-serif text-4xl font-thin text-white ">
          Subscribe
        </h2>
        <p className="text-center tracking-wider mb-10 text-zinc-400">
          Sign up to receive news and updates.{" "}
        </p>
        <form className="text-center md:flex md:justify-center mx-5">
          <div className="sm:flex gap-5 md:px-5">
            <input
              className="md:w-auto w-72 mb-4 shadow appearance-none border w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="md:w-auto w-72 mb-4 shadow appearance-none border w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="sm:flex justify-center">
            <input
              className="md:w-auto w-72 mb-4 shadow appearance-none border w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>
        <div className="text-center pt-4">
          <SignUpButton onButtonClicked={addSubscriber} />
        </div>
        <p className="font-thin text-center text-sm text-white mt-5 pb-6">
          We respect your privacy.
        </p>
      </div>
    </>
  );
};

export default SubscribeForm;
