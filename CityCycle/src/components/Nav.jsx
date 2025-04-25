import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBiking, FaSearch } from 'react-icons/fa';

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine navbar style based on page and scroll
    const getNavStyle = () => {
        if (!isHomePage) {
            return 'bg-white shadow-lg text-slate-900';
        }
        return isScrolled ? 'bg-white shadow-lg' : 'bg-transparent';
    };

    // Determine text color based on page and scroll
    const getTextColor = () => {
        if (!isHomePage) {
            return 'text-slate-900';
        }
        return isScrolled ? 'text-slate-900' : 'text-white';
    };

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 py-2 ${getNavStyle()}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-6">
                            <Link to="/" className="flex items-center space-x-2 group">
                                <i className={`fa-solid fa-biking text-3xl transition-transform duration-300 group-hover:rotate-12 ${getTextColor()}`}></i>
                                <div className={`text-2xl font-bold transition-colors duration-300 ${getTextColor()}`}>
                                    CityCycle
                                </div>
                            </Link>
                            
                           
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                to="/"
                                className={`font-medium text-lg relative group ${getTextColor()}`}
                            >
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            
                            <Link
                                to="/find-bikes"
                                className={`font-medium text-lg relative group ${getTextColor()}`}
                            >
                                Find a Bike
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            
                            <Link
                                to="/station"
                                className={`font-medium text-lg relative group ${getTextColor()}`}
                            >
                                Stations
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            
                            <Link
                                to="/price"
                                className={`font-medium text-lg relative group ${getTextColor()}`}
                            >
                                Pricing
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            
                            <Link
                                to="/contact"
                                className={`font-medium text-lg relative group ${getTextColor()}`}
                            >
                                Contact
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                            </Link>

                            <NavLink to="/sain">
                                <button className="relative overflow-hidden font-medium text-[15px] rounded-full px-5 py-2.5 text-white bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transform hover:-translate-y-0.5 active:translate-y-0 flex items-center group">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-800/0 via-slate-800/40 to-slate-800/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                                    <i className="fa-solid fa-fingerprint text-[17px] mr-2 group-hover:scale-110 transition-all duration-300"></i>
                                    <span className="relative">Sign In</span>
                                </button>
                            </NavLink>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center space-x-4">
                            {/* Quick Find Bike Button for Mobile */}
                            {location.pathname !== '/find-bikes' && (
                                <Link
                                    to="/find-bikes"
                                    className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                                >
                                    <FaBiking className="text-lg" />
                                </Link>
                            )}
                            
                            <button
                                className="font-medium text-lg rounded-full p-2 text-white bg-slate-800 hover:bg-slate-900 transition-all duration-300 hover:shadow-lg cursor-pointer"
                            >
                                <i className="fa-solid fa-user-tie"></i>
                            </button>
                            
                            <button 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`focus:outline-none transition-colors duration-300 ${getTextColor()}`}
                            >
                                <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen 
                            ? 'max-h-screen opacity-100' 
                            : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
                            <Link
                                to="/"
                                className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 text-slate-900 hover:bg-slate-100"
                            >
                                Home
                            </Link>
                            
                            <Link
                                to="/find-bikes"
                                className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 bg-blue-50 text-blue-600 hover:bg-blue-100"
                            >
                                <div className="flex items-center space-x-2">
                                    <FaBiking />
                                    <span>Find a Bike</span>
                                </div>
                            </Link>
                            
                            <Link
                                to="/station"
                                className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 text-slate-900 hover:bg-slate-100"
                            >
                                Stations
                            </Link>
                            
                            <Link
                                to="/price"
                                className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 text-slate-900 hover:bg-slate-100"
                            >
                                Pricing
                            </Link>
                            
                            <Link
                                to="/contact"
                                className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 text-slate-900 hover:bg-slate-100"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
