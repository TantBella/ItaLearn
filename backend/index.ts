import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { Client } from 'pg';

import getcat from './routes/getcat';
import postcategory from './routes/postcategory';
import putcategory from './routes/putcategory';
import deletecategory from './routes/deletecategory';
import getwords from './routes/getwords'
import postwords from './routes/postwords';
import putwords from './routes/putwords';
import deletewords from './routes/deletewords';
import getusers from './routes/createusers';
// import localstorage from './routes/localstorage'
import signin from './routes/signin';

const port = process.env.PORT || 3000;

dotenv.config();

export const client = new Client({
  connectionString: process.env.PGURI,
});

const app = express();

app.use(cors());
app.use(express.json());


client.connect();
app.use(getcat);
app.use(getwords);
app.use(postwords);
app.use(putwords);
app.use(deletewords);
app.use(postcategory);
app.use(putcategory);
app.use(deletecategory);
app.use(getusers);
// app.use(localstorage);
app.use(signin);


// app.get('/api', async (_request, response) => {
//   try {
//     const { rows } = await client.query('SELECT * FROM italearncategories');
//     response.json(rows);
//   } catch (error) {
//     console.error('Error fetching data from the database:', error);
//     response.status(500).send('Internal Server Error');
//   }
// });

app.use(express.static(path.join(path.resolve(), 'dist')));

app.listen(3000, () => {
  console.log(`Välkommen till port ${port}`);
});
