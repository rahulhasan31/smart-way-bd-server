// import twilio from 'twilio';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// const accountSid = 'AC74b23f2ff4d7c980d362621b583b437d';
// const authToken = '4ce88d2a2d01ef074f6de96afae2d79a';
// const verifySid = 'VAd50178cc464f50db2b64e807fe86bd08';

// const client = twilio(accountSid, authToken);

// export const generateOTP = async (phone: number): Promise<string> => {
//   const otp = Math.floor(100000 + Math.random() * 900000);

//   try {
//     await prisma.user.update({
//       where: { phone },
//       data: { otp, password: 'dummyPassword' },
//     });
//   } catch (error: any) {
//     if (error.code === 'P2025') {
//       await prisma.user.create({
//         data: { phone, otp, password: 'dummyPassword' },
//       });
//     } else {
//       throw error;
//     }
//   }

//   return otp.toString();
// };

// export const sendOTP = async (to: string, otp: string): Promise<void> => {
//   try {
//     const toPhoneNumber = `+880${to}`;

//     await client.verify.services(verifySid)
//       .verifications.create({ to: toPhoneNumber, channel: 'sms' });

//     console.log('OTP message sent successfully');
//   } catch (error: any) {
//     console.error('Error sending OTP message:', error.message);
//     throw new Error('Failed to send OTP message');
//   }
// };

// export const verifyOTP = async (phone: number, userOTP: number): Promise<boolean> => {
//   const user = await prisma.user.findUnique({
//     where: { phone },
//   });

//   if (!user) {
//     return false; // User not found
//   }

//   return user.otp === userOTP;
// };
