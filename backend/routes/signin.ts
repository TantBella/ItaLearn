import express from 'express';
import { client } from '../index';

const router = express.Router();

router.post("/signin", async (req, res) => {
  try {
    const { us_name, us_password } = req.body;
console.log("Received login request", us_name, us_password);
    const result = await client.query(
      "SELECT us_name, selectedavatar FROM users WHERE us_name = $1 AND us_password = $2",
      [us_name, us_password]
    );

    if (result.rows.length > 0) {
      const userData = result.rows[0];
      res.status(200).json({
        message: "Successfully signed in",
        userData: {
          us_name: userData.us_name,
          selectedavatar: userData.selectedavatar,
        },
      });
    } else {
      res.status(401).json({
        message:
          "Something isn't adding up... Please double-check the credentials you've put in and try again :)",
      });
    }
  } catch (error) {
    console.error("Error during sign-in", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/signin", async (_req, res) => {
  try {
    const { rows } = await client.query(
      "SELECT us_name, selectedavatar FROM users"
    );

    res.send(rows);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
