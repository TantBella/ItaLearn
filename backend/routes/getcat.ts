// här fetchas kategorier
import express from 'express';
import { client } from '../index';

const router = express.Router();

router.get('/api', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM italearncategories');
    response.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    response.status(500).send('Internal Server Error');
  }
});

export default router;
