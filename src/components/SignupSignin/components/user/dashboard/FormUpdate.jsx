import React,{useState} from 'react'

export default function FormUpdate({render_articles, onUpdateMessage}) {
const [articlesRow] = render_articles
const {id,title} = articlesRow
const [message, setMessage]= useState(title)


 //Handle incident update 
//  function handle_update(formData) {
//     const id = formData.id
//     delete formData.id
//     fetch(`http://[::1]:3000/incidents/${id}`, {
//       method: 'PATCH',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: formData,
//       })
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//   }
  
function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://[::1]:3000/incidents/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: message,
      }),
    })
      .then((r) => r.json())
      .then((updatedMessage) => onUpdateMessage(updatedMessage));
  }






  return (
    <div>

<div className="form-container_1" >
        <form className="register-form_1" onSubmit={handleFormSubmit}>
        
          <input id="case-title" className="form-field_1" type="text" placeholder="Enter your title" name="title" onChange={(e)=>setMessage(e.target.value)} value={message}/>
          <button className="form-field_1" type="submit">SUBMIT</button>
        </form>
      </div>




    </div>
  )
}
