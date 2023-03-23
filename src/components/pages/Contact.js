import React, { useState } from 'react';

// Import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  // Create state variables for the fields in the form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorName, setErrorName] = useState(''); // Error message for Name section
  const [errorEmail, setErrorEmail] = useState(''); // Error message for Email section
  const [errorMessage, setErrorMessage] = useState(''); // Error message for Message section
  const [disableButton, setDisableButton] = useState(true); // This is for disabling 'send' button when one of error messages is shown

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, and message
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    };
  };

  const validation = (e) => {
    // Validating the input when input area is out of focus
    const { target } = e; 
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

    // When all validation is satisfied, un-disable the 'send' button
    if (name!=="" && validateEmail(email) && message!=="") {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };


const handleFormSubmit = (e) => { 
  e.preventDefault();
    // Clear out the input after successful submission.
  setName('');
  setEmail('');
  setMessage('');
  };

  return (
    <div className="container my-5">
      <h2>Contact</h2>
      <form className="form">
        <div className="form-group mt-3">
          <label for="inputName">Name</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={validation}
            type="text"
            placeholder="Enter your name"
            className="form-control"
          />
        </div>
        {errorName && (
        <div>
          <p className="error-text text-danger ms-1">{errorName}</p>
        </div>
        )}
        <div className="form-group mt-3">
          <label for="inputEmail">Email</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={validation}
            type="email"
            placeholder="Enter your email"
            className="form-control"
          />
        </div>
        {errorEmail && (
        <div>
          <p className="error-text text-danger ms-1">{errorEmail}</p>
        </div>
        )}
        <div className="form-group mt-3">
          <label for="inputMessage">Message</label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={validation}
            type="text"
            placeholder="Enter your message"
            className="form-control"
          />
        </div>
        {errorMessage && (
        <div>
          <p className="error-text text-danger ms-1">{errorMessage}</p>
        </div>
        )}
        <button type="button" onClick={handleFormSubmit} disabled={disableButton} className="btn btn-primary mt-3">Send</button>
      </form>
    </div>
  );
}
