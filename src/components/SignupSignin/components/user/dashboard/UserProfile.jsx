import { Diversity1 } from "@mui/icons-material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FormUpdate from "./FormUpdate";
import "./User.css";

export default function UserProfile({ userinputs, setuserInput, onUpdateMessage }) {
  const [isEditing, setIsEditing] = useState(false);


  // const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();

  //Handle delete Incident
  function handle_delete(varl) {
    console.log(varl);
    fetch(`https://irep-backend.herokuapp.com/incidents/${varl}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => console.log("Deleted"));

      window.location.reload(false);

    setuserInput(
      userinputs.filter((article) => {
        if (article.id != id) {
          return article;
        }
      })
    );
  }



  function handleUpdateMessage(updatedMessage) {
    setIsEditing(false);
    onUpdateMessage(updatedMessage);
  }

  const render_articles = userinputs.map(
    (articlesRow) =>
      articlesRow.user_id === Number(id) && (
        <div className="articles-row">
          <h1>{articlesRow.title}</h1>
          <div>
            <h2>Incident type:{articlesRow.incident_type}</h2>
          </div>
          <p>Incident Description:{articlesRow.description}</p>
          <p>Location:{articlesRow.location}</p>
          <img src={articlesRow.image_url} alt="recipe image" />
          <p>Status:{articlesRow.status}</p>
          <button onClick={() => handle_delete(articlesRow.id)}>delete</button>
          <button onClick={() => {
               localStorage.setItem("edit",JSON.stringify(articlesRow))
            setIsEditing((isEditing) => !isEditing)
         
          }}>edit</button>
        </div>
      )
  );

  return (
    <>
      {isEditing ? (
        <FormUpdate render_articles={render_articles} onUpdateMessage={handleUpdateMessage}/>
      ) : (
        <>
          <div>UserProfile</div>
          <div>{render_articles}</div>
        </>
      )}
    </>
  );
}
