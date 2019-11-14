import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        {" "}
        We are leaders in 10 countries:
        <a className="color-footer" href="//www.znanylekarz.pl" target="_blank">
          Poland
        </a>
        ,
        <a
          className="color-footer"
          href="//www.doktortakvimi.com"
          target="_blank"
        >
          Turkey
        </a>
        ,
        <a className="color-footer" href="//www.doctoralia.es" target="_blank">
          Spain
        </a>
        ,
        <a className="color-footer" href="//www.miodottore.it" target="_blank">
          Italy
        </a>
        ,
        <a className="color-footer" href="//www.znamylekar.cz" target="_blank">
          Czech Republic
        </a>
        ,
        <a
          className="color-footer"
          href="//www.doctoralia.com.mx"
          target="_blank"
        >
          Mexico
        </a>
        ,
        <a className="color-footer" href="//www.doctoralia.co" target="_blank">
          Colombia
        </a>
        ,
        <a
          className="color-footer"
          href="http://www.doctoralia.com.br"
          target="_blank"
        >
          Brazil
        </a>
        ,
        <a
          className="color-footer"
          href="http://www.doctoraliar.com"
          target="_blank"
        >
          Argentina
        </a>
        and
        <a className="color-footer"
          href="http://www.doctoralia.cl"
          target="_blank"
        >Chile</a>
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
