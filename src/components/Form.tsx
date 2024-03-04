import { useState } from "react";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  //   Create a handle submit function which basically console.log the states as one line

  return (
    <div>
      <form action="">
        {/* update each state everytime the user enters a keystroke */}
        <input type="text" value={name} />
        <input type="email" value={email} />
        <textarea value={message}></textarea>
        {/* 1. Submitting the form (console log the values from the state*/}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
