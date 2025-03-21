import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const ipRequests = new Map<string, { count: number, firstRequestTime: number }>();
const MAX_REQUESTS = 5; 
const TIME_WINDOW = 60 * 60 * 1000;

const sanitize = (str: string) => str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        
        const currentTime = Date.now();
        const requestInfo = ipRequests.get(ip as string) || { count: 0, firstRequestTime: currentTime };

        // Validación de solicitudes por IP
        if (currentTime - requestInfo.firstRequestTime < TIME_WINDOW) {
            if (requestInfo.count >= MAX_REQUESTS) {
                return res.status(429).json({ success: false, message: 'Demasiadas solicitudes. Intenta de nuevo más tarde.' });
            }
            requestInfo.count += 1;
        } else {
            ipRequests.set(ip as string, { count: 1, firstRequestTime: currentTime });
        }

        const { name, email, subject, message } = req.body;

        // Validación de campos obligatorios
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
        }

        // Validación del formato del email
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: 'Correo electrónico no válido' });
        }

        const sanitizedMessage = `
            <p><strong>Nombre:</strong> ${sanitize(name)}</p>
            <p><strong>Email:</strong> ${sanitize(email)}</p>
            <p><strong>Mensaje:</strong> ${sanitize(message)}</p>
        `;

        try {
            await axios.post(
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

            res.status(200).json({ success: true, message: 'Correo enviado con éxito' });
        } catch (error) {
            console.error('Error al enviar correo:', error);
            res.status(500).json({ success: false, message: 'Hubo un error al enviar el correo' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Método no permitido' });
    }
}
