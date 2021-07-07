import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateData(event){
const {name,value} = event.target;
    setContact( (prevValue) =>{
        return {
         ...prevValue,
          [name]:value  // takes name as key and will add fname,lname etc value in hooks we careted, new ES6 feature
        }
    });

  }



  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={updateData} value={contact.fName} />
        <input name="lName" placeholder="Last Name" onChange={updateData} value={contact.lName}/>
        <input name="email" placeholder="Email" onChange={updateData} value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
