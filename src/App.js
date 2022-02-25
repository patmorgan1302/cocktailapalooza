import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css"

export default function App() {
  
  // const [cocktails, setCocktail] = useState([0]);
  // const [oneCocktail, setOneCocktail] = useState('');

  // useEffect(() => {
  //   const cocktails = async () => {
  //     try {
  //       const fetchingData = await fetch("http://localhost:3000/cocktails");
  //       const cocktails = await fetchingData.json();
  //       setCocktail(cocktails);
  //     } 
  //   catch (err) {
  //       console.log(err + ' | Error On The Rebound Mate');
  //     }
  //   };
  //   cocktails();
  // }, []);

  // const handleClick = () => {
  //   const random = cocktails[Math.floor(Math.random() * cocktails.length)];
  //   setOneCocktail(random);
  // };

  return (    
    <div>
      <h1 className="title">Bookkeeper</h1>
      <nav >
        <button><Link to="/search" className="button">Search Catalog</Link> </button> | {" "}
        <button><Link to="/catalog">Drink Catalog</Link></button> | {" "}
        <button><Link to="/random">Generate Random Recipe!</Link></button>
      </nav>
      <Outlet />
    </div>
  );

}
