import React from "react";
import "./Component.css";
import Navbar from "./Navbar";

function AboutUs() {
  return (
    <>
     <Navbar/>
    <div className="about-container">
       
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our recipe app! We are passionate about bringing delicious
          and easy-to-make recipes to your kitchen. Whether you're a beginner or
          a seasoned chef, our goal is to make cooking fun, simple, and
          accessible for everyone.
        </p>
        <p>
          Our team is dedicated to curating and sharing the best recipes that
          cater to all tastes and dietary preferences. We believe that cooking
          should be a joyful experience, and we are here to guide you through
          every step.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔️ Handpicked & tested recipes</li>
          <li>✔️ Easy-to-follow step-by-step instructions</li>
          <li>✔️ Fresh and healthy meal ideas</li>
          <li>✔️ Community-driven content</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default AboutUs;
