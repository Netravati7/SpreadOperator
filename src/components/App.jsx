import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fname} {contact.lname}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fname"
          onChange={handleChange}
          placeholder="FirstName"
          value={contact.fname}
        />
        <input
          name="lname"
          onChange={handleChange}
          placeholder="LastName"
          value={contact.lname}
        />

        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
