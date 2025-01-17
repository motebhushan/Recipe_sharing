import React, { Component } from "react"
import './Component.css';
function Save_recipe(){
           // Function to add a new card
  const addCard = (e) => {
    e.preventDefault();

  };

    return(
        <>
        
         <form className="form" id="form1" onSubmit={addCard}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        cols={20}
                        rows={3}
                        required
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea
                        name="ingredients"
                        id="ingredients"
                        cols={20}
                        rows={3}
                        required
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="steps">Steps</label>
                    <textarea
                        name="steps"
                        id="steps"
                        cols={20}
                        rows={5}
                        required
                    ></textarea>
                </div>

                <button type="submit">Save</button>
            </form>

        </>
    )
}
export default Save_recipe