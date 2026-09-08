import React from "react";
import "./TitleUrdu.css";

const TitleUrdu = ({ subtitle, title }) => {
  return (
    <div>
      <div className="titleUrdu">
        <p>{subtitle}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default TitleUrdu;
