import sql from 'mssql'
import config from '../db/config.js'

//Create Review
export const createReview =async (req,res)=>{
    
    try{
        let pool = await sql.connect(config.sql)
        const results =await pool.request().query("")  

    }catch(error){
        res.status(200).json(error.message)

    }finally{
        sql.close();
    }


}

//Update Review

export const updateReview =async (req,res)=>{
    
    try{
        const { id } = req.params;
        const { description } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("Review", sql.Int, id)
            .input("Comment", sql.VarChar, description)
            .query("UPDATE Reviews SET Comments = @Comment WHERE ReviewID = @Review");
        res.status(200).json({ message: 'Review updated successfully' });

    }catch(error){
        res.status(200).json(error.message)

    }finally{
        sql.close();
    }


}

//Delete Review
export const deleteReview =async (req,res)=>{
    
    try{const { id } = req.params;
         await sql.connect(config.sql);
        await sql.query`DELETE FROM Reviews WHERE ReviewID = ${id}`;
         res.status(200).json({ message: 'Review  deleted successfully' });

    }catch(error){
        res.status(200).json(error.message)

    }finally{
        sql.close();
    }


}

