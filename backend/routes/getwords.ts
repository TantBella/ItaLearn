// här hämtas glosor
// lägga in att hämta glosor med ett särskilt category_id

import express from 'express';
import { client } from '../index';

const router = express.Router();

router.get('/glosor/:category', async (request, response) => {
  try {
    const { category } = request.params;

    const query = `
      SELECT italearnwords.swedish, italearnwords.italian
      FROM italearnwords
      JOIN italearncategories ON italearnwords.category_id = italearncategories.categoryId
      WHERE italearncategories.category = $1;
    `;

    const { rows } = await client.query(query, [category]);
    response.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    response.status(500).send('Internal Server Error');
  }
});


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
