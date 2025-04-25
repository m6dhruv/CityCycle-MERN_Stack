import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaBatteryFull, FaStar, FaSearch, FaFilter, FaListUl, FaThLarge, FaSort, FaBiking, 
  FaRegStar, FaChevronRight, FaArrowRight, FaLocationArrow, FaCalendarAlt, FaClock, FaShieldAlt, 
  FaHeart, FaRegHeart, FaInfoCircle, FaTag, FaRuler } from 'react-icons/fa';

// Sample bike data (would be fetched from API in a real application)
const bikesData = [
  {
    id: 1,
    name: "City Cruiser",
    type: "Electric",
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    station: "Central Station",
    address: "123 Main Street, Downtown",
    distance: 0.5,
    batteryLevel: 85,
    pricePerHour: 3.99,
    pricePerDay: 19.99,
    isAvailable: true,
    rating: 4.7,
    reviewCount: 128,
    description: "The City Cruiser is perfect for urban commuting. This electric bike features a powerful motor that helps you navigate city streets with ease."
  },
  {
    id: 2,
    name: "Urban Explorer",
    type: "Standard",
    imageUrl: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    station: "Harbor Point",
    address: "45 Waterfront Drive, Harbor District",
    distance: 1.2,
    batteryLevel: null,
    pricePerHour: 2.49,
    pricePerDay: 14.99,
    isAvailable: true,
    rating: 4.5,
    reviewCount: 92,
    description: "The Urban Explorer is a lightweight standard bike perfect for casual rides around the city."
  },
  {
    id: 3,
    name: "Mountain Rider",
    type: "Electric",
    imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    station: "Hillside Hub",
    address: "78 Summit Avenue, Heights",
    distance: 2.3,
    batteryLevel: 92,
    pricePerHour: 4.99,
    pricePerDay: 24.99,
    isAvailable: true,
    rating: 4.8,
    reviewCount: 64,
    description: "Conquer any terrain with the Mountain Rider electric bike, featuring powerful suspension and all-terrain tires."
  },
  {
    id: 4,
    name: "Commuter Pro",
    type: "Standard",
    imageUrl: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    station: "Transit Center",
    address: "230 Railway Street, Downtown",
    distance: 0.8,
    batteryLevel: null,
    pricePerHour: 2.99,
    pricePerDay: 16.99,
    isAvailable: false,
    rating: 4.3,
    reviewCount: 107,
    description: "The Commuter Pro is designed for daily riders who need reliability and comfort for their regular commute."
  },
  {
    id: 5,
    name: "Eco Rider",
    type: "Electric",
    imageUrl: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    station: "Green Park",
    address: "15 Park Avenue, Greenville",
    distance: 1.7,
    batteryLevel: 75,
    pricePerHour: 3.49,
    pricePerDay: 18.99,
    isAvailable: true,
    rating: 4.6,
    reviewCount: 83,
    description: "The Eco Rider is an environmentally friendly electric bike with long battery life and smooth riding experience."
  },
  {
    id: 6,
    name: "City Hopper",
    type: "Standard",
    imageUrl: "https://images.unsplash.com/photo-1505158498176-0150297fbd7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    station: "Market Square",
    address: "42 Commerce Street, Downtown",
    distance: 0.3,
    batteryLevel: null,
    pricePerHour: 2.29,
    pricePerDay: 13.99,
    isAvailable: true,
    rating: 4.4,
    reviewCount: 156,
    description: "The City Hopper is a nimble and agile bike perfect for navigating busy city streets and short commutes."
  }
];

