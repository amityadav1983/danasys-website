import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Cloud, Shield, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const HomePage = () => {
    const services = [
        {
            icon: Code,
            title: 'Web Development',
            description: 'Custom web applications built with cutting-edge technologies'
        },
        {
            icon: Smartphone,
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile solutions for iOS and Android'
        },
        {
            icon: Cloud,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and migration services'
        },
        {
            icon: Shield,
            title: 'Cybersecurity',
            description: 'Comprehensive security audits and implementation'
        },
        {
            icon: Zap,
            title: 'API Development',
            description: 'Robust and scalable API solutions for your business'
        },
        {
            icon: Users,
            title: 'IT Consulting',
            description: 'Strategic technology consulting and digital transformation'
        }
    ];

    const stats = [
        { number: '150+', label: 'Projects Delivered' },
        { number: '50+', label: 'Happy Clients' },
        { number: '8+', label: 'Years Experience' },
        { number: '25+', label: 'Team Members' }
    ];

    return (
        <>
            <Helmet>
                <title>Danasys Consultancy Services - Leading IT Solutions Provider</title>
                <meta name="description" content="Danasys Consultancy Services offers cutting-edge web development, mobile apps, cloud solutions, and IT consulting services. Transform your business with our expert team." />
            </Helmet>

            <div className="min-h-screen bg-sky-50"> {/* Changed background to light sky blue */}
                <Navbar />

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 via-cyan-200/10 to-teal-200/10" /> {/* Adjusted gradient for light theme */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMTAwLDEwMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" /> {/* Adjusted grid pattern for light theme */}

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900"> {/* Changed text color */}
                                    Transform Your Business with{' '}
                                    <span className="gradient-text">Innovative IT Solutions</span>
                                </h1>
                                <p className="text-xl text-slate-700 mb-8 leading-relaxed"> {/* Changed text color */}
                                    Danasys Consultancy Services delivers cutting-edge web and mobile applications,
                                    cloud solutions, and strategic IT consulting to drive your digital transformation.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/contact">
                                        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white group">
                                            Get Started
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    <Link to="/services">
                                        <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-100"> {/* Adjusted button style for light theme */}
                                            Our Services
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <img alt="Modern software development team collaborating" className="rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1681992894234-6db66a592c29" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 px-4 bg-sky-100/50"> {/* Changed background to light sky blue */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-slate-700">{stat.label}</div> {/* Changed text color */}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Preview */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"> {/* Changed text color */}
                                Our <span className="gradient-text">Services</span>
                            </h2>
                            <p className="text-xl text-slate-700 max-w-2xl mx-auto"> {/* Changed text color */}
                                Comprehensive IT solutions tailored to your business needs
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-blue-200 hover:border-cyan-400/50 transition-all duration-300" /* Adjusted background and border for light theme */
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <service.icon className="h-12 w-12 text-cyan-600 mb-4 group-hover:scale-110 transition-transform" /> {/* Adjusted icon color */}
                                    <h3 className="text-2xl font-semibold mb-3 text-slate-900">{service.title}</h3> {/* Changed text color */}
                                    <p className="text-slate-700">{service.description}</p> {/* Changed text color */}
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mt-12"
                        >
                            <Link to="/services">
                                <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-100"> {/* Adjusted button style for light theme */}
                                    View All Services
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 bg-gradient-to-r from-blue-200/10 via-cyan-200/10 to-teal-200/10"> {/* Adjusted gradient for light theme */}
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"> {/* Changed text color */}
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-xl text-slate-700 mb-8"> {/* Changed text color */}
                                Let's discuss how we can help you achieve your digital goals
                            </p>
                            <Link to="/contact">
                                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                                    Contact Us Today
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default HomePage;