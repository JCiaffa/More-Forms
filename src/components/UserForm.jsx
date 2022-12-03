import React, { useState } from "react";
import Display from "./Display";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 3) {
      setFirstNameError("First Name must be 2 characters long");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 3) {
      setLastNameError("Last Name must be 2 characters long");
    } else {
      setLastNameError("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 3) {
      setEmailError("Email must be 2 characters long");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 9) {
      setPasswordError("Password must be 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords must match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log(newUser);
  };

  return (
    <div>
      <h1> User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleFirstName}
          />
          {firstNameError ? <p>{firstNameError}</p> : ""}
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleLastName}
          />
          {lastNameError ? <p>{lastNameError}</p> : ""}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmail}
          />
          {emailError ? <p>{emailError}</p> : ""}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          {passwordError ? <p>{passwordError}</p> : ""}
          {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
        </div>
        <input type="submit" value="Create User" />
      </form>
      <Display
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
      />
    </div>
  );
};

export default UserForm;
