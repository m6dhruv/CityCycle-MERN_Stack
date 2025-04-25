import { useEffect, useState } from 'react';
import hero from '../images/hero.jpg'

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main className="relative h-screen overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0 transform scale-105">
                <img
                    className="absolute w-full h-full object-cover transform scale-100 transition-transform duration-[3000ms]"
                    src={hero}
                    alt="City bikes"
                    style={{
                        transform: `scale(${isVisible ? '1' : '1.1'})`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 h-[calc(110vh-88px)] flex items-center">
                <div className="max-w-2xl">
                    {/* Animated Title */}
                    <h1
                        className={`text-5xl md:text-6xl font-bold text-white mb-8 transition-all duration-1000 transform
                            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                        `}
                    >
                        <span className="block">Explore the City on Two</span>
                        <span className="block mt-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Wheels
                        </span>
                    </h1>

                    {/* Animated Description */}
                    <p
                        className={`text-xl text-white/90 mb-10 leading-relaxed transition-all duration-1000 delay-300 transform
                            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                        `}
                    >
                        Join thousands of riders who choose CityCycle for convenient,
                        eco-friendly urban transportation. Rent a bike instantly and
                        ride anywhere in the city.
                    </p>

                    {/* Animated Buttons */}
                    <div
                        className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 transform
                            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                        `}
                    >
                        {/* Primary Button - Find a Bike */}
                        <button
                            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-900 text-white px-6 py-3 rounded-lg text-base font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 cursor-pointer"
                        >
                            <span className="relative z-10 flex items-center">
                                <i className="fa-solid fa-biking text-sm mr-2 transition-transform group-hover:translate-x-0.5"></i>
                                Find a Bike
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        {/* Secondary Button - Learn More */}
                        <button
                            className="group relative inline-flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 text-white px-6 py-3 rounded-lg text-base font-medium overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 cursor-pointer"
                        >
                            <span className="relative z-10 flex items-center">
                                <i className="fa-solid fa-circle-question text-sm mr-2 transform transition-transform group-hover:scale-110"></i>
                                Learn More
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </main>

    )
}

export default Hero;