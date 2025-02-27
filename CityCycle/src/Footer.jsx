function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <i className="text-white fa-solid fa-biking text-2xl transform transition-transform group-hover:scale-110 group-hover:rotate-12"></i>
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                CityCycle
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300">
                            Making urban mobility sustainable, convenient, and fun.
                        </p>
                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center 
                                    transition-all duration-300 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-800/30">
                                    <i className={`fa-brands fa-${social} text-gray-400 hover:text-white transition-colors`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 relative inline-block">
                            Quick Links
                            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-500 rounded-full"></div>
                        </h4>
                        <ul className="space-y-3">
                            {['About Us', 'Locations', 'Pricing', 'Safety'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 relative inline-block">
                            Support
                            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-500 rounded-full"></div>
                        </h4>
                        <ul className="space-y-3">
                            {['Help Center', 'Contact Us', 'Terms of Service', 'Privacy Policy'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 relative inline-block">
                            Contact
                            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-500 rounded-full"></div>
                        </h4>
                        <div className="space-y-4">
                            <a href="tel:1-800-CITYCYCLE" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <span>1-800-CITYCYCLE</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div>
                                    <p>123 Bike Street</p>
                                    <p>New York, NY 10001</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                        &copy; 2025 CityCycle. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;