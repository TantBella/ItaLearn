import express from 'express';
import { client } from '../index';

const router = express.Router();

router.get('/categorychange', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM italearncategories');
    console.log("Hämtar alla kategorier");
    response.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    response.status(500).send('Internal Server Error');
  }
});

router.put("/categorychange/:categoryId", async (req, res) => {
  const categoryId = req.params.categoryId;
  const { category } = req.body;

  if (!category) {
    return res.status(400).send("Alla fält är inte ifyllda");
  }

  try {
    console.log("Received values in backend:", { categoryId, category });

    const updateQuery = `
      UPDATE italearncategories
      SET category = $1
      WHERE categoryId = $2
      RETURNING *;
    `;

    const values = [category, categoryId];

    const result = await client.query(updateQuery, values);

    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).send("Ingen kategori med det angivna categoryid hittades");
    }
  } catch (error) {
    console.error("Error går ej att uppdatera:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
