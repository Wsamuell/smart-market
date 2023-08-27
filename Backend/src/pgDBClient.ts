import { Client } from 'pg';
import 'dotenv/config';

const client = new Client({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS, // BKMRK: make sure this is environment based as well
});

const connectAndQuery = async () => {
  try {
    await client.connect();
    console.log('Connected to DB');
    const res = await client.query('SELECT * FROM users');
    console.log(res.rows);
  } catch (error) {
    console.log(error);
  } finally {
    await client.end();
    console.log('Disconnected from DB');
  }
};

connectAndQuery();
