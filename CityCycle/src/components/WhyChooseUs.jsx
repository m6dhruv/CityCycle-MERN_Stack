import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      icon: "fa-leaf",
      title: "Eco-friendly Transportation",
      description: "Join the green revolution with our zero-emission bikes. Each ride contributes to reducing carbon footprint and creating cleaner cities.",
      stats: "50,000+ kg CO₂ saved",
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradient: "from-green-50 to-white",
      shadowColor: "shadow-green-500/10"
    },
    {
      icon: "fa-mobile-screen",
      title: "Easy App Booking",
      description: "Book your ride in seconds with our intuitive app. Quick authentication, seamless payments, and instant bike unlocking.",
      stats: "4.8★ App Rating",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradient: "from-blue-50 to-white",
      shadowColor: "shadow-blue-500/10"
    },
    {
      icon: "fa-bicycle",
      title: "Variety of Bikes",
      description: "Choose from our diverse fleet: city bikes, electric bikes, and premium models. Perfect match for every journey.",
      stats: "1000+ Bikes",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradient: "from-purple-200 to-white",
      shadowColor: "shadow-purple-500/10"
    },
    {
      icon: "fa-map-location-dot",
      title: "Real-time Availability Map",
      description: "Find the nearest available bike instantly. Our live map shows bike locations and battery levels in real-time.",
      stats: "100+ Stations",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      gradient: "from-rose-50 to-white",
      shadowColor: "shadow-rose-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header Section with enhanced animation */}  
      <div className="relative py-8 sm:py-15 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white/0 opacity-80"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-slate-100 to-slate-50 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
              Why Choose CityCycle?
            </h2>
            <p className="text-lg text-slate-600 mb-5 leading-relaxed">
              Experience the future of urban mobility with our innovative bike-sharing solution. 
              Smart, sustainable, and designed for your convenience.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid with enhanced effects */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`rounded-xl p-6 bg-gradient-to-br ${feature.gradient} border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.01] ${feature.shadowColor}`}>
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>

                {/* Feature Icon with enhanced animation */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`${feature.bgColor} ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg`}
                >
                  <i className={`fa-solid ${feature.icon} text-xl`}></i>
                </motion.div>

                {/* Feature Content */}
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Stats Badge with hover effect */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-sm hover:shadow group-hover:border-${feature.color} transition-all duration-300`}
                >
                  <i className={`fa-solid fa-chart-line ${feature.color} mr-1.5 group-hover:scale-110 transition-transform duration-300`}></i>
                  {feature.stats}
                </motion.div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute top-0 right-0 -mt-3 -mr-3 w-16 h-16 bg-gradient-to-br from-slate-100/50 to-white/0 rounded-full blur-lg group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section with enhanced animations */}
      <div className="bg-white p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 to-slate-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "98%", label: "Satisfied Users", icon: "fa-smile" },
              { number: "24/7", label: "Available", icon: "fa-clock" },
              { number: "15min", label: "Avg. Response", icon: "fa-bolt" },
              { number: "50+", label: "City Coverage", icon: "fa-city" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <i className={`fa-solid ${stat.icon} text-2xl ${features[index].color} mb-4 group-hover:scale-110 transition-transform duration-300`}></i>
                  <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                  <div className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 