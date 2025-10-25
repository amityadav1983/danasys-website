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

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "🚧 Form Submission",
            description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            details: 'info@danasys.in',
            link: 'mailto:info@danasys.in'
        },
        {
            icon: Phone,
            title: 'Phone',
            details: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: MapPin,
            title: 'Office',
            details: 'B-275, Paramount Golfforeste, Greater Noida, UP, India',
            link: '#'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Contact Us - Danasys Consultancy Services</title>
                <meta name="description" content="Get in touch with Danasys Consultancy Services. Contact us for IT consulting, web development, mobile apps, and technology solutions. We're here to help!" />
            </Helmet>

            <div className="min-h-screen bg-sky-50"> {/* Changed background to light sky blue */}
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900"> {/* Changed text color */}
                                Get In <span className="gradient-text">Touch</span>
                            </h1>
                            <p className="text-xl text-slate-700 max-w-3xl mx-auto"> {/* Changed text color */}
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
                                    className="group bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-blue-200 hover:border-cyan-400/50 transition-all duration-300 text-center" /* Adjusted background and border for light theme */
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 mb-4 group-hover:scale-110 transition-transform">
                                        <info.icon className="h-8 w-8 text-cyan-600" /> {/* Adjusted icon color */}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-slate-900">{info.title}</h3> {/* Changed text color */}
                                    <p className="text-slate-700">{info.details}</p> {/* Changed text color */}
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
                            className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-200" /* Adjusted background and border for light theme */
                        >
                            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900"> {/* Changed text color */}
                                Send Us a <span className="gradient-text">Message</span>
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700"> {/* Changed text color */}
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-blue-100/50 border border-blue-200 rounded-lg focus:outline-none focus:border-cyan-600 transition-colors text-slate-900" /* Adjusted input style for light theme */
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700"> {/* Changed text color */}
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-blue-100/50 border border-blue-200 rounded-lg focus:outline-none focus:border-cyan-600 transition-colors text-slate-900" /* Adjusted input style for light theme */
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-slate-700"> {/* Changed text color */}
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-blue-100/50 border border-blue-200 rounded-lg focus:outline-none focus:border-cyan-600 transition-colors text-slate-900" /* Adjusted input style for light theme */
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium mb-2 text-slate-700"> {/* Changed text color */}
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-blue-100/50 border border-blue-200 rounded-lg focus:outline-none focus:border-cyan-600 transition-colors text-slate-900" /* Adjusted input style for light theme */
                                            placeholder="Your Company"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700"> {/* Changed text color */}
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-blue-100/50 border border-blue-200 rounded-lg focus:outline-none focus:border-cyan-600 transition-colors resize-none text-slate-900" /* Adjusted input style for light theme */
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white group"
                                >
                                    Send Message
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