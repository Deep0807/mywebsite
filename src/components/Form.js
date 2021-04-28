import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [age, setAge] = useState();
  const [email, setemail] = useState({ emailid: '' });
  const [phone, setphonenumber] = useState();

  return (
    <>
      <div className="form-heading">
        <h1>Get Detail</h1>
      </div>
      <div className="form-wrapper">
        <form>
          <div className="inner-container">
            <input
              type="text"
              placeholder="First Name"
              value={name.firstName}
              onChange={(e) => setName({ ...name, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last name"
              value={name.lastName}
              onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />
            <input
              type="number"
              placeholder="enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="text"
              placeholder="enter mail id"
              value={email.setemailid}
              onChange={(e) => setemail({ ...email, emailid: e.target.value })}
            ></input>
            <input
              type="number"
              placeholder="enter phone number"
              value={phone}
              onChange={(e) => setphonenumber(e.target.value)}
            ></input>
            <button
              onClick={() => {
                alert.show('we will get back to you');
              }}
            >
              Get Detail
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
