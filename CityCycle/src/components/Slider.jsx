import { useState, useEffect } from 'react';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "./src/images/Slider1.jpg",
      title: "MYBYK Electric",
      subtitle: "with PowerPedal™",
      description: "Take your commuting to the next level with our PowerPedal™ enabled e-bike and make your daily rides a breeze. Ride worry free of gas prices, traffic jams, and sweaty commutes."
    },
    {
      image: "./src/images/Slider2.jpg",
      title: "Smart Lock System",
      subtitle: "Secure & Convenient",
      description: "Our advanced smart lock system ensures your bike is always secure. Unlock with just your smartphone and ride away in seconds."
    },
    {
      image: "./src/images/Slider3.jpg",
      title: "Urban Mobility",
      subtitle: "Designed for City Life",
      description: "Navigate through city streets with ease. Perfect for commuting, errands, or leisure rides with comfortable seating and ample storage."
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pb-16 sm:pb-20 pt-6 sm:pt-10 bg-gradient-to-b from-white to-slate-50 ">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8 sm:mb-12">
          Experience the Future of Urban Mobility
        </h2>
        <div className="relative h-[600px] sm:h-[500px] md:h-[450px] max-w-6xl overflow-hidden rounded-xl sm:rounded-2xl bg-slate-900 shadow-xl mx-auto group">
          {/* Slides */}
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`duration-700 ease-in-out absolute w-full h-full transition-opacity ${
                  currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="relative h-[200px] sm:h-[250px] md:h-full">
                    <img 
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                  </div>
                  <div className="relative p-4 sm:p-6 md:p-10 flex items-center bg-white">
                    <div className="transform transition-all duration-500 translate-y-0">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-slate-800 font-semibold mb-2 sm:mb-3">
                        {slide.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {slide.description}
                      </p>
                      <button className="bg-slate-700 hover:bg-slate-800 text-white px-4 sm:px-5 py-2 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 sm:p-3 rounded-full shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 sm:p-3 rounded-full shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators - Adjusted for mobile */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index 
                    ? 'bg-white w-4 sm:w-6' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;