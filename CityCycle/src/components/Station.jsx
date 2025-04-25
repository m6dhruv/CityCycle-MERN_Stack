import { useState, useEffect } from 'react'
import { FaMapMarkerAlt, FaBiking, FaLock, FaSearch, FaFilter, FaStar, FaRegStar, FaDirections, FaQrcode, FaArrowRight, FaInfoCircle, FaCalendarAlt } from 'react-icons/fa'
// import Cart from './Cart'

// Sample dummy data with improved images
export const stationsData = [
  {
    id: 1,
    name: "Central Station",
    address: "123 Main Street, Downtown",
    imageUrl: "/api/placeholder/400/300",
    availableBikes: 8,
    totalBikes: 12,
    distance: 0.5,
    isFavorite: true,
    lastUpdated: "10 mins ago",
    features: ["Electric Bikes", "Parking"]
  },
  {
    id: 2,
    name: "Harbor Point",
    address: "45 Waterfront Drive, Harbor District",
    imageUrl: "/api/placeholder/400/300",
    availableBikes: 3,
    totalBikes: 10,
    distance: 1.2,
    isFavorite: false,
    lastUpdated: "5 mins ago",
    features: ["Covered Station", "Repair Tools"]
  },
  {
    id: 3,
    name: "University Square",
    address: "789 Campus Road, University District",
    imageUrl: "/api/placeholder/400/300",
    availableBikes: 6,
    totalBikes: 8,
    distance: 2.3,
    isFavorite: true,
    lastUpdated: "2 mins ago",
    features: ["Electric Bikes", "24/7 Access"]
  },
  {
    id: 4,
    name: "Park Plaza",
    address: "456 Park Avenue, Midtown",
    imageUrl: "/api/placeholder/400/300",
    availableBikes: 1,
    totalBikes: 15,
    distance: 3.1,
    isFavorite: false,
    lastUpdated: "15 mins ago",
    features: ["Bike Rental", "Information Kiosk"]
  },
  {
    id: 5,
    name: "Tech Hub",
    address: "987 Innovation Blvd, Tech District",
    imageUrl: "/api/placeholder/400/300",
    availableBikes: 9,
    totalBikes: 10,
    distance: 4.2,
    isFavorite: false,
    lastUpdated: "Just now",
    features: ["Electric Bikes", "Mobile Payments"]
  },
  {
    id: 6,
    name: "Market Square",
    address: "321 Market Street, Shopping District",
    imageUrl: "/api/placeholder/400/300",
    availableBikes: 4,
    totalBikes: 12,
    distance: 1.7,
    isFavorite: true,
    lastUpdated: "7 mins ago",
    features: ["Covered Station", "Bike Accessories"]
  }
];

