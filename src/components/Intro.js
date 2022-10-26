function Intro({ name }) {
  return (
    <section className="intro">
      <p className="name">{name.toUpperCase()}</p>
      <p className="profession ">Full Stack Web Developer</p>
    </section>
  );
}

export default Intro;
