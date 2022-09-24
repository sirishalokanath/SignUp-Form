import React, { useState } from "react";
import "./styles.css";

const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, mail, phone, password, confirmPassword } = data;

  const [message, setMessage] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const changeHandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let eregx = /^([a-zA-Z0-9_.]+)([@])([a-z]+)[.]([a-z]{2,3})/;
  let pregx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  const validation = (e) => {
    e.preventDefault();
    let errors = {};
    setMessage(errors);
    if (
      firstName === "" ||
      mail === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      errors.firstName = "First name is required";
      errors.mail = "Email is required";
      errors.password = "Password is required";
      errors.confirmPassword = "Confirm Password is required";
      return false;
    }
    if (firstName.length < 8) {
      errors.firstName = "First name should be atleast 8 characters";
      return false;
    }
    if (!eregx.test(mail)) {
      errors.mail = "Email is invalid";
      return false;
    }
    if (!pregx.test(password)) {
      errors.password = "Password is invalid";
      return false;
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Password not matching";
      return false;
    } else return errors;
  };

  return (
    <div className="login">
      <h3>SignUp</h3>
      <form onSubmit={validation}>
        <p>FirstName</p>
        <p className="message">{message.firstName}</p>
        <input
          id="firstName"
          type="text"
          placeholder="FirstName"
          name="firstName"
          value={firstName}
          onChange={changeHandle}
        />
        <p>LastName </p>
        <input
          id="lastName"
          type="text"
          placeholder="LastName"
          name="lastName"
          value={lastName}
          onChange={changeHandle}
        />
        <p>Email </p>
        <p className="message">{message.mail}</p>
        <input
          id="mail"
          type="text"
          placeholder="Email"
          name="mail"
          value={mail}
          onChange={changeHandle}
        />
        <p>Phone </p>
        <span id="Messagephone"></span>
        <input
          id="phone"
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={changeHandle}
        />
        <p>Password </p>
        <p className="message">{message.password}</p>
        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={changeHandle}
        />
        <p>Confirm Password </p>
        <p className="message">{message.confirmPassword}</p>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={changeHandle}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Form;
