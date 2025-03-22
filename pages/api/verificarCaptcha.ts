import axios from 'axios';
import { NextApiResponse } from 'next';

const verificarCaptcha = async (captchaToken: string, subject: string, sanitizedMessage: string, res: NextApiResponse): Promise<void> => {
  try {
    const response = await axios.post(
      'https://api.resend.com/emails',
      {
        from: 'onboarding@resend.dev',
        to: 'ivan_schwab@outlook.com',
        subject: subject,
        html: sanitizedMessage,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_RESEND_API_KEY}`,
        },
      }
    );
  
    console.log('Correo enviado con éxito:', response.data);
    res.status(200).json({ success: true, message: 'Correo enviado con éxito' });
  } catch (error: any) {
    console.error('Error al enviar correo:', error.response?.data || error.message);
    res.status(500).json({ success: false, message: 'Hubo un error al enviar el correo' });
  }
}

export default verificarCaptcha;