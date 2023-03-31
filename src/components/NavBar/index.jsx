import React from "react";
import './styles.css'
import Logo from '/src/assets/logo.png'
import { useNavigate } from "react-router-dom";

export default function NavBar() {

  const navigate = useNavigate(); 

   return(
    <div className="Navbar">
      <img className="Logo" src={Logo}/>
      <div className="Menu">
        <ul className="Content-Pages">
          <li className="Page"><a href="/">Página Inicial</a></li>
          <li className="Page"><a href="/produtos">Produtos</a></li>
          <li className="Page"><a href="/sobre">Sobre</a></li>
          {/* <li className="Page"><button onClick={navigate( 'https://diegociara.com')}>Fale conosco</button></li> */}
        </ul>
      </div>
    </div>
   )
}