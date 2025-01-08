import React, { Component } from "react"
import './Component.css';
function Save_recipe(){
    return(
        <>
        
        <form className="form" action="">
               <div><label htmlFor="title" required>Title</label> <input type="text" /></div>

               <div><label htmlFor="Discription">Discription</label> <textarea name="Discription" id="Discription" cols={20} rows={3} required></textarea></div>

               <div><label htmlFor="Ingridiants">Ingridiants</label> <textarea name="Ingridiants" id="Ingridiants" cols={20} rows={3} required></textarea></div>

               <div><label htmlFor="Steps">Steps</label> <textarea name="Steps" id="Steps" cols={20} rows={10} required></textarea></div>

                <button>Save</button>
        </form>
        </>
    )
}
export default Save_recipe