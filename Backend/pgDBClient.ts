import { Client } from 'pg';

const client = new Client({
  host: 'localhost', // BKMRK: make sure this is environment based
  port: 5432,
  database: 'marketplace_db',
  user: 'postgres',
  password: 'secretpassword!!', // BKMRK: make sure this is environment based as well
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
