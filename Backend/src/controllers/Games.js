import sql from 'mssql'
import config from '../db/config.js'


//Gets all available games in the site

export const getAllGames= async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .query("select * from Games");
            res.status(200).json(result.recordset);
        } catch (error) {
        res.status(500).json(error.message);
    } finally {
        sql.close();
    }
};

//Gets specific game by ID

export const getGameById = async(req,res) => {

    try{
        const {id} = req.params
        let pool = await sql.connect(config.sql)
       const result = await pool.request()
            .input("GameID",sql.Int, id)
            .query("SELECT * FROM Games WHERE GameID = @GameID")
            res.status(200).json(result.recordset[0]);


    }catch(error){
        res.status(500).json(error.message)

    }finally{
        sql.close();
    }

}

