import { Diversity1 } from "@mui/icons-material";
import React from "react";
import {useParams} from 'react-router-dom'
export default function UserProfile({ userinputs }) {

const {id} = useParams()
console.log(userinputs)
  const render_articles = userinputs.map((articlesRow) => (
    articlesRow.user_id === Number(id) &&  <div className="articles-row">
        <h1>{articlesRow.title}</h1>
        <h2>Incident type:{articlesRow.incident_type}</h2>
        <p>Incident Description:{articlesRow.description}</p>
        <p>Location:{articlesRow.location}</p>
        <img src={articlesRow.image_url} alt="recipe image" />
        <p>Status:{articlesRow.status}</p>
        </div>
  ));

  return (
    <>
      <div>UserProfile</div>
      <div>{render_articles}</div>

{/*     
      <div>
            <div className='incident_type'><img src={attributes.image_url} alt=""></img></div>
            <div classNam e='restaurant-name'>{attributes.name}</div>
            <div className='restaurant-score'>{attributes.reviews.map((item)=> item.score)}</div>
        </div> */}


    </>
  );
}
