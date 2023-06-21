import sql from 'mssql'
import config from '../db/config.js'



//View all Orders of the user

export const ordersPresent = async(req,res)=> {

    try{

        let pool = await sql.connect(config.sql)
        const result = await pool.request()
        .query("SELECT * FROM Orders")
        res.status(200).json(result.recordset)

    }catch(error){
        res.status(500).json(error.message)
    }finally{
        sql.close()
    }

}


//Create an Order
export const orderGame = async(req,res)=> {
        const{OrderID,UserName,GameID,OrderDate,} = req.body
    try{
        let pool = await sql.connect(config.sql);
        await pool.request()
        .input("OrderID",sql.Int,OrderID)
        .input("UserName",sql.VarChar,UserName)
        .input("GameID",sql.Int,GameID)
        .input("OrderDate",sql.Date,OrderDate)
        .query("INSERT INTO Orders (OrderID, UserName, GameID, OrderDate, TotalAmount) VALUES ();")


    }catch(error){
        res.status(500).json(error.message)
    }finally{
        sql.close()

    }

}


//Delete an existing Order
export const deleteOrder = async(req,res)=> {

    try{const { id } = req.params;
        await sql.connect(config.sql);
         await sql.query`DELETE FROM Orders WHERE OrderID = ${id}`;
        res.status(200).json({ message: 'Order deleted successfully' });

    }catch(error){
        res.status(500).json(error.message)
    }finally{
        sql.close()

    }

}


