// här hämtas glosor

import express from 'express';
import { client } from '../index';

const router = express.Router();

router.get('/glosor', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM italearnwords');
    response.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    response.status(500).send('Internal Server Error');
  }
});

export default router;
