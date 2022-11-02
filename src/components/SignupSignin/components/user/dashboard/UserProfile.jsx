import { Diversity1 } from "@mui/icons-material";
import React from "react";
import {useParams} from 'react-router-dom'






export default function UserProfile({ userinputs,setuserInput }) {


  // const user = JSON.parse(localStorage.getItem("user"));
  const {id} = useParams()
 //Handle delete article 
 function handle_delete(id) {
  console.log(userinputs)
  fetch(`http://[::1]:3000/incidents/${id}`, {
    method: 'DELETE',
  })
  .then((res) => res.json())
  .then(() => console.log("Deleted"))

  setuserInput(userinputs.filter((article) => {
    if (article.id != id) {
      return article
    }
  }));
}

 //Handle article update 
 function handle_update(formData) {
  const id = formData.id
  delete formData.id
  fetch(`/articles/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: formData,
    })
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
}







console.log(userinputs.id)
  const render_articles = userinputs.map((articlesRow) => (    
    articlesRow.user_id === Number(id) &&  <div className="articles-row">
        <h1>{articlesRow.title}</h1>
        <div>
        <h2>Incident type:{articlesRow.incident_type}</h2>
        </div>
        <p>Incident Description:{articlesRow.description}</p>
        <p>Location:{articlesRow.location}</p>
        <img src={articlesRow.image_url} alt="recipe image" />
        <p>Status:{articlesRow.status}</p>
        <button onClick={handle_delete}>delete</button>
        <button>edit</button>
      
        </div>
  ));

  return (
    <>
      <div>UserProfile</div>
      <div>{render_articles}
     
        </div>
     

{/*     
      <div>
            <div className='incident_type'><img src={attributes.image_url} alt=""></img></div>
            <div classNam e='restaurant-name'>{attributes.name}</div>
            <div className='restaurant-score'>{attributes.reviews.map((item)=> item.score)}</div>
        </div> */}


    </>
  );
}
