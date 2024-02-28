
import jwt from 'jsonwebtoken';
import { PrismaClient, User  } from '@prisma/client';

const prisma = new PrismaClient();

export async function generateTokens(user: { id: string; email: string }): Promise<{ accessToken: string; refreshToken: string }> {
  const { id, email } = user;
  const accessToken = jwt.sign({ id, email }, `${process.env.SECRET_KEY}`, { expiresIn: '5m' });
  const refreshToken = jwt.sign({ id, email }, `${process.env.SECRET_KEY}`, { expiresIn: '1yr' });

  await prisma.user.update({
    where: { id },
    data: { refreshToken: refreshToken } as User // Explicitly define the type here
  });

  return { accessToken, refreshToken };
}


export async function verifyToken(token: string): Promise<{ id: string; email: string }> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, `${process.env.SECRET_KEY}`, (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user as { id: string; email: string });
      }
    });
  });
}

export async function verifyRefreshToken(refreshToken: string): Promise<{ id: string; email: string }> {
    return new Promise((resolve, reject) => {
      jwt.verify(refreshToken, `${process.env.SECRET_KEY}`, (err, user) => {
        if (err) {
          reject(err);
        } else {
          resolve(user as { id: string; email: string });
        }
      });
    });
  }

  export async function refreshAccessToken(refreshToken: string): Promise<string> {
    try {
      console.log('Received refresh token:', refreshToken);
      const user = await verifyRefreshToken(refreshToken);
      const newAccessToken = await generateTokens(user);
      return newAccessToken.accessToken;
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw new Error('Invalid refresh token');
    }
  }
  
