import React from 'react'
import "./User.css"

export default function Redesign({userinputs}) {
    console.log(userinputs)

    const render_articles = userinputs.map((articlesRow) => {
        return  <div className="articles-row">
        <h1>{articlesRow.title}</h1>
        <div>
        <h2>Incident type:{articlesRow.incident_type}</h2>
        </div>
        <p>Incident Description:{articlesRow.description}</p>
        <p>Location:{articlesRow.location}</p>
        <img src={articlesRow.image_url} alt="recipe image" />
       
        <div>
        <select form="Categories" id="field" className="form-field" autofocus  name="incident_type" value={articlesRow.status}>
            <option value="" defaultValue={articlesRow.status}>Under-Investigation</option>
          
           
            <option value="Draft">Draft</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
        
        
      
        </div>
      })
  



     

  return (
    <>
    <div>Admin View</div>
    <div>{render_articles}</div>
    </>
  )
}
