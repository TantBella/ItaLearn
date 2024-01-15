import express from 'express';
import { client } from '../index';

const router = express.Router();

router.put("/updateuser", async (req, res) => {
  const { us_name, us_email, us_password, selectedavatar } = req.body;

  try {
    const updateQuery = `
      UPDATE users
      SET us_name = $1, us_email = $2, us_password = $3, selectedavatar = $4
      WHERE us_name = $1
      RETURNING *;
    `;

    const values = [us_name, us_email, us_password, selectedavatar];

    const result = await client.query(updateQuery, values);

    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).send("Användaren hittades inte");
    }
  } catch (error) {
    console.error("Error går ej att uppdatera:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
