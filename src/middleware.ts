import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.SECRET_KEY as string
console.log("JWT_SECRET",JWT_SECRET);

declare global {
  namespace Express {
    interface Request {
      user?: any; // Adjust the type according to your user object
    }
  }
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
console.log(authHeader);

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
        console.error('JWT Verification Error:', err);
      return res.sendStatus(403);
    }
    req.user = decoded;
    next();
  });
}
