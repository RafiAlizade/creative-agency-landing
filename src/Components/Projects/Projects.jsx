import './Projects.css'
import restCountriesImage from './../../assets/restcountries.jpg'
import wumboImage from './../../assets/pagetest2.jpg'

function Projects() {

    const databaseProject = [
      {
        id : 1,
        name : 'Rest Countries API',
        photoURL : restCountriesImage
      },
      {
        id : 2,
        name : 'Wumbo Template',
        photoURL : wumboImage
      }
    ]

    return (
        <main className="app-main">
  <section className="projects">
    <div className="container">
      <div className="projects__inner">
        <div className="projects_top">
          <h2 className="projects_h2">Our Projects</h2>
          <div className="projects_line"></div>
        </div>
        <div className="projects__container">
        {databaseProject.map((data, index) => (
          <div className="projects__box" id={data.id} key={index}>
          <span className="projects__name">
            {data.name}
          </span>
          <div className="projects__image">
            <img src={data.photoURL} alt="" />
          </div>
        </div>
        
        ))}
        </div>
      </div>
    </div>
  </section>
</main>
    );
}

export default Projects;