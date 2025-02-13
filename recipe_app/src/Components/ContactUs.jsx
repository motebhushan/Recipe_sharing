import React from "react";
import "./Component.css";
import Navbar from "./Navbar";
function ContactUs() {
  return (
    <>
    <Navbar/>
    <div className="contact-container">
    <h1>Contact Us</h1>
    <p>Feel free to reach out to us!</p>

    <div className="contact-details">
      <p><strong>Name:</strong> Bhushan Mote</p>
      <p><strong>Phone:</strong> 80203932434</p>
      <p><strong>Email:</strong> bhushan.mote@example.com</p>
      <p><strong>Address:</strong> Pune, Maharashtra, India</p>
    </div>
  </div></>
  );
}

export default ContactUs;
