import React from "react";
import'./styles.css'
import Intro from '/src/assets/Home.png'
import Card from "../../components/Cards/Cards";
import { Info } from "../../labels";

export default function Home() {
  return(
    <div className="section home">
      <div className="Intro">
        <img className="Image Home" src={Intro} alt="Image"/>
        <Card
          title={Info.Company.Products.Product1.name}
          description={Info.Company.Products.Product1.description1}
        />
      </div>
    </div>
  )
}