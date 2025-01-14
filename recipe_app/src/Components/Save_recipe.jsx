import React, { Component } from "react"
import './Component.css';
function Save_recipe(){
           // Function to add a new card
  const addCard = () => {
    const form=document.getElementById('form1');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    });
    const newCard = {
      id: cards.length + 1,
      image: "https://via.placeholder.com/150",
      title: `Card ${cards.length + 1}`,
      description: `This is the description for Card ${cards.length + 1}.`
    };
    setCards([...cards, newCard]);
  };

    return(
        <>
        
        <form className="form" action="" id="form1">
               <div><label htmlFor="title" required>Title</label> <input type="text" /></div>

               <div><label htmlFor="Discription">Discription</label> <textarea name="Discription" id="Discription" cols={20} rows={3} required></textarea></div>

               <div><label htmlFor="Ingridiants">Ingridiants</label> <textarea name="Ingridiants" id="Ingridiants" cols={20} rows={3} required></textarea></div>

               <div><label htmlFor="Steps">Steps</label> <textarea name="Steps" id="Steps" cols={20} rows={10} required></textarea></div>

                <button onClick={addCard}>Save</button>
        </form>
        </>
    )
}
export default Save_recipe