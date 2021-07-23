import React from "react";

import avocadoImage from "../images/avocado.png";

export default function avocado(props) {

  return (
    <div className="AvocadoButton" onClick={props.addCashFunc}>
      <img src={avocadoImage} alt="../images/avocado.png" />
    </div>
  );
}
