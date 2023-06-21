import sql from 'mssql'
import config from '../db/config.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
    const { username, password, email } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
        const pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('username', sql.VarChar, username)
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM Customers WHERE username = @username OR email = @email');
        const user = result.recordset[0];
        if (user) {
            res.status(409).json({ error: 'User already exists' });
        } else {
            await pool.request()
                .input('username', sql.VarChar, username)
                .input('hashedpassword', sql.VarChar, hashedPassword)
                .input('email', sql.VarChar, email)
                .query('INSERT INTO Customers (username, password, email) VALUES (@username, @hashedpassword, @email)');
            res.status(200).send({ message: 'User created successfully' });
        }

    } catch (error) {
        res.status(500).json(error.message);
    } finally {
        sql.close();
    }

};

export const login = async (req, res) => {
    const { username, password } = req.body;
    let pool = await sql.connect(config.sql);
    const result = await pool.request()
        .input('username', sql.VarChar, username)
        .query('SELECT * FROM Customers WHERE username = @username');
    const user = result.recordset[0];
    if (!user) {
        res.status(401).json({ error: 'Authentication failed. Wrong credentials.' });
    } else {
        if (!bcrypt.compareSync(password, user.hashedpassword)) {
            res.status(401).json({ error: 'Authentication failed. Wrong credentials.' });
        } else {
            const token = `JWT ${jwt.sign({ username: user.username, email: user.email }, config.jwt_secret)}`;
            res.status(200).json({ email: user.email, username: user.username, id: user.id, token: token });
        }
    }

};