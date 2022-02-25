import React, { useEffect, useState } from "react";

export default function Random() {
  const [cocktails, setCocktail] = useState([0]);
  const [oneCocktail, setOneCocktail] = useState(''); //STORES THE RANDOM POST

  useEffect(() => {
    const cocktails = async () => {
      try {
        const fetchingData = await fetch("http://localhost:3000/cocktails");
        const cocktails = await fetchingData.json();
        setCocktail(cocktails);
      } 
    catch (err) {
        console.log(err + ' | Error On The Rebound Mate');
      }
    };
    cocktails();
  }, []);

  const handleClick = () => {
    const random = cocktails[Math.floor(Math.random() * cocktails.length)];
    setOneCocktail(random);
  };


  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <span>{oneCocktail.name}</span> 
    </div>
  );
};