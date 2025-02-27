function Cart() {
    const steps = [
        {
            icon: "fa-location-dot",
            title: "Find a Station",
            description: "Locate the nearest bike station using our real-time map",
            gradient: "from-blue-500 to-indigo-500"
        },
        {
            icon: "fa-credit-card",
            title: "Pay & Unlock",
            description: "Choose your plan and unlock a bike instantly",
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            icon: "fa-biking",
            title: "Ride & Return",
            description: "Enjoy your ride and return to any station",
            gradient: "from-violet-500 to-purple-500"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        How CityCycle Works
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            className="group relative perspective-1000"
                        >
                            <div className="bg-white rounded-2xl p-8 transition-all duration-500 transform hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 border border-slate-100">
                                {/* Minimal Icon Container */}
                                <div className={`
                                    w-10 h-10 mx-auto mb-6 rounded-lg 
                                    bg-slate-100 
                                    flex items-center justify-center 
                                    transition-all duration-300 
                                    group-hover:bg-gradient-to-br ${step.gradient}
                                `}>
                                    <i className={`fa-solid ${step.icon} text-base text-slate-700 
                                        group-hover:text-white transition-colors duration-300`}></i>
                                </div>

                                {/* Content */}
                                <div className="text-center relative z-10">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Bottom Accent */}
                                <div className={`
                                    absolute bottom-0 left-0 right-0 h-1 
                                    bg-gradient-to-r ${step.gradient}
                                    transform scale-x-0 group-hover:scale-x-100 
                                    transition-transform duration-500 rounded-b-2xl
                                `}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Minimal Modern Button */}
                <div className="text-center mt-16">
                    <button className="group relative inline-flex items-center gap-3 px-8 py-3 
                        bg-slate-800 text-white text-base font-medium rounded-lg
                        transition-all duration-300
                        hover:bg-slate-900 hover:-translate-y-0.5 hover:shadow-sm">
                        
                        {/* Button Content */}
                        <span>Start Your Journey</span>

                        {/* Simple Arrow Container */}
                        <span className="flex items-center justify-center 
                            w-6 h-6 rounded-full bg-white/10 
                            transition-all duration-300
                            group-hover:bg-white/20 group-hover:translate-x-0.5">
                            <i className="fa-solid fa-arrow-right text-xs"></i>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Cart;