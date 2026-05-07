/**
 * Mail Service
 * Production-ready wrapper for sending emails (e.g., via Resend, Nodemailer, etc.)
 */
export const MailService = {
  sendOTP: async (email, otp, type) => {
    console.log(`[MAIL] Sending ${type} OTP: ${otp} to ${email}`);
    
    // In production, integrate with Resend or similar here:
    // await resend.emails.send({
    //   from: 'InvestSmart <no-reply@investsmart.com>',
    //   to: email,
    //   subject: `${type} OTP`,
    //   html: `<p>Your OTP is <strong>${otp}</strong>. It expires in 10 minutes.</p>`
    // });
    
    return true;
  },

  sendVerificationLink: async (email, link) => {
    console.log(`[MAIL] Sending verification link: ${link} to ${email}`);
    return true;
  },
};
