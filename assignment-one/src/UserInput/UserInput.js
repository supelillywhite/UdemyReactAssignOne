import React from 'react';
import "./UserInput.css";

const userinput = (props) => {
  return <div className="inputDiv">
      <h2>Please enter your username</h2>
      <input 
      type="text" 
      className="userinput"
      onChange={props.changed}
      value={props.currentUserName}/>
    </div>
};

export default userinput;