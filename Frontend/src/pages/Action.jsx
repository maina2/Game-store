import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './action.css'

function Action() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Games/1');
      setGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='action-main'>

      {games.map((game) => (
        <div className='game' key={game.GameID}>
        <div className="img"></div>
        <div >
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

export default Action;
