import Project from "./Project";

function Projects({ projects }) {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, i) => {
          return <Project key={i} {...project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
