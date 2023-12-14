import express from 'express';
import { client } from '../index';

const router = express.Router();

router.get('/deletecat', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM italearncategories');
    console.log("Hämtar alla kategorier");
    response.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    response.status(500).send('Internal Server Error');
  }
});

router.delete('/deletecat', async (req, res) => {
  try {
    const { categoryid } = req.body;

    const result = await client.query('DELETE FROM italearncategories WHERE categoryid = $1;', [categoryid]);

    if (result && result.rowCount != null) {
      if (result.rowCount > 0) {
        res.status(200).json({ success: true, message: 'Kategorin är raderad' });
      } else {
        res.status(404).json({
          success: false,
          message: 'Ingen kategori med dey namn eller id hittades',
        });
      }
    } else {
      res.status(500).json({ success: false, message: 'Något gick fel.' });
    }
  } catch (error) {
    console.error('Error deleting category', error);
    res.status(500).json({ success: false });
  }
});

export default router;
