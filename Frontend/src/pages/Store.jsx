import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Store.css';

function Gamestore() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Games');
      setGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (gameId) => {
    try {
      const response = await axios.post('http://localhost:3000/Orders', { gameId });
      console.log('Order added to cart:', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='store'>
      {games.map((game) => (
        <div className='game' key={game.GameID}>
          <div className="img"></div>
          <div className="greyman">
            <h3 style={{ color: "#a8ba9a" }}>{game.GameName}</h3>
            <p style={{ color: "#B2BEB5", fontFamily: "sans-serif", paddingLeft: "3px" }}>{game.Description}</p>
          </div>

          <div className="details">
            <div className="gp">
              <p>{game.GenreName}</p>
              <p>{game.PlatformName}</p>
            </div>

            <button className="cart" onClick={() => addToCart(game.GameID)}>
              <p>{game.Price}</p>
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Gamestore;
