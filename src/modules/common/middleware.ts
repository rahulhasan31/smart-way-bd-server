import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

interface DecodedUser {
  // Define the properties you expect in the decoded token here
  // For example, if your JWT payload has an 'id' property:
  id: string;
}

interface CustomRequest extends Request {
  decoded?: DecodedUser;
}

const JWT_SECRET = process.env.SECRET_KEY;

export function verifyJWT(req: CustomRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send("Unauthorized access. Authorization header is missing.");
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("Unauthorized access. Token is missing.");
  }

  if (!JWT_SECRET) {
    return res.status(500).send("Internal server error. Secret key is not defined.");
  }

  jwt.verify(token, JWT_SECRET as Secret, function (err, decoded) {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).send({ message: 'Token expired' });
      } else {
        return res.status(401).send({ message: 'Invalid token' });
      }
    }

    // Cast the decoded user to the DecodedUser interface
    req.decoded = decoded as DecodedUser;
    next();
  });
}
