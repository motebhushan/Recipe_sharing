import React from "react"
import './Component.css'
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import gulabGamun from '../assets/Gulab-jamun.jpeg';
import Card from "./Card";
import { useState } from "react";

function Recipe_tab(){
    
        // State to store card data
        const [cards, setCards] = useState([
          {
            id: 1,
            image: gulabGamun,
            title: "Card 1",
            description: "This is the description for Card 1.",
            steps:["eefdffbfgfdg","fbdfbgbbbb"],
            ingrediants:"Rice Tandul Tamata",
          },
          {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Card 2",
            description: "This is the description for Card 2.",
            steps:["eefdffbfgfdg","fbdfbgbbbb"],
            ingrediants:"Rice Tandul Tamata",
          }
        ]);
        
     
      
 
    return (
       <>
       <Navbar/>
      <div className="container">
        <button className="addRecipeBtn"><Link to="/Save_recipe">Add Recipe</Link></button>
      <div className="cardContainer">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            steps={card.steps}   
            ingrediants={card.ingrediants}
          />
        ))}
      </div>
    </div>
       </>
    );
}
export default Recipe_tab