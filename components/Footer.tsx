"use client";
import React, { useState, useEffect, ChangeEvent } from 'react';
import "aos/dist/aos.css";

declare global {
    interface Window {
        grecaptcha: {
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        }
    }
}

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [, setCaptchaToken] = useState('');

    // Cargar el script de Google reCAPTCHA v3
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            console.log('reCAPTCHA script cargado');
        };
    }, []);

    const handleCaptcha = async () => {
        try {
            if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
                throw new Error('reCAPTCHA site key is not defined');
            }
            const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' });
            setCaptchaToken(token);
        } catch (error) {
            console.error('Error al obtener el token de reCAPTCHA', error);
        }
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const token = await window.grecaptcha.execute(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
                { action: 'submit' }
            );
            console.log('Captcha token:', token);

            if (!formData.name || !formData.email || !formData.subject || !formData.message || !token) {
                console.error('Faltan campos obligatorios');
                setStatusMessage('Todos los campos y el captcha son obligatorios');
                setIsSubmitting(false);
                return;
            }

            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    captchaToken: token
                }),
            });

            const data = await response.json();
            console.log('Respuesta del servidor:', data);

            if (response.ok && data.success) {
                setStatusMessage("Correo enviado exitosamente.");
            } else {
                setStatusMessage(data.message || "Hubo un problema al enviar el correo.");
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setStatusMessage('Error al enviar el formulario');
        } finally {
            setIsSubmitting(false);
        }
    };
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (

        <footer id="contact" className="bg-[#35344A] text-white py-8 px-4 w-full"
            data-aos="fade-in">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl mb-4 select-none">¡Conéctate conmigo!</h2>
                <p className="mb-6 text-lg text-gray-300">
                    Puedes escribirme a{' '}
                    <a
                        href="mailto:ivan_schwab@outlook.com"
                        className="text-[#f88dc6] hover:text-[#c97fa7] transition-colors duration-300"
                    >
                        ivan_schwab@outlook.com
                    </a>{' '}
                    o directamente por aquí:
                </p>


                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7441c7] bg-[#272537] text-white"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Tu correo electrónico"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7441c7] bg-[#272537] text-white"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Asunto"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7441c7] bg-[#272537] text-white"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Tu mensaje"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7441c7] bg-[#272537] text-white min-h-[4rem] max-h-[10rem]"
                            required
                            minLength={10}
                            maxLength={500}
                        ></textarea>

                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        onClick={handleCaptcha}
                        className={`w-full px-6 py-3 rounded-lg bg-[#7441c7] text-white transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#6a2fb4]'} `}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                </form>

                {statusMessage && (
                    <div className="mt-4 text-lg">
                        <p>{statusMessage}</p>
                    </div>
                )}

                <div className="mt-6">
                    <p>© {new Date().getFullYear()} Iván Schwab. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
