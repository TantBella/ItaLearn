import express from 'express';
import { client } from '../index';

const router = express.Router();

router.get('/createusers', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM users');
    response.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    response.status(500).send('Internal Server Error');
  }
});

router.post("/createusers", async (req, res) => {
  try {
    const { us_name, us_email, us_password, selectedAvatar } = req.body;

    console.log(req.body);

    const result = await client.query(
      "INSERT INTO users (us_name, us_email, us_password, selectedAvatar) VALUES ($1, $2, $3, $4);",
      [us_name, us_email, us_password, selectedAvatar]
    );

    res
      .status(201)
      .json({ message: "User created successfully", data: result.rows });
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
