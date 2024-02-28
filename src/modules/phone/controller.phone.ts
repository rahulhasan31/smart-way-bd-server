// // src/modules/auth/auth.controller.ts
// import { Request, Response } from 'express';
// import { generateOTP, sendOTP, verifyOTP } from './service.phone';


// export const sendOTPController = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { phone } = req.body;
//     console.log(phone);
    
//     const otp = await generateOTP(phone);
//     await sendOTP(phone, otp);
//     res.status(200).send('OTP sent successfully');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Failed to send OTP');
//   }
// };

// export const verifyOTPController = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { phoneNumber, userOTP } = req.body;
//     const isVerified = await verifyOTP(phoneNumber, userOTP);

//     if (isVerified) {
//       res.status(200).send('OTP verified successfully');
//     } else {
//       res.status(400).send('Invalid OTP');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Failed to verify OTP');
//   }
// };
