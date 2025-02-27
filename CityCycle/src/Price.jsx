function Price() {
    const plans = [
        {
            name: "Single Ride",
            icon: "fa-biking",
            price: "3.99",
            period: "ride",
            features: [
                { text: "30-minute ride", icon: "fa-clock" },
                { text: "Single access", icon: "fa-key" },
                { text: "Basic support", icon: "fa-headset" }
            ],
            color: "slate"
        },
        {
            name: "Day Pass",
            icon: "fa-sun",
            price: "14.99",
            period: "day",
            popular: true,
            features: [
                { text: "Unlimited rides", icon: "fa-infinity" },
                { text: "24-hour access", icon: "fa-clock" },
                { text: "Priority support", icon: "fa-headset" }
            ],
            color: "slate"
        },
        {
            name: "Monthly",
            icon: "fa-calendar",
            price: "29.99",
            period: "month",
            features: [
                { text: "Premium rides", icon: "fa-star" },
                { text: "Full access", icon: "fa-key" },
                { text: "24/7 support", icon: "fa-headset" }
            ],
            color: "slate"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Minimal Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
                    Simple Pricing
                </h2>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div key={index} 
                            className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
                        >
                            <div className={`
                                bg-white rounded-xl p-6
                                transition-all duration-300 
                                ${plan.popular 
                                    ? 'ring-2 ring-slate-900' 
                                    : 'hover:shadow-lg border border-slate-200'
                                }
                            `}>
                                {/* Plan Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                                        <i className={`fa-solid ${plan.icon} text-slate-700`}></i>
                                    </div>
                                    <h3 className="font-medium text-slate-900">{plan.name}</h3>
                                    {plan.popular && (
                                        <span className="ml-auto text-xs font-medium bg-slate-900 text-white px-2.5 py-1 rounded-full">
                                            Popular
                                        </span>
                                    )}
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-baseline">
                                        <span className="text-3xl font-bold text-slate-900">
                                            ${plan.price}
                                        </span>
                                        <span className="text-sm text-slate-600 ml-1">
                                            /{plan.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-3 mb-6">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                                                <i className={`fa-solid ${feature.icon} text-[10px] text-slate-700`}></i>
                                            </div>
                                            <span className="text-sm text-slate-600">
                                                {feature.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <button className={`
                                    w-full py-2.5 rounded-lg text-sm font-medium
                                    transition-all duration-200
                                    ${plan.popular 
                                        ? 'bg-slate-800 text-white hover:bg-slate-900' 
                                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                                    }
                                `}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Minimal Footer Note */}
                <p className="text-sm text-slate-500 text-center mt-12">
                    All plans include access to our mobile app
                </p>
            </div>
        </section>
    );
}

export default Price;