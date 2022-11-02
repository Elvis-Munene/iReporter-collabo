import React,{useState} from "react";
import "./team.css"



const Team = ({addUserPost}) => {
const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
// console.log(addUserPost)
// console.log(JSON.parse(user))
  // function Write({user, addArticle}) {

    const [formData, setFormData] = useState({
      user_id: user.id,
      incident_type:"",
      title: "",
      description: "",
      location: "",
      date: "",
      image_url: "",
      status: "Test"
      
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
        status: "Test"
        
        
        
      })
      
      fetch('http://[::1]:3000/incidents', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify(formData),
      }).then((res) => {
        if (res.ok) {
          res.json() 
          .then((article) => addUserPost(article));
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
        image_url: "",
        status: "Test"  
      
      })
    }
  

  return (
    <>
    <div className="form-container_1" >
        <form className="register-form_1" onSubmit={handleSubmit}>
          <select form="Categories" id="field" className="form-field" autofocus onChange={handleChange} name="incident_type" value={formData.incident_type}>
            <option value="" disabled>Select</option>
          
            <option value="intervention">Create an intervention</option>
            <option value="redflag">Create a red flag</option>
          </select>
          <input id="case-title" className="form-field_1" type="text" placeholder="Enter your title" name="title" onChange={handleChange} value={formData.title}/>
        <input id="desc-rption" className="form-field_1" type="text" placeholder="Description" name="description" onChange={handleChange} value={formData.description}/>
          <input id="loc-tion" className="form-field_1" type="text" placeholder="Location" name="location" onChange={handleChange} value={formData.location}/>
          <input id="da-te" className="form-field_1" type="text" placeholder="Date" name="date" onChange={handleChange} value={formData.date}/>
          <label id="file">Choose an Image</label>
         <input id="image"className="form-field_1" type="url" placeholder="Image Url" name="image" onChange={handleChange} value={formData.image_url}/>
          <button className="form-field_1" type="submit">SUBMIT</button>
        </form>
      </div>
     </> 
  );
};

export default  Team;
