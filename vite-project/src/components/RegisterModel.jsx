// LoginModal.js
import React, { useState } from "react";
import "./RegisterModel.css"; // Optional: Add styles for the modal
import Vector from "../assets/Vector.jpg";
import axios from "axios";

const RegisterModal = ({ isOpen, onClose }) => {
  if (isOpen === false) return null; // Don't render if modal is not open
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Updated handleSubmit function to take 'event' as a parameter
  const handleSubmit = async (event) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(name);
    console.log(password);

    try {
      const response = await axios.post(
        "https://final-deploy-1.onrender.com/api/user/register",
        {
          name,
          password,
        }
      );
      console.log(response.data); // You can handle the response as needed
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <img
          onClick={onClose}
          className="vector"
          src={Vector}
          alt="Description of the image"
        />
        <h2>Register</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          
          {/* Updated form to use onSubmit */}
          <div className="email-container">
            <label className="email">Username:</label>
            <input
              value={name}
              required
              placeholder="Enter the username"
              onChange={(e) => setUserName(e.target.value)} // Fixed function name (SetUserName -> setUserName)
            />
          </div>
          <div className="email-container">
            <label className="password">Password:</label>
            <input
              type="password"
              required
              placeholder="Enter the password"
              onChange={(e) => setPassword(e.target.value)} // Fixed function name (SetPassword -> setPassword)
            />
          </div>
          <button
            className="register"
            type="submit"
            
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
