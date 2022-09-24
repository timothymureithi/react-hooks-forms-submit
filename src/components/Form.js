import React, { useState } from "react";


function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  
  const [errors, setErrors] = useState([]);

  //handleSubmit
  function handleSubmit(event){
    event.preventDefault();
    if (firstName.length > 0){
    const formData = {
      firstName: firstName,
      lastName: lastName,
    };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
  //  props.sendFormDataSomewhere(formData);
   setFirstName("");
    setLastName("");
    setErrors([]);
  }else{
    setErrors(["First Name Is Required!"]);
  }
  }

  const listOfSubmissions = submittedData.map((data, index) =>{
    return (
      <div key={data}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0 
    ? errors.map((error, index) =>(
      <p key={index} style={{ color: "red"}}> {error} </p>
    )) : null}
    <h3>Submissions</h3>
    {listOfSubmissions}
    </div>
  );
}

export default Form;
