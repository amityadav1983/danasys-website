import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: 'About Us', path: '/about' },
            { label: 'Services', path: '/services' },
            { label: 'Portfolio', path: '/portfolio' },
            { label: 'Contact', path: '/contact' }
        ],
        services: [
            { label: 'Web Development', path: '/services' },
            { label: 'Mobile Apps', path: '/services' },
            { label: 'Cloud Solutions', path: '/services' },
            { label: 'IT Consulting', path: '/services' }
        ],
        social: [
            { icon: Linkedin, label: 'LinkedIn', href: '#' },
            { icon: Twitter, label: 'Twitter', href: '#' },
            { icon: Github, label: 'GitHub', href: '#' },
            { icon: Facebook, label: 'Facebook', href: '#' }
        ]
    };

    return (
        <footer className="bg-sky-100/50 border-t border-blue-200"> {/* Adjusted background and border for light theme */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-2 rounded-lg">
                                <Code2 className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold gradient-text">Danasys</span>
                        </div>
                        <p className="text-slate-700 mb-4"> {/* Changed text color */}
                            Transforming businesses through innovative technology solutions since 2017.
                        </p>
                        <div className="flex space-x-4">
                            {footerLinks.social.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors" /* Adjusted background for light theme */
                                >
                                    <social.icon className="h-5 w-5 text-slate-700 hover:text-cyan-600 transition-colors" /> {/* Adjusted icon colors */}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <span className="text-lg font-semibold mb-4 block text-slate-900">Company</span> {/* Changed text color */}
                        <ul className="space-y-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-700 hover:text-cyan-600 transition-colors" /* Adjusted link colors */
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <span className="text-lg font-semibold mb-4 block text-slate-900">Services</span> {/* Changed text color */}
                        <ul className="space-y-2">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-700 hover:text-cyan-600 transition-colors" /* Adjusted link colors */
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <span className="text-lg font-semibold mb-4 block text-slate-900">Contact</span> {/* Changed text color */}
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-slate-700"> {/* Changed text color */}
                                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-cyan-600" /> {/* Adjusted icon color */}
                                <span>contact@danasys.in</span>
                            </li>
                            <li className="flex items-start space-x-3 text-slate-700"> {/* Changed text color */}
                                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-cyan-600" /> {/* Adjusted icon color */}
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start space-x-3 text-slate-700"> {/* Changed text color */}
                                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-cyan-600" /> {/* Adjusted icon color */}
                                <span>819A, Oak Business Tower, Paramount Golfforeste, Greater Noida, UP, India 201306</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-blue-200 text-center text-slate-700"> {/* Adjusted border and text color for light theme */}
                    <p>&copy; {currentYear} Danasys Consultancy Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;