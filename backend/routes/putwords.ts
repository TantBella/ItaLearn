import express from 'express';
import { client } from '../index';

const router = express.Router();

router.get('/wordchange', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM italearnwords');
    console.log("Hämtar alla glosor");
    response.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    response.status(500).send('Internal Server Error');
  }
});

router.put("/wordchange/:italearnid", async (req, res) => {
  const italearnid = req.params.italearnid;
  const { swedish, italian } = req.body;

  // if (!swedish || !italian) {
  //   return res.status(400).send("Alla fält är inte ifyllda");
  // }

  try {
    console.log("Received values in backend:", { italearnid, swedish, italian });

    const updateQuery = `
      UPDATE italearnwords
      SET swedish = $1, italian = $2
      WHERE italearnid = $3
      RETURNING *;
    `;

    const values = [swedish, italian, italearnid];

    const result = await client.query(updateQuery, values);

    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).send("Ingen glosa med det angivna id:t hittades");
    }
  } catch (error) {
    console.error("Error går ej att uppdatera:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
