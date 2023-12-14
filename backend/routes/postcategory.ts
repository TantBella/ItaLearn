import express from 'express';
import { client } from '../index';

const router = express.Router();

router.get('/addcategory', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM italearncategories');
    console.log("Hämtar alla kategorier");
    response.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    response.status(500).send('Internal Server Error');
  }
});

router.post("/addcategory", async (req, res) => {
  console.log(req.body);

  const { category } = req.body;
  console.log(category);

  if (!category) {
    return res.status(400).send("Alla fält är inte ifyllda");
  }

  try {
    console.log("Received values in backend:", { category });

    const postQuery = `
      INSERT INTO italearncategories (category)
      VALUES ($1)
      RETURNING *;
    `;

    const values = [category];

    const result = await client.query(postQuery, values);

    if (result.rows.length > 0) {
      res.status(201).json(result.rows[0]);
    } else {
      res.status(500).send("Misslyckades med att lägga in data");
    }
  } catch (error) {
    console.error("Error går ej att posta:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
