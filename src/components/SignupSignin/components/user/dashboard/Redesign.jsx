import React from 'react'

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
        <button>{articlesRow.status}</button>
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
