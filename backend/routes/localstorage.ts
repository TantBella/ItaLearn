// import express, { Request, Response } from 'express';
// import { client } from '../index';
// import jwt, { VerifyCallback, VerifyOptions } from 'jsonwebtoken';

// const router = express.Router();

// const secretKey = 'local-storage-nyckel';

// router.post('/signin', (req: Request, res: Response) => {
//   const { username, password } = req.body;

//   if (username === 'user' && password === 'password') {
//     const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
//     res.json({ token });
//   } else {
//     res.status(401).json({ message: 'Fel användarnamn eller lösenord' });
//   }
// });

// router.get('/verifyToken', (req: Request, res: Response) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Token saknas' });
//   }

//   jwt.verify(token, secretKey, (err: VerifyCallback<Error>, decoded: string | object) => {
//     if (err) {
//       return res.status(401).json({ message: 'Ogiltig token' });
//     }

//     res.json({ message: 'Token verifierad', username: (decoded as any).username });
//   } as VerifyOptions);
// });

// export default router;
