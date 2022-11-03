import React,{useState} from 'react'

export default function FormUpdate({render_articles, onUpdateMessage}) {
const [articlesRow] = render_articles
const {id,title, description,location,incident_type,image_url} = articlesRow
const [message, setMessage]= useState(title)
const [postdescription, setpostDescription]= useState(description)
const [postlocation, setpostLocation]= useState(location)
const [posttype, setpostType]= useState(incident_type)
const [postimage, setPostImage]= useState(image_url)
console.log(id)

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

        <select form="Categories" id="field" className="form-field" autofocus onChange={(e)=>setpostType(e.target.value)}  name="incident_type" value={posttype}>
            <option value="" disabled>Select</option>
          
            <option value="intervention">Create an intervention</option>
            <option value="redflag">Create a red flag</option>
          </select>
        
          <input id="case-title" className="form-field_1" type="text" placeholder="Enter your title" name="title" onChange={(e)=>setMessage(e.target.value)} value={message}/>

          <input id="desc-rption" className="form-field_1" type="text" placeholder="Description" name="description" onChange={(e)=>setpostDescription(e.target.value)} value={postdescription}/>



         <input id="loc-tion" className="form-field_1" type="text" placeholder="Location" name="location" onChange={(e)=>setpostLocation(e.target.value)} value={postlocation}/>

         <input id="image"className="form-field_1" type="url" placeholder="Image Url" name="image" onChange={(e)=>setPostImage(e.target.value)} value={postimage}/>




          <button className="form-field_1" type="submit">SUBMIT</button>
        </form>
      </div>




    </div>
  )
}
