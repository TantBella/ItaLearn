import express from 'express';
import { client } from '../index';

const router = express.Router();

router.get('/addword', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM italearnwords');
    console.log("Hämtar alla kategorier");
    response.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    response.status(500).send('Internal Server Error');
  }
});

router.post("/addword", async (req, res) => {
  const { swedish, italian, category_id } = req.body;

  if (!swedish || !italian || !category_id) {
    return res.status(400).send("Alla fält är inte ifyllda");
  }

  try {
    const postQuery = `
      INSERT INTO italearnwords (swedish, italian, category_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const values = [swedish, italian, category_id];

    const result = await client.query(postQuery, values);

    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(500).send("Misslyckades med att lägga in data");
    }
  } catch (error) {
    console.error("Går ej att posta:", error);
    res.status(500).send("Internal Server Error");
  }
});


export default router;
