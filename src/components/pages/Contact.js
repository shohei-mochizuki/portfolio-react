import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e; // <==> const target = e.target
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    };
  };

  const validation = (e) => {
    const { target } = e; // <==> const target = e.target
    const inputType = target.name;

    if (inputType === 'name'){
      if (!name) {
        setErrorName('Name is required');
      } else {
        setErrorName('');
      }
    } else if (inputType === 'email') {
        if (!validateEmail(email)) {
          setErrorEmail('Email is invalid');
        } else {
          setErrorEmail('');
        }
    } else {
      if (!message) {
        setErrorMessage('Message is required');
      } else {
        setErrorMessage('');
      }
    }

    if (name!=="" && validateEmail(email) && message!=="") {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };


const handleFormSubmit = (e) => { 
  e.preventDefault();
    // If everything goes according to plan, we want to clear out the input after a successful registration.
  setName('');
  setEmail('');
  setMessage('');
  };

  return (
    <div>
      <h2>Contact</h2>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={validation}
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={validation}
          type="email"
          placeholder="Enter your email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={validation}
          type="text"
          placeholder="Enter your message"
        />
        <button type="button" onClick={handleFormSubmit} disabled={disableButton}>Send</button>
      </form>
      {errorName && (
        <div>
          <p className="error-text">{errorName}</p>
        </div>
      )}
      {errorEmail && (
        <div>
          <p className="error-text">{errorEmail}</p>
        </div>
      )}
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
