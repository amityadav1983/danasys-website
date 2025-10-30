import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import nehaImg from "../assets/images/neha.jpeg";
import kishanpalImg from "../assets/images/keshav.jpeg";
import spImg from "../assets/images/sp.png";
import piyushImg from "../assets/images/piyush.png";
import niteshImg from "../assets/images/nitesh.png";

const AboutPage = () => {
    const values = [
        {
            icon: Target,
            title: 'Innovation',
            description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
        },
        {
            icon: Eye,
            title: 'Transparency',
            description: 'Open communication and honest relationships with our clients are at the core of our business.'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We strive for perfection in every project, ensuring the highest quality standards.'
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'We work closely with our clients as partners to achieve shared success.'
        }
    ];

    const team = [
        { name: 'Neha Y', role: 'CEO & Founder', image: nehaImg },
        { name: 'SP Mishra', role: 'CTO  & Director', image: spImg },
        { name: 'Kishanpal', role: 'COO & Director', image: kishanpalImg },
        { name: 'Piyush Sharma', role: 'Tech Lead', image: piyushImg },
        { name: 'Nitesh Thankur', role: 'UI Lead', image: niteshImg }
    ];

    return (
        <>
            <Helmet>
                <title>About Us - Danasys Consultancy Services</title>
                <meta name="description" content="Learn about Danasys Consultancy Services, our mission, values, and the expert team behind innovative IT solutions. 8+ years of excellence in technology." />
            </Helmet>

            <div className="min-h-screen bg-sky-50"> {/* Changed background to light sky blue */}
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900"> {/* Changed text color */}
                                    About <span className="gradient-text">Danasys</span>
                                </h1>
                                <p className="text-xl text-slate-700 mb-6 leading-relaxed"> {/* Changed text color */}
                                    Founded in 2024, Danasys Consultancy Services has been at the forefront of digital innovation,
                                    helping businesses transform their operations through cutting-edge technology solutions.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed"> {/* Changed text color */}
                                    With over 2 years of experience and a team of 15+ dedicated professionals, we've successfully
                                    delivered 5+ projects across various industries, earning the trust of 13+ satisfied clients worldwide.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img alt="Danasys team collaborating in modern office" className="rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 px-4 bg-sky-100/50"> {/* Changed background to light sky blue */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-200/10 to-cyan-200/10 rounded-2xl p-8 border border-blue-200" /* Adjusted background and border for light theme */
                            >
                                <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
                                <p className="text-slate-700 text-lg leading-relaxed"> {/* Changed text color */}
                                    To empower businesses with innovative technology solutions that drive growth, efficiency,
                                    and competitive advantage in the digital age. We are committed to delivering excellence
                                    through collaboration, creativity, and cutting-edge expertise.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-teal-200/10 to-blue-200/10 rounded-2xl p-8 border border-blue-200" /* Adjusted background and border for light theme */
                            >
                                <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
                                <p className="text-slate-700 text-lg leading-relaxed"> {/* Changed text color */}
                                    To be the most trusted technology partner for businesses worldwide, recognized for our
                                    innovation, reliability, and transformative impact. We envision a future where technology
                                    seamlessly integrates with business to create unlimited possibilities.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"> {/* Changed text color */}
                                Our <span className="gradient-text">Values</span>
                            </h2>
                            <p className="text-xl text-slate-700 max-w-2xl mx-auto"> {/* Changed text color */}
                                The principles that guide everything we do
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 mb-4 group-hover:scale-110 transition-transform">
                                        <value.icon className="h-8 w-8 text-cyan-600" /> {/* Adjusted icon color */}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-slate-900">{value.title}</h3> {/* Changed text color */}
                                    <p className="text-slate-700">{value.description}</p> {/* Changed text color */}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-20 px-4 bg-sky-100/50"> {/* Changed background to light sky blue */}
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"> {/* Changed text color */}
                                Meet Our <span className="gradient-text">Team</span>
                            </h2>
                            <p className="text-xl text-slate-700 max-w-2xl mx-auto"> {/* Changed text color */}
                                Talented professionals dedicated to your success
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="relative overflow-hidden rounded-xl mb-4">
                                        <img alt={`${member.name} - ${member.role}`} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" src={member.image} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-sky-50 via-transparent to-transparent opacity-60" /> {/* Adjusted gradient for light theme */}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1 text-slate-900">{member.name}</h3> {/* Changed text color */}
                                    <p className="text-cyan-600">{member.role}</p> {/* Adjusted text color */}
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

export default AboutPage;