import React, {useState} from 'react'
import "./User.css"

export default function Redesign({userinputs}) {
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    status: user.status
    
  })






// function handleOnlick(){
//   setFormData
// }



  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  
  }

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
        <div><button>Verify</button></div>

        
        
      
        </div>
      })
  



     

  return (
    <>
    <div>Admin View</div>
    <div>{render_articles}</div>
    </>
  )
}
