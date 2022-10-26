function Project({ name, desc, technologies, date, imgUrl, previewUrl, srcUrl }) {
  return (
    <div className="project">
      <h3 className="name">{name}</h3>
      <div className="project-info">
        <img src={imgUrl} alt={name} />
        <div className="project-details">
          <div>
            <p className="summary">Summary</p>
            <p className="desc">{desc}</p>
          </div>
          <div className="tech-and-date">
            <div className="technologies">
              <p className="title">Technologies</p>
              <p className="techs">{technologies}</p>
            </div>
            <p className="date">
              <span className="title">Date</span> {date}
            </p>
          </div>

          <div className="links">
            <a href={srcUrl}>VIEW CODE</a>
            <a href={previewUrl}>LIVE PREVIEW</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