const FindBikes = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    availability: 'all',
    maxDistance: 10,
    priceRange: [0, 50]
  });
  const [sortBy, setSortBy] = useState('distance');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [showMap, setShowMap] = useState(false);
  
  // Fetch bikes data
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setBikes(bikesData);
      setLoading(false);
    }, 800);
  }, []);
  
  // Filter and sort bikes
  const filteredBikes = bikes.filter(bike => {
    // Tab filter
    if (activeTab === 'favorites' && !favorites.includes(bike.id)) {
      return false;
    }
    
    if (activeTab === 'electric' && bike.type !== 'Electric') {
      return false;
    }
    
    if (activeTab === 'standard' && bike.type !== 'Standard') {
      return false;
    }
    
    // Search query filter
    if (searchQuery && !bike.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !bike.station.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Type filter (only apply if not already filtered by tab)
    if (activeTab === 'all' && filters.type !== 'all' && bike.type !== filters.type) {
      return false;
    }
    
    // Availability filter
    if (filters.availability === 'available' && !bike.isAvailable) {
      return false;
    }
    
    // Distance filter
    if (bike.distance > filters.maxDistance) {
      return false;
    }
    
    // Price filter
    if (bike.pricePerHour < filters.priceRange[0] || bike.pricePerHour > filters.priceRange[1]) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'distance':
        return a.distance - b.distance;
      case 'price-low':
        return a.pricePerHour - b.pricePerHour;
      case 'price-high':
        return b.pricePerHour - a.pricePerHour;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.distance - b.distance;
    }
  });
  
  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value
    });
  };
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Additional search logic if needed
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  const toggleFavorite = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  
  const toggleMap = () => {
    setShowMap(!showMap);
  };
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // Reset type filter when changing tabs
    if (tab === 'electric') {
      setFilters({...filters, type: 'Electric'});
    } else if (tab === 'standard') {
      setFilters({...filters, type: 'Standard'});
    } else {
      setFilters({...filters, type: 'all'});
    }
  };
  
  const resetAllFilters = () => {
    setSearchQuery('');
    setFilters({
      type: 'all',
      availability: 'all',
      maxDistance: 10,
      priceRange: [0, 50]
    });
    setActiveTab('all');
    setSortBy('distance');
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="flex flex-col items-center animate-pulse">
          <div className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin mb-6"></div>
          <div className="bg-indigo-50 px-6 py-4 rounded-lg shadow-sm">
            <p className="text-indigo-700 font-medium flex items-center">
              <FaLocationArrow className="mr-2 animate-pulse" />
              Finding bikes near you...
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 space-y-4">
          <div className="animate-fadeIn">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 mb-4">
              Find a Bike
            </h1>
            <p className="text-slate-600 flex items-center text-lg">
              <FaLocationArrow className="mr-2 text-indigo-500" />
              Discover available bikes near you for rent
            </p>
          </div>

          {/* Breadcrumb - New Addition */}
          <nav className="flex items-center space-x-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-800">Find a Bike</span>
          </nav>
        </div>

        {/* Tabs Section - Added padding and shadow */}
        <div className="mb-8 animate-slideInDown bg-white p-2 rounded-xl shadow-sm border border-slate-200" style={{ animationDelay: '0.1s' }}>
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => handleTabChange('all')}
              className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center ${
                activeTab === 'all' 
                  ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FaBiking className="mr-2" />
              All Bikes
            </button>
            <button
              onClick={() => handleTabChange('favorites')}
              className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center ${
                activeTab === 'favorites' 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FaHeart className="mr-2" />
              Favorites ({favorites.length})
            </button>
            <button
              onClick={() => handleTabChange('electric')}
              className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center ${
                activeTab === 'electric' 
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FaBatteryFull className="mr-2" />
              Electric
            </button>
            <button
              onClick={() => handleTabChange('standard')}
              className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center ${
                activeTab === 'standard' 
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FaShieldAlt className="mr-2" />
              Standard
            </button>
            <button
              onClick={toggleMap}
              className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center ${
                showMap 
                  ? 'bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FaMapMarkerAlt className="mr-2" />
              Map View
            </button>
          </div>
        </div>
        
        {/* Search and Filters Section - Added structure */}
        <div className="mb-8 space-y-4 animate-slideInDown" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <form onSubmit={handleSearchSubmit} className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by bike name or location..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700 placeholder-slate-400 transition-all duration-300 shadow-sm"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-indigo-500" />
                </div>
              </div>
            </form>
            
            <div className="flex gap-3">
              <button
                onClick={toggleFilters}
                className="px-4 py-2.5 bg-white border border-slate-300 rounded-lg flex items-center text-slate-700 hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                <FaFilter className="mr-2 text-indigo-700" />
                <span>Filters</span>
              </button>
              
              <div className="flex border border-slate-300 rounded-lg overflow-hidden shadow-sm">
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2.5 flex items-center transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <FaListUl />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2.5 flex items-center transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <FaThLarge />
                </button>
              </div>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="appearance-none pl-10 pr-8 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700 shadow-sm transition-all duration-300"
                >
                  <option value="distance">Nearest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSort className="text-indigo-500" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-white p-5 rounded-lg shadow-md mb-5 border border-slate-200 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                    <FaTag className="mr-2 text-indigo-500" />
                    Bike Type
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700 shadow-sm"
                  >
                    <option value="all">All Types</option>
                    <option value="Electric">Electric</option>
                    <option value="Standard">Standard</option>
                  </select>
                </div>
                
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                    <FaInfoCircle className="mr-2 text-indigo-500" />
                    Availability
                  </label>
                  <select
                    value={filters.availability}
                    onChange={(e) => handleFilterChange('availability', e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700 shadow-sm"
                  >
                    <option value="all">All Bikes</option>
                    <option value="available">Available Only</option>
                  </select>
                </div>
                
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                    <FaRuler className="mr-2 text-indigo-500" />
                    Max Distance (km)
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={filters.maxDistance}
                    onChange={(e) => handleFilterChange('maxDistance', parseFloat(e.target.value))}
                    className="w-full accent-indigo-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>0.5 km</span>
                    <span>{filters.maxDistance} km</span>
                    <span>10 km</span>
                  </div>
                </div>
                
                <div className="transition-all duration-300 hover:-translate-y-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                    <FaTag className="mr-2 text-indigo-500" />
                    Price Range ($/hour)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      max={filters.priceRange[1]}
                      value={filters.priceRange[0]}
                      onChange={(e) => handleFilterChange('priceRange', [parseFloat(e.target.value), filters.priceRange[1]])}
                      className="w-20 px-2 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700 shadow-sm"
                    />
                    <span className="text-slate-700">to</span>
                    <input
                      type="number"
                      min={filters.priceRange[0]}
                      max="50"
                      value={filters.priceRange[1]}
                      onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseFloat(e.target.value)])}
                      className="w-20 px-2 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700 shadow-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-5">
                <button
                  onClick={() => setFilters({
                    type: activeTab === 'electric' ? 'Electric' : 
                          activeTab === 'standard' ? 'Standard' : 'all',
                    availability: 'all',
                    maxDistance: 10,
                    priceRange: [0, 50]
                  })}
                  className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 mr-3 hover:bg-slate-50 transition-all duration-300 shadow-sm"
                >
                  Reset Filters
                </button>
                <button
                  onClick={toggleFilters}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-md transform hover:-translate-y-1"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Results Count Section - Added better structure */}
        <div className="mb-6 bg-slate-50 rounded-lg px-6 py-4 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-slate-700 flex items-center">
              <FaBiking className="mr-2 text-indigo-500" />
              <span className="font-medium">{filteredBikes.length}</span>
              <span className="ml-1">{filteredBikes.length === 1 ? 'bike' : 'bikes'} found</span>
            </p>
            
            <div className="flex items-center space-x-6 text-slate-600 text-sm">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-indigo-500" />
                <span>Today</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-indigo-500" />
                <span>Available Now</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map View */}
        {showMap && (
          <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 animate-fadeIn">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-slate-800 font-medium flex items-center">
                <FaMapMarkerAlt className="mr-2 text-indigo-500" />
                Bike Locations
              </h3>
              <button 
                onClick={toggleMap}
                className="text-slate-500 hover:text-slate-700"
              >
                <FaChevronRight className="transform rotate-90" />
              </button>
            </div>
            <div className="h-[400px] bg-slate-100 relative">
              {/* This would be replaced with an actual map component */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-slate-500 text-center">
                  Interactive map would be displayed here.<br />
                  Showing {filteredBikes.length} bike locations.
                </p>
              </div>
              
              {/* Sample bike markers */}
              {filteredBikes.map((bike, index) => (
                <div 
                  key={bike.id}
                  className="absolute w-6 h-6 rounded-full bg-white flex items-center justify-center border border-slate-300 shadow-md animate-pulse"
                  style={{ 
                    left: `${20 + (index * 10) % 80}%`, 
                    top: `${30 + (index * 15) % 50}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className={`w-3 h-3 rounded-full ${bike.type === 'Electric' ? 'bg-indigo-500' : 'bg-purple-500'}`}></div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Bikes Grid/List Section */}
        <div className="mt-8">
          {filteredBikes.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-8 text-center border border-slate-200 animate-fadeIn">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
                <FaBiking className="text-indigo-500 text-xl" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">No bikes found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your filters or search criteria.</p>
              <button 
                onClick={resetAllFilters}
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-md transform hover:-translate-y-1"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBikes.map((bike, index) => (
                <Link 
                  key={bike.id} 
                  to={`/bike/${bike.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-lg border border-slate-200 transform hover:-translate-y-2 animate-fadeIn group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={bike.imageUrl} 
                      alt={bike.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium shadow-md ${
                        bike.type === 'Electric' 
                          ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      }`}>
                        {bike.type}
                      </span>
                    </div>
                    
                    <button 
                      onClick={(e) => toggleFavorite(bike.id, e)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center transition-all duration-300 hover:bg-white shadow-sm"
                    >
                      {favorites.includes(bike.id) ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart className="text-slate-500" />
                      )}
                    </button>
                    
                    {!bike.isAvailable && (
                      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
                        <span className="px-3 py-1.5 bg-slate-800 text-white rounded-lg text-sm font-medium">
                          Currently Unavailable
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-slate-800">{bike.name}</h3>
                      <div className="text-indigo-600 font-medium">${bike.pricePerHour}/hr</div>
                    </div>
                    
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <FaMapMarkerAlt className="mr-1 text-indigo-500" />
                      <span>{bike.station} · {bike.distance} km</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-2">
                    {bike.batteryLevel !== null && (
                        <div className="flex items-center text-sm text-slate-500">
                        <FaBatteryFull className={`mr-1 ${
                          bike.batteryLevel > 70 ? 'text-green-500' : 
                          bike.batteryLevel > 30 ? 'text-yellow-500' : 'text-red-500'
                        }`} />
                        <span>{bike.batteryLevel}% battery</span>
                      </div>
                    )}
                    
                      <div className="flex items-center text-sm text-yellow-400">
                        <FaStar />
                        <span className="ml-1 text-slate-600">{bike.rating} ({bike.reviewCount})</span>
                      </div>
                      
                      <span className={`text-sm ${bike.isAvailable ? 'text-green-500' : 'text-red-500'}`}>
                        {bike.isAvailable ? 'Available' : 'Unavailable'}
                      </span>
                    </div>
                    
                    <div className="flex justify-end mt-2">
                      <span className="text-indigo-600 text-sm font-medium">View Details →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBikes.map((bike, index) => (
                <div 
                  key={bike.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-lg border border-slate-200 transform hover:-translate-y-1 animate-fadeIn group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative sm:w-48 h-40 overflow-hidden">
                      <img 
                        src={bike.imageUrl} 
                        alt={bike.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium shadow-md ${
                          bike.type === 'Electric' 
                            ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' 
                            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        }`}>
                          {bike.type}
                        </span>
                      </div>
                      
                      {!bike.isAvailable && (
                        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
                          <span className="px-3 py-1 bg-slate-800 text-white rounded-lg text-sm font-medium">
                            Currently Unavailable
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-slate-800">{bike.name}</h3>
                        <div className="text-indigo-600 font-medium">${bike.pricePerHour}/hr</div>
                      </div>
                      
                      <div className="flex items-center text-sm text-slate-500 mb-2">
                        <FaMapMarkerAlt className="mr-1 text-indigo-500" />
                        <span>{bike.station} · {bike.distance} km</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-2">
                        {bike.batteryLevel !== null && (
                          <div className="flex items-center text-sm text-slate-500">
                            <FaBatteryFull className={`mr-1 ${
                              bike.batteryLevel > 70 ? 'text-green-500' : 
                              bike.batteryLevel > 30 ? 'text-yellow-500' : 'text-red-500'
                            }`} />
                            <span>{bike.batteryLevel}% battery</span>
                          </div>
                        )}
                        
                        <div className="flex items-center text-sm text-yellow-400">
                          <FaStar />
                          <span className="ml-1 text-slate-600">{bike.rating} ({bike.reviewCount})</span>
                        </div>
                        
                        <span className={`text-sm ${bike.isAvailable ? 'text-green-500' : 'text-red-500'}`}>
                          {bike.isAvailable ? 'Available' : 'Unavailable'}
                        </span>
                      </div>
                      
                      <div className="flex justify-end mt-2">
                        <span className="text-indigo-600 text-sm font-medium">View Details →</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindBikes; 