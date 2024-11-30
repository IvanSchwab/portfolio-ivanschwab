"use client";
import React, { useState } from 'react';
import "aos/dist/aos.css";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('Enviando...');

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), 
            });

            if (response.ok) {
                setStatusMessage('¡Correo enviado con éxito!');
                setFormData({ name: '', email: '', subject: '', message: '' }); 
            } else {
                setStatusMessage('Hubo un error al enviar el correo.');
            }
        } catch (error) {
            console.error('Error al enviar correo:', error);
            setStatusMessage('Hubo un error al enviar el correo.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        className={`w-full px-6 py-3 rounded-lg bg-[#7441c7] text-white transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#6a2fb4]'
                            }`}
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
