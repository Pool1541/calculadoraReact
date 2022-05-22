import React from "react";
import '../stylesheets/display.css'

const Pantalla = ({ input, display }) => (
  <div className={display} tabIndex={0}>
    {input}
  </div>
);

export default Pantalla;