// Badge component for features with gradients
const FeatureBadge = ({ text }) => {
  // Random gradient color from a predefined set
  const gradients = [
    'from-blue-500 to-indigo-600',
  ];
  const gradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${gradient} text-white shadow-sm transition-transform hover:scale-105 cursor-pointer animate-fadeIn`}>
      {text}
    </span>
  );
};

// Animated StationCard component
const StationCard = ({ station }) => {
  const [isFavorite, setIsFavorite] = useState(station.isFavorite);
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  // Calculate availability percentage
  const availabilityPercentage = Math.round((station.availableBikes / station.totalBikes) * 100);

  // Determine color based on availability
  const getAvailabilityColor = () => {
    if (availabilityPercentage >= 60) return 'bg-indigo-800';
    if (availabilityPercentage >= 30) return 'bg-indigo-600';
    return 'bg-indigo-300';
  };

  // Determine text color based on availability
  const getAvailabilityTextColor = () => {
    if (availabilityPercentage >= 60) return 'text-indigo-800';
    if (availabilityPercentage >= 30) return 'text-indigo-600';
    return 'text-indigo-500';
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${isHovered ? 'scale-[1.02] shadow-xl' : ''
        } ${showDetails ? 'ring-2 ring-indigo-400' : ''} hover:bg-gradient-to-b hover:from-white hover:to-slate-50`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/60 to-slate-800/30"></div>
        <img
          src={station.imageUrl}
          alt={station.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-yellow-50 transition-all duration-200 z-10 transform hover:scale-110 hover:rotate-12"
        >
          {isFavorite ? (
            <FaStar className="text-yellow-500 text-lg animate-pulse" />
          ) : (
            <FaRegStar className="text-slate-400 text-lg" />
          )}
        </button>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="p-4 bg-gradient-to-t from-slate-900/90 via-slate-800/70 to-transparent">
            <h3 className="text-white font-bold text-xl drop-shadow-md">{station.name}</h3>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start mb-4">
          <div className="text-indigo-600 mr-2 mt-1 animate-bounce">
            <FaMapMarkerAlt />
          </div>
          <p className="text-black text-sm">{station.address}</p>
        </div>

        <div className="flex justify-between items-center mb-5">
          <div className={`flex items-center font-medium ${getAvailabilityTextColor()}`}>
            <FaBiking className="mr-2 animate-pulse" />
            <span>{station.availableBikes} bikes available</span>
          </div>
          <div className="text-sm bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-1 rounded-full text-white font-medium shadow-sm">
            {station.distance.toFixed(1)} km
          </div>
        </div>

        <div className="mb-5">
          <div className="flex justify-between text-sm text-slate-800 mb-1">
            <span>Availability</span>
            <span className="font-medium">{availabilityPercentage}%</span>
          </div>
          <div className="w-full bg-sky-100 rounded-full h-2.5 overflow-hidden shadow-inner">
            <div
              className={`h-2.5 rounded-full ${getAvailabilityColor()} transition-all duration-1000 ease-out`}
              style={{ width: `${availabilityPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            className="flex-1 bg-gradient-to-r from-slate-800 to-blue-900 hover:from-slate-900 hover:to-blue-800 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center group cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <FaQrcode className="mr-2 text-blue-200" />
            Rent Bike
            <FaArrowRight className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </button>
          <button
            className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-3 px-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center hover:text-indigo-600 hover:border-indigo-300 cursor-pointer shadow-sm hover:shadow transform hover:scale-105"
          >
            <FaDirections className="text-indigo-500" />
          </button>
        </div>
      </div>
    </div>
  )
};

const StationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('distance');
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('map');

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredStations = stationsData.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      station.address.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === 'all') return matchesSearch;
    if (filter === 'available') return matchesSearch && station.availableBikes > 0;
    if (filter === 'favorite') return matchesSearch && station.isFavorite;

    return matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'distance') return a.distance - b.distance;
    if (sortBy === 'availability') return b.availableBikes - a.availableBikes;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section */}
        <div className="mb-10 text-center mt-20 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 mb-4">
               Perfect Ride</h1>
          <p className="mt-2 text-slate-600 text-lg">Discover and rent bikes from convenient stations across the city with just a few taps</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-slate-100 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
            <div className="flex-grow mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search stations by name or address..."
                  className="w-full px-4 py-3.5 pl-12 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-4 top-4 text-indigo-400" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <div className="flex items-center">
                <label htmlFor="filter" className="mr-3 text-slate-700 font-medium whitespace-nowrap">Filter:</label>
                <select
                  id="filter"
                  className="px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white transition-all duration-200"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Stations</option>
                  <option value="available">Available Bikes</option>
                  <option value="favorite">Favorites</option>
                </select>
              </div>

              <div className="flex items-center">
                <label htmlFor="sortBy" className="mr-3 text-slate-700 font-medium whitespace-nowrap">Sort by:</label>
                <select
                  id="sortBy"
                  className="px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white transition-all duration-200"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="distance">Distance</option>
                  <option value="availability">Availability</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl p-1.5 bg-slate-100 shadow-inner">
            <button
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${activeTab === 'map'
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
                }`}
              onClick={() => setActiveTab('map')}
            >
              <FaMapMarkerAlt className="inline mr-2 animate-bounce" />
              Map View
            </button>
            <button
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${activeTab === 'list'
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
                }`}
              onClick={() => setActiveTab('list')}
            >
              <FaBiking className="inline mr-2 animate-pulse" />
              List View
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className={`transition-all duration-500 ${activeTab === 'map' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10 border border-slate-100">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 py-5 flex justify-between items-center">
              <h2 className="text-xl font-semibold flex items-center"><FaMapMarkerAlt className="mr-2 text-blue-300" /> Interactive Station Map</h2>
              <button className="text-white hover:text-slate-200 p-2 rounded-lg hover:bg-slate-600/50 transition-colors duration-200">
                <FaFilter className="h-5 w-5" />
              </button>
            </div>
            <div className="h-[500px] bg-slate-100 relative">
              {/* This would be replaced with an actual map component */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-md p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mx-auto mb-4">
                    <FaMapMarkerAlt className="h-8 w-8" />
                  </div>
                  <p className="mt-3 text-slate-800 font-semibold text-lg">Interactive Map</p>
                  <p className="text-slate-600 mb-4">Explore stations nearby or search for specific locations</p>
                  <button className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors duration-200">
                    Show My Location
                  </button>
                </div>
              </div>

              {/* Sample station markers with animations */}
              {stationsData.slice(0, 5).map((station, index) => (
                <div
                  key={station.id}
                  className="absolute w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-slate-700 transition-all duration-300 hover:scale-110 animate-bounce"
                  style={{
                    top: `${20 + (index * 15)}%`,
                    left: `${20 + (index * 15)}%`,
                    animationDuration: `${2 + index * 0.2}s`,
                    animationDelay: `${index * 0.1}s`
                  }}
                  title={station.name}
                >
                  <FaBiking className="text-xl" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stations List */}
        <div className={`mb-12 transition-all duration-500 ${activeTab === 'list' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-700">
              Available Stations
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                {filteredStations.length}
              </span>
            </h2>
            <div className="text-sm text-slate-500">
              <span className="font-medium">Last updated:</span> Just now
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStations.map((station, index) => (
              <div
                key={station.id}
                className="opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <StationCard station={station} />
              </div>
            ))}
          </div>

          {filteredStations.length === 0 && (
            <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-slate-100">
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <FaBiking className="h-10 w-10 text-slate-400" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-slate-800">No stations found</h3>
              <p className="mt-2 text-slate-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchTerm(''); setFilter('all'); }}
                className="px-5 py-2.5 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors duration-200 font-medium"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Cart Section */}
      {/* <Cart /> */}

      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25%); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.5); }
          50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.8); }
        }
        .animate-glow {
          animation: glow 2s infinite;
        }
      `}</style>
    </div>
  )
}

export default StationPage