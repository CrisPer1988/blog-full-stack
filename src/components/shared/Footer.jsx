import React from "react";
import "./styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info_page">
        <p>Spark Link</p>
        <small>Descubrí una perspectiva única</small>
      </div>
      <div className="footer__info_developers">
        <p>Copyright &copy; 2023 Spark Link</p>
        <p>
          Desarrollado por: <span className="footer_name">Cristian Perez</span> Y {" "}
          <span className="footer_name">Jamar Masias</span>
        </p>
      </div>
    </footer>
  );
};
