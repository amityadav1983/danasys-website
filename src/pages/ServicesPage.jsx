import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Shield, Zap, Users, Database, Cpu, Globe, Lock, Layers, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
    const services = [
        {
            icon: Code,
            title: 'Web Development',
            description: 'Custom web applications built with modern frameworks like React, Vue, and Angular. We create responsive, fast, and scalable solutions.',
            features: ['Custom Web Apps', 'E-commerce Solutions', 'CMS Development', 'Progressive Web Apps']
        },
        {
            icon: Smartphone,
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native technologies.',
            features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Maintenance']
        },
        {
            icon: Cloud,
            title: 'Cloud Solutions',
            description: 'Comprehensive cloud services including migration, infrastructure setup, and optimization on AWS, Azure, and Google Cloud.',
            features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Services', 'Cloud Optimization']
        },
        {
            icon: Database,
            title: 'Database Management',
            description: 'Expert database design, optimization, and management for SQL and NoSQL databases ensuring data integrity and performance.',
            features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup Solutions']
        },
        {
            icon: Shield,
            title: 'Cybersecurity',
            description: 'Comprehensive security audits, penetration testing, and implementation of robust security measures to protect your digital assets.',
            features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Training']
        },
        {
            icon: Zap,
            title: 'API Development',
            description: 'Design and development of RESTful and GraphQL APIs that are scalable, secure, and well-documented for seamless integration.',
            features: ['RESTful APIs', 'GraphQL APIs', 'API Documentation', 'Third-party Integration']
        },
        {
            icon: Users,
            title: 'IT Consulting',
            description: 'Strategic technology consulting to help you make informed decisions about your IT infrastructure and digital transformation.',
            features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Tech Stack Selection']
        },
        {
            icon: Cpu,
            title: 'AI & Machine Learning',
            description: 'Implement intelligent solutions using artificial intelligence and machine learning to automate processes and gain insights.',
            features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Chatbots']
        },
        {
            icon: Globe,
            title: 'UI/UX Design',
            description: 'User-centered design approach creating intuitive and engaging interfaces that enhance user experience and drive conversions.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
        },
        {
            icon: Lock,
            title: 'Blockchain Development',
            description: 'Develop secure and transparent blockchain solutions including smart contracts and decentralized applications.',
            features: ['Smart Contracts', 'DApps', 'Cryptocurrency', 'NFT Platforms']
        },
        {
            icon: Layers,
            title: 'Enterprise Solutions',
            description: 'Large-scale enterprise applications designed to streamline operations, improve efficiency, and support business growth.',
            features: ['ERP Systems', 'CRM Solutions', 'Business Intelligence', 'Workflow Automation']
        },
        {
            icon: TrendingUp,
            title: 'Digital Marketing',
            description: 'Comprehensive digital marketing services including SEO, content marketing, and analytics to grow your online presence.',
            features: ['SEO Optimization', 'Content Strategy', 'Analytics', 'Social Media']
        }
    ];

    return (
        <>
            <Helmet>
                <title>Our Services - Danasys Consultancy Services</title>
                <meta name="description" content="Explore our comprehensive IT services including web development, mobile apps, cloud solutions, cybersecurity, and more. Expert solutions for your business needs." />
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
                                Our <span className="gradient-text">Services</span>
                            </h1>
                            <p className="text-xl text-slate-700 max-w-3xl mx-auto"> {/* Changed text color */}
                                Comprehensive IT solutions designed to drive innovation and accelerate your business growth
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-blue-200 hover:border-cyan-400/50 transition-all duration-300" /* Adjusted background and border for light theme */
                                >
                                    <service.icon className="h-12 w-12 text-cyan-600 mb-4 group-hover:scale-110 transition-transform" /> {/* Adjusted icon color */}
                                    <h3 className="text-2xl font-semibold mb-3 text-slate-900">{service.title}</h3> {/* Changed text color */}
                                    <p className="text-slate-700 mb-6">{service.description}</p> {/* Changed text color */}
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-slate-700"> {/* Changed text color */}
                                                <div className="h-1.5 w-1.5 rounded-full bg-cyan-600 mr-2" /> {/* Adjusted bullet color */}
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default ServicesPage;