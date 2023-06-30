import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './roleplaying.css';

function Roleplaying() {
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Games/4');
      setGames(response.data);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='rpg-main'>
      {isLoaded ? (
        games.map((game) => (
          <div className='game' key={game.GameID}>
            <div className="img"></div>
            <div>
              <h3 className="game-title">{game.GameName}</h3>
              <p className="game-description">{game.Description}</p>
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
        ))
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default Roleplaying;
