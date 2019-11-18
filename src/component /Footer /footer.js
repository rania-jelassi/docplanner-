import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        We are leaders in 10 countries:
        <a className="color-footer" href="//www.znanylekarz.pl">
          Poland
        </a>
        ,
        <a className="color-footer" href="//www.doktortakvimi.com">
          Turkey
        </a>
        ,
        <a className="color-footer" href="//www.doctoralia.es">
          Spain
        </a>
        ,
        <a className="color-footer" href="//www.miodottore.it">
          Italy
        </a>
        ,
        <a className="color-footer" href="//www.znamylekar.cz">
          Czech Republic
        </a>
        ,
        <a className="color-footer" href="//www.doctoralia.com.mx">
          Mexico
        </a>
        ,
        <a className="color-footer" href="//www.doctoralia.co">
          Colombia
        </a>
        ,
        <a className="color-footer" href="http://www.doctoralia.com.br">
          Brazil
        </a>
        ,
        <a className="color-footer" href="http://www.doctoraliar.com">
          Argentina
        </a>
        and
        <a className="color-footer" href="http://www.doctoralia.cl">
          Chile
        </a>
      </p>
      <p>
        {" "}
        This site uses cookies to deliver services in accordance with this
        Privacy Policy. You can specify the conditions for storing or accessing
        cookies on your browser
      </p>
      <p> www.docplanner.com © 2019 </p>
    </div>
  );
}
