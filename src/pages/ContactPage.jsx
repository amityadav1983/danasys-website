import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const ContactPage = () => {
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [loading, setLoading] = useState(false); // <-- ADDED

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        try {
            setLoading(true);

            const payload = new FormData();
            payload.append('access_key', '73e9ab2c-57dd-4c17-8290-ac86d2907a52'); // Web3Forms key
            payload.append('from_name', 'Danasys Website');
            payload.append('subject', 'New contact message from danasys.in');
            payload.append('replyto', formData.email);

            payload.append('name', formData.name);
            payload.append('email', formData.email);
            payload.append('phone', formData.phone);
            payload.append('company', formData.company);
            payload.append('message', formData.message);

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: payload
            });

            const data = await res.json();
            if (data.success) {
                toast({
                    title: '✅ Message sent successfully',
                    description: 'Thanks! Our team will get back to you shortly.'
                });
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
            } else {
                toast({
                    title: '❌ Unable to send message',
                    description: data.message || 'Please try again in a moment.'
                });
            }
        } catch (err) {
            toast({
                title: '⚠️ Network error',
                description: 'Please check your connection and try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            details: 'contact@danasys.in',
            link: 'mailto:contact@danasys.in'
        },
        {
            icon: Phone,
            title: 'Phone',
            details: '+919311393193',
            link: 'tel:+919311393193' // <-- FIXED
        },
        {
            icon: MapPin,
            title: 'Office',
            details: '819A, Oak Business Tower, Paramount Golfforeste, Greater Noida, UP, India 201306',
            link: '#'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Contact Us - Danasys Consultancy Services</title>
                <meta
                    name="description"
                    content="Get in touch with Danasys Consultancy Services. Contact us for IT consulting, web development, mobile apps, and technology solutions. We're here to help!"
                />
            </Helmet>

            <div className="min-h-screen bg-sky-50">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
                                Get In <span className="gradient-text">Touch</span>
                            </h1>
                            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                                Have a project in mind? Let's discuss how we can help bring your vision to life
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-blue-200 hover:border-cyan-400/50 transition-all duration-300 text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 mb-4 group-hover:scale-110 transition-transform">
                                        <info.icon className="h-8 w-8 text-cyan-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-slate-900">{info.title}</h3>
                                    <p className="text-slate-700">{info.details}</p>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-200"
                        >
                            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
                                Send Us a <span className="gradient-text">Message</span>
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-blue-100/50 border border-blue-200 rounded-lg focus:outline-none focus:border-cyan-600 transition-colors text-slate-900"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-blue-100/50 border border-blue-200 rounded-lg focus:outline-none focus:border-cyan-600 transition-colors text-slate-900"
                                            placeholder="contact@danasys.in"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-slate-700">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-blue-100/50 border border-blue-200 rounded-lg focus:outline-none focus:border-cyan-600 transition-colors text-slate-900"
                                            placeholder="+91 93113 93193"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium mb-2 text-slate-700">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-blue-100/50 border border-blue-200 rounded-lg focus:outline-none focus:border-cyan-600 transition-colors text-slate-900"
                                            placeholder="Danasys Consultancy Services"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-blue-100/50 border border-blue-200 rounded-lg focus:outline-none focus:border-cyan-600 transition-colors resize-none text-slate-900"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white group"
                                >
                                    {loading ? 'Sending…' : 'Send Message'}
                                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default ContactPage;
