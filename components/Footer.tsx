"use client";
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

declare global {
    interface Window {
        grecaptcha: {
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        }
    }
}

const Footer = () => {
    const t = useTranslations('contact');
    const tf = useTranslations('footer');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [, setCaptchaToken] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            console.log('reCAPTCHA script loaded');
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
            console.error('Error getting reCAPTCHA token', error);
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

            if (!formData.name || !formData.email || !formData.subject || !formData.message || !token) {
                setStatusMessage(t('errorMessage'));
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

            if (response.ok && data.success) {
                setStatusMessage(t('successMessage'));
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatusMessage(data.message || t('errorMessage'));
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatusMessage(t('errorMessage'));
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
        <footer id="contact" className="bg-[#35344A] text-white py-16 px-4 w-full">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                  className="text-4xl font-bold mb-6 text-center text-[#E88FBF]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {t('title')}
                </motion.h2>

                <motion.p
                  className="mb-8 text-lg text-gray-300 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {t('emailText')}{' '}
                    <a
                        href="mailto:ivan_schwab@outlook.com"
                        className="text-[#f88dc6] hover:text-[#c97fa7] transition-colors duration-300 font-semibold"
                    >
                        ivan_schwab@outlook.com
                    </a>{' '}
                    {t('formText')}
                </motion.p>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder={t('namePlaceholder')}
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7441c7] bg-[#272537] text-white transition-all duration-300"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder={t('emailPlaceholder')}
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7441c7] bg-[#272537] text-white transition-all duration-300"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="subject"
                            placeholder={t('emailPlaceholder').replace(t('emailPlaceholder'), 'Asunto / Subject')}
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7441c7] bg-[#272537] text-white transition-all duration-300"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder={t('messagePlaceholder')}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7441c7] bg-[#272537] text-white min-h-[8rem] max-h-[12rem] resize-y transition-all duration-300"
                            required
                            minLength={10}
                            maxLength={500}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        onClick={handleCaptcha}
                        className={`w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#7441c7] to-[#E88FBF] text-white font-semibold transition-all duration-300 ${
                          isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-2xl hover:scale-[1.02] transform'
                        }`}
                    >
                        {isSubmitting ? t('sending') : t('sendButton')}
                    </button>
                </motion.form>

                {statusMessage && (
                    <motion.div
                      className="mt-6 text-center text-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                        <p className={statusMessage.includes('éxito') || statusMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}>
                          {statusMessage}
                        </p>
                    </motion.div>
                )}

                <div className="mt-12 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Iván Schwab. {tf('rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
