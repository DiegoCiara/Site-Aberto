import React from "react";
import './styles.css'

export default function Card(props) {
  return(
    <div className="Card">
      <h1 className="Card-Title">{props.title}</h1>
      <p className="Card-Description">{props.description}</p>
      <button className="Card-Button">
        Ir para página
      </button>
    </div>
  )
}