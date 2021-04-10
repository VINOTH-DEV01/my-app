import React, { useState,useEffect } from 'react';

function Contact() {
  const [count, setCount] = useState(0);
  const [userdetails, setUserdetails] = useState("vinoth kumar V");

  useEffect(() => {
    // alert("new");
    return console.log("component will unmount!");
  }, [userdetails]);
  
  
  // like class component inbuild lifecycle merthode // 

  return (
    <div>
      <h2>Contact</h2>
      <p>Your value initailly <h1>{userdetails}</h1> </p>
      <button onClick={() => setUserdetails("Varun K")}>
        Click me
      </button>
      {userdetails}
    </div>
  );

}
      

 export default Contact;
