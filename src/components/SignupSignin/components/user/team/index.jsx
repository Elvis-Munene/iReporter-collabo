import React,{useState} from "react";
import "./team.css"



const Team = () => {
const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
// console.log(JSON.parse(user))
  // function Write({user, addArticle}) {

    const [formData, setFormData] = useState({
      user_id: user.id,
      incident_type:"",
      title: "",
      description: "",
      location: "",
      date: "",
      image_url: ""
      
    })
    // const [errors, setErrors] = useState([])
  
    //Update form data
    function handleChange(event) {
      const name = event.target.name;
      let value = event.target.value;
  
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  
    //Handle artcile submit
   function handleSubmit(e) {
      e.preventDefault()
      if (!user) return;
      setFormData({
        ...formData,
        user_id: user.id,
        
      })
      console.log(user.id);
      fetch('http://[::1]:3000/incidents', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify(formData),
      }).then((res) => {
        if (res.ok) {
          res.json() 
          .then((article) => console.log(article));
        } 
      });
  
      //Clear form
      setFormData({
        user_id: user.id,
        incident_type:"",
        title: "",
        description: "",
        location: "",
        date: "",
        image_url: ""  
      })
    }
  

  return (
    <>
    <div className="form-container" >
        <form className="register-form" onSubmit={handleSubmit}>
          <select form="Categories" id="field" className="form-field" autofocus onChange={handleChange} name="incident_type" value={formData.incident_type}>
            <option value="" disabled>Select</option>
          
            <option value="intervention">Create an intervention</option>
            <option value="redflag">Create a red flag</option>
          </select>
          <input id="case-title" className="form-field" type="text" placeholder="Enter your title" name="title" onChange={handleChange} value={formData.title}/>
        <input id="desc-rption" className="form-field" type="text" placeholder="Description" name="description" onChange={handleChange} value={formData.description}/>
          <input id="loc-tion" className="form-field" type="text" placeholder="Location" name="location" onChange={handleChange} value={formData.location}/>
          <input id="da-te" className="form-field" type="text" placeholder="Date" name="date" onChange={handleChange} value={formData.date}/>
          <label id="file">Choose an Image</label>
         <input id="image"className="form-field" type="file" placeholder="Image Url" name="image" onChange={handleChange} value={formData.image_url}/>
          <button className="form-field" type="submit">SUBMIT</button>
        </form>
      </div>
     </> 
  );
};

export default  Team;