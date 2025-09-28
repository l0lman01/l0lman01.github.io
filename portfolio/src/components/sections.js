import React from "react";
import photo from '../assets/me.jpg';

function Sections({ texts, lang }) {

  // Choose the correct PDF based on language
  const pdfUrl = lang === "fr" ? "/pdfs/Léo PHAM-VU FR.pdf" : "/pdfs/Léo PHAM-VU EN.pdf";
  return (
    <div className="container" style={{ padding: "2rem" }}>
      <section id="about" className="center-align">
        <h4>{texts.welcome}</h4>
        <img
          src={photo}
          className="responsive-img z-depth-3"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "20px",
            margin: "20px auto",
            display: "block"
          }}
          alt="Profile"
        />
        <p>{texts.description}</p>
        <a className="btn waves-effect waves-light" href={pdfUrl} download>
          {texts.download}
        </a>
      </section>

      <section id="projects" style={{ marginTop: "3rem" }}>
        <h5>{texts.projects}</h5>
        <ul className="collection">
          <li className="collection-item">Projet 1</li>
          <li className="collection-item">Projet 2</li>
          <li className="collection-item">Projet 3</li>
        </ul>
      </section>

      <section id="contact" style={{ marginTop: "3rem" }}>
        <h5>{texts.contact}</h5>
        <p>
          <a href={`mailto:${texts.email.replace(/.*: /, "")}`}>{texts.email}</a>
        </p>
      </section>
    </div>
  );
}

export default Sections;
