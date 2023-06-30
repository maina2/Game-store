import sql from "mssql";
import config from "../db/config.js";

//Gets all available games in the site

export const getAllGames = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool.request()
      .query(`SELECT G.GameID, G.GameName, G.Description, G.Price,
            Ge.GenreName, P.PlatformName
     FROM Games G
     JOIN Genres Ge ON G.GenreID = Ge.GenreID
     JOIN Platforms P ON G.PlatformID = P.PlatformID`);
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json(error.message);
  } finally {
    sql.close();
  }
};

//Gets specific game by ID

export const getGamesByGenre = async (req, res) => {
  try {
    const { genreId } = req.params;
    let pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('GenreID', sql.Int, genreId)
      .query(`
        SELECT G.GameID, G.GameName, G.Description, G.Price, P.PlatformName, GE.GenreName
        FROM Games AS G
        INNER JOIN Platforms AS P ON G.PlatformID = P.PlatformID
        INNER JOIN Genres AS GE ON G.GenreID = GE.GenreID
        WHERE G.GenreID = @GenreID
      `);
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json(error.message);
  } finally {
    sql.close();
  }
};

