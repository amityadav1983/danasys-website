import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const PortfolioPage = () => {
    const { toast } = useToast();
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            title: 'E-Commerce Platform',
            category: 'web',
            description: 'Full-featured online shopping platform with payment integration',
            image: 'Modern e-commerce website interface with shopping cart',
            tech: ['React', 'Node.js', 'MongoDB']
        },
        {
            title: 'Healthcare Mobile App',
            category: 'mobile',
            description: 'Patient management and telemedicine application',
            image: 'Healthcare mobile app interface on smartphone',
            tech: ['React Native', 'Firebase', 'AWS']
        },
        {
            title: 'Financial Dashboard',
            category: 'web',
            description: 'Real-time analytics and reporting dashboard',
            image: 'Financial analytics dashboard with charts and graphs',
            tech: ['Vue.js', 'Python', 'PostgreSQL']
        },
        {
            title: 'Fitness Tracking App',
            category: 'mobile',
            description: 'Comprehensive fitness and nutrition tracking solution',
            image: 'Fitness tracking mobile application interface',
            tech: ['Flutter', 'GraphQL', 'Docker']
        },
        {
            title: 'Cloud Migration',
            category: 'cloud',
            description: 'Enterprise infrastructure migration to AWS',
            image: 'Cloud infrastructure architecture diagram',
            tech: ['AWS', 'Kubernetes', 'Terraform']
        },
        {
            title: 'AI Chatbot Platform',
            category: 'ai',
            description: 'Intelligent customer service automation',
            image: 'AI chatbot interface with conversation flow',
            tech: ['Python', 'TensorFlow', 'NLP']
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Development' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'cloud', label: 'Cloud Solutions' },
        { id: 'ai', label: 'AI & ML' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const handleProjectClick = () => {
        toast({
            title: "🚧 Project Details",
            description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };

    return (
        <>
            <Helmet>
                <title>Portfolio - Danasys Consultancy Services</title>
                <meta name="description" content="Explore our portfolio of successful projects including web applications, mobile apps, cloud solutions, and AI implementations. See our work in action." />
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
                                Our <span className="gradient-text">Portfolio</span>
                            </h1>
                            <p className="text-xl text-slate-700 max-w-3xl mx-auto"> {/* Changed text color */}
                                Showcasing our successful projects and the innovative solutions we've delivered for clients worldwide
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Filter Buttons */}
                <section className="pb-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-4">
                            {filters.map((filter) => (
                                <Button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    variant={activeFilter === filter.id ? 'default' : 'outline'}
                                    className={activeFilter === filter.id
                                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white' /* Adjusted button style for light theme */
                                        : 'border-blue-300 text-blue-600 hover:bg-blue-100'} /* Adjusted button style for light theme */
                                >
                                    {filter.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-200 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer" /* Adjusted background and border for light theme */
                                    onClick={handleProjectClick}
                                >
                                    <div className="relative overflow-hidden">
                                        <img alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-sky-50 via-sky-50/50 to-transparent opacity-60" /> {/* Adjusted gradient for light theme */}
                                        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"> {/* Adjusted background for light theme */}
                                            <ExternalLink className="h-5 w-5 text-cyan-600" /> {/* Adjusted icon color */}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold mb-2 text-slate-900 group-hover:text-cyan-600 transition-colors"> {/* Changed text color */}
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-700 mb-4">{project.description}</p> {/* Changed text color */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 text-xs rounded-full bg-blue-100 text-cyan-600 border border-blue-200" /* Adjusted background and border for light theme */
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
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

export default PortfolioPage;