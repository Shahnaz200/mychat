// import React, { useState } from "react";


// function Profile() {
//   const [img, setImg] = useState();

//   const onImageChange = (e) => {
//     const [file] = e.target.files;
//     setImg(URL.createObjectURL(file));
//   };

//   return (

//     <form>
//     <div>
//       <input type="file" onChange={onImageChange} />
//       <img style={{width:"200px", height:"200px", borderRadius:"50%", border:"solid 3px"}} src={img} alt="" />
//     <div> 
//     <input type={"text"}/>
//     </div>
//     </div>
// </form>

//   );
//  }

import {useState} from 'react';

const Profile = () => {
  const [img, setImg] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); 

    //  access input values here
    console.log('firstName ', firstName);
    console.log('lastName ', lastName);

    //  clear all input values in the form
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
          <form>
    <div>
      <input type="file" onChange={onImageChange} />
      <img style={{width:"200px", height:"200px", borderRadius:"50%", border:"solid 3px"}} src={img} alt="" />
    </div>
</form>
      <form onSubmit={handleSubmit}>
        <input
          id="first_name"
          name="first_name"
          type="text"
          onChange={event => setFirstName(event.target.value)}
          value={firstName}
        />
        <input
          id="last_name"
          name="last_name"
          type="text"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />

        <p>{firstName} , {lastName}</p>
      </form>
    </div>
  );
};


export default Profile;
