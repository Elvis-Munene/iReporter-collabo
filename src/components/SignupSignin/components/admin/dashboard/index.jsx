import React from "react";
import "./dashboard.css"
import Team from "../team/index"

const Redflags = () => {


  // function Stories({articles, user, setArticles}) {

    // const user_articles = articles.filter((article => {
    //   if (article.user_id === user.id) {
    //     return article
    //   }
    // }));
  
    // const render_user_articles = user_articles.map((user_article) => {
    //   return <UserArticle ondelete={handle_delete} onupdate={handle_update} key={user_article.id} article={user_article} />
    // })
  
  
//     //Handle delete article 
//     function handle_delete(id) {
//       fetch(`/articles/${id}`, {
//         method: 'DELETE',
//       })
//       .then((res) => res.json())
//       .then(() => console.log("Deleted"))
  
//       setArticles(articles.filter((article) => {
//         if (article.id != id) {
//           return article
//         }
//       }));
//     }
  
//     //Handle article update 
//     function handle_update(formData) {
//       const id = formData.id
//       delete formData.id
//       fetch(`/articles/${id}`, {
//         method: 'PATCH',
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           body: formData,
//         })
//       })
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//     }
  
//     //Render articles in groups of 3
//     //Mutate articles array into groups of 3
//     function render_user_stories() {
//       let articles = []
//       let size = 3
  
//       for(let i = 0; i < render_user_articles.length; i += size ) {
//         articles.push(render_user_articles.slice(i, i + size))
//       }
//       const render_articles = articles.map((articlesRow) => {
//         return <div className='articles-row'>{articlesRow}</div>
//       })
  
//       return render_articles
//     }






  return(
    <>
    {/* Redflag Component */}
<div className="redflags">
<h3>Red flags</h3>
<form className="register-form">
          <select form="Categories" id="field" className="form-field" autofocus>
            <option value="red flags">Under-Investigation</option>
            <option value="intervention">Accepted</option>
            <option value="intervention">Rejected</option>
          </select>
          <button className="delete">delete</button>
          </form>
</div>
</>
  );
}
const Interventions = () => {
  return(
<>
<div className="intervene">
<h3>Interventions</h3>
<form className="register-form">
          <select form="Categories" id="field" className="form-field" autofocus>
          <option value="red flags">Under-Investigation</option>
            <option value="intervention">Accepted</option>
            <option value="intervention">Rejected</option>
          </select>
          <button className="delete">delete</button>
          </form>
</div>
</>
  );
}
const Dashboard = () => {
  
  return (
   <div>
<h2>Reported cases</h2>
      <Redflags />
      <Interventions />
    </div>         
  );
};

export default Dashboard;
