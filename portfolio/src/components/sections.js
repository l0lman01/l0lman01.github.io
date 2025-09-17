import React from "react";

function Sections({ texts }) {
  return (
    <div className="container" style={{ padding: "2rem" }}>
      <section id="about">
        <h4>{texts.welcome}</h4>
        <p>{texts.description}</p>
        <a className="btn waves-effect waves-light" href="/monCV.pdf" download>
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
        <p>{texts.email}</p>
      </section>
    </div>
  );
}

export default Sections;
