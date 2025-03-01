import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white shadow-lg py-2' 
                    : 'bg-transparent py-3'
            }`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-2 group">
                            <i className={`fa-solid fa-biking text-3xl transition-transform duration-300 group-hover:rotate-12 ${
                                isScrolled ? 'text-slate-900' : 'text-white'
                            }`}></i>
                            <div className={`text-2xl font-bold transition-colors duration-300 ${
                                isScrolled ? 'text-slate-900' : 'text-white'
                            }`}>
                                CityCycle
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Home', 'Find a Bike', 'Stations', 'Pricing', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={item === 'Home' ? '/' : item === 'Stations' ? '/station' : `/${item.toLowerCase().replace(' ', '-')}`}
                                    className={`font-medium text-lg relative group ${
                                        isScrolled ? 'text-slate-900' : 'text-white'
                                    }`}
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                            <NavLink to="/sain">
                                <button className="font-medium text-lg rounded-3xl p-2 px-6 text-white bg-slate-800 hover:bg-slate-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center space-x-2 cursor-pointer">
                                    <i className="fa-solid fa-user-tie"></i>
                                    <span>Sign In</span>
                                </button>
                            </NavLink>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center space-x-4">
                            <button
                                className="font-medium text-lg rounded-full p-2 text-white bg-slate-800 hover:bg-slate-900 transition-all duration-300 hover:shadow-lg cursor-pointer"
                            >
                                <i className="fa-solid fa-user-tie"></i>
                            </button>
                            <button 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`focus:outline-none transition-colors duration-300 ${
                                    isScrolled ? 'text-slate-900' : 'text-white'
                                }`}
                            >
                                <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen 
                            ? 'max-h-64 opacity-100' 
                            : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                        <div className={`px-2 pt-2 pb-3 space-y-1 ${
                            isScrolled ? 'bg-white' : 'bg-slate-800/90'
                        }`}>
                            {['Home', 'Find a Bike', 'Stations', 'Pricing', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={item === 'Home' ? '/' : item === 'Stations' ? '/stations' : `/${item.toLowerCase().replace(' ', '-')}`}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                                        isScrolled 
                                            ? 'text-slate-900 hover:bg-slate-100' 
                                            : 'text-white hover:bg-slate-700'
                                    }`}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
