'use client';

import React, { useState } from 'react';
import { contactData } from '@/lib/siteData';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <>
            <h1 id="get-in-touch" className="font-outfit font-medium text-charcoal text-6xl xl:text-7xl leading-[1.2] dark:text-white">Get In Touch</h1>
            <div className="lg:flex space-y-10 lg:space-y-0 mt-8">
                <div className="lg:w-2/5 lg:order-2 lg:ml-12 bg-steelBlue lg:h-fit p-8 md:p-10 xl:p-12 rounded-3xl shadow-customShadow hover:shadow-customShadowHover transition ease-out duration-150 dark:bg-steelBlueDarker">
                    <h5 className="font-outfit font-medium text-xl text-white">Phone:</h5>
                    {contactData.phoneNumbers.map((phone, index) => (
                        <p className="text-white/80" key={index}>{phone}</p>
                    ))}
                    <div className="mt-5">
                        <h5 className="font-outfit font-medium text-xl text-white">Email:</h5>
                        {contactData.emails.map((email, index) => (
                            <p className="text-white/80" key={index}>{email}</p>
                        ))}
                    </div>
                    <div className="mt-4">
                        <h5 id="address" className="font-outfit font-medium text-xl text-white">Address:</h5>
                        {contactData.address.map((address, index) => (
                            <p className="text-white/80" key={index}>{address}</p>
                        ))}
                    </div>
                </div>
                <div className="lg:w-3/5 lg:order-1">
                    {/* Contact Form */}
                    <div className="contact-form">
                        <form className="space-y-4" id="contactform" onSubmit={handleSubmit}>
                            <div className="flex w-full space-x-4">
                                <div className="w-1/2">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                        className="bg-white/30 w-full border border-charcoal/30 border-dashed rounded-3xl px-6 py-3 text-black/60 placeholder:text-black/50 transition ease-out duration-[120ms] focus:outline-none focus:border-charcoal dark:bg-charcoal/30 dark:border-white/30 dark:text-white/80 dark:placeholder:text-white/50 dark:focus:border-white"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-Mail"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                        className="bg-white/30 w-full border border-charcoal/30 border-dashed rounded-3xl px-6 py-3 text-black/60 placeholder:text-black/50 transition ease-out duration-[120ms] focus:outline-none focus:border-charcoal dark:bg-charcoal/30 dark:border-white/30 dark:text-white/80 dark:placeholder:text-white/50 dark:focus:border-white"
                                    />
                                </div>
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                disabled={status === 'loading'}
                                className="w-full bg-white/30 border border-charcoal/30 border-dashed rounded-3xl px-6 py-3 text-black/60 placeholder:text-black/50 transition ease-out duration-[120ms] focus:outline-none focus:border-charcoal dark:bg-charcoal/30 dark:border-white/30 dark:text-white/80 dark:placeholder:text-white/50 dark:focus:border-white"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                disabled={status === 'loading'}
                                className="bg-white/30 w-full h-44 border border-charcoal/30 border-dashed rounded-3xl px-6 py-3 text-black/60 placeholder:text-black/50 transition ease-out duration-[120ms] focus:outline-none focus:border-charcoal dark:bg-charcoal/30 dark:border-white/30 dark:text-white/80 dark:placeholder:text-white/50 dark:focus:border-white"
                            ></textarea>
                            <button
                                className="inline-block bg-charcoal text-white px-8 py-4 rounded-full font-outfit font-normal transition linear duration-100 hover:bg-charcoal/90 dark:bg-white/10 dark:hover:bg-white/15"
                                type="submit"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                            <div className="submit-result">
                                {status === 'success' && <p id="success" className="show-result transition-all duration-200 ease-out text-green-600">Thank you! Your Message has been sent.</p>}
                                {status === 'error' && <p id="error" className="show-result transition-all duration-200 ease-out text-red-600">Something went wrong, Please try again!</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};