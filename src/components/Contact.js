function Contact() {
  return (
    <section className="contact">
      <div className="contactme">
        <p>WANT TO GET IN TOUCH?</p>
        <a href="mailto:johndoe@testmail.com" className="email">
          <h2>johndoe@testmail.com</h2>
        </a>
      </div>

      <ul className="links">
        <li className="icon">
          <a href="https://github.com/faceyage">Github</a>
        </li>
        <li className="icon">
          <a href="https://linkedin.com/">Linkedin</a>
        </li>
        <li className="icon">
          <a href="https://twitter.com/">Twitter</a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
