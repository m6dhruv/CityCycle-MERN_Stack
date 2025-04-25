import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaBiking, FaMapMarkerAlt, FaStar, FaRegStar, FaBatteryFull, FaShieldAlt, FaCalendarAlt, FaClock, FaArrowLeft, FaQrcode, FaHeart, FaRegHeart } from 'react-icons/fa';

// Sample bike data (would be fetched from API in a real application)
const bikesData = [
  {
    id: 1,
    name: "City Cruiser",
    type: "Electric",
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    station: "Central Station",
    address: "123 Main Street, Downtown",
    distance: 0.5,
    batteryLevel: 85,
    pricePerHour: 3.99,
    pricePerDay: 19.99,
    isAvailable: true,
    features: ["Basket", "Lights", "Phone Holder", "Adjustable Seat", "Puncture-resistant Tires"],
    specifications: {
      weight: "23 kg",
      maxSpeed: "25 km/h",
      range: "50 km",
      motor: "250W",
      frameSize: "Medium",
      tireSize: "26 inch"
    },
    rating: 4.7,
    reviewCount: 128,
    description: "The City Cruiser is perfect for urban commuting. This electric bike features a powerful motor that helps you navigate city streets with ease. The comfortable design and practical features make it ideal for daily use."
  },
  {
    id: 2,
    name: "Urban Explorer",
    type: "Standard",
    imageUrl: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    station: "Harbor Point",
    address: "45 Waterfront Drive, Harbor District",
    distance: 1.2,
    batteryLevel: null,
    pricePerHour: 2.49,
    pricePerDay: 14.99,
    isAvailable: true,
    features: ["Basket", "Lights", "Bell", "Rear Rack", "Water Bottle Holder"],
    specifications: {
      weight: "15 kg",
      maxSpeed: "Manual",
      range: "Unlimited",
      motor: "None",
      frameSize: "Large",
      tireSize: "28 inch"
    },
    rating: 4.5,
    reviewCount: 92,
    description: "The Urban Explorer is a lightweight standard bike perfect for casual rides around the city. With its comfortable design and practical features, it's an excellent choice for short trips and leisure rides."
  }
];

const BikeDetails = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [rentalDuration, setRentalDuration] = useState('hour');
  const [quantity, setQuantity] = useState(1);
  
  // Fetch bike data
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const foundBike = bikesData.find(bike => bike.id === parseInt(id));
      setBike(foundBike || bikesData[0]); // Default to first bike if not found
      setLoading(false);
    }, 800);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 pt-20 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
          <p className="text-slate-600 font-medium">Loading bike details...</p>
        </div>
      </div>
    );
  }
  
  if (!bike) {
    return (
      <div className="min-h-screen bg-slate-50 pt-20 flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-sm">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaBiking className="text-slate-400 text-2xl" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Bike Not Found</h2>
          <p className="text-slate-600 mb-6">Sorry, we couldn&apos;t find the bike you&apos;re looking for.</p>
          <Link to="/find-bikes" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Browse Available Bikes
          </Link>
        </div>
      </div>
    );
  }
  
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  const calculatePrice = () => {
    const basePrice = rentalDuration === 'hour' ? bike.pricePerHour : bike.pricePerDay;
    return (basePrice * quantity).toFixed(2);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link 
            to="/find-bikes" 
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            <span className="text-sm font-medium">Back to Bikes</span>
          </Link>
          <div className="text-sm font-medium text-slate-900">{bike.name}</div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              <img 
                src={selectedImage === 0 ? bike.imageUrl : bike.additionalImages[selectedImage - 1]} 
                alt={bike.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                  bike.type === 'Electric' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-purple-500 text-white'
                }`}>
                  {bike.type}
                </span>
                {bike.isAvailable ? (
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-green-500 text-white">
                    Available
                  </span>
                ) : (
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
                    Unavailable
                  </span>
                )}
              </div>

              {/* Favorite Button */}
              <button 
                onClick={handleToggleFavorite}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-transform hover:scale-110"
              >
                {isFavorite ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-slate-400" />
                )}
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {[bike.imageUrl, ...bike.additionalImages].map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                    selectedImage === idx ? 'ring-2 ring-blue-500' : 'ring-1 ring-slate-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">{bike.name}</h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(bike.rating) ? 'text-amber-400' : 'text-slate-200'} />
                  ))}
                  <span className="ml-2 text-slate-600">{bike.rating}</span>
                </div>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600">{bike.reviewCount} reviews</span>
              </div>
            </div>

            {/* Price and Location */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div>
                <div className="text-2xl font-bold text-slate-900">${bike.pricePerHour}/hr</div>
                <div className="text-sm text-slate-500">${bike.pricePerDay}/day</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-slate-900">{bike.station}</div>
                <div className="text-sm text-slate-500 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-blue-500" />
                  {bike.distance} km away
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              {bike.batteryLevel !== null && (
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <FaBatteryFull className="text-green-500" />
                    <span className="text-sm font-medium text-slate-900">Battery Level</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 transition-all duration-500"
                      style={{ width: `${bike.batteryLevel}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{bike.batteryLevel}% charged</div>
                </div>
              )}
              
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <FaShieldAlt className="text-blue-500" />
                  <span className="text-sm font-medium text-slate-900">Features</span>
                </div>
                <div className="text-sm text-slate-600">
                  {bike.features.slice(0, 2).join(', ')}
                  {bike.features.length > 2 && ' & more'}
                </div>
              </div>
            </div>

            {/* Rental Options */}
            <div className="p-6 bg-slate-50 rounded-xl space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Duration</label>
                  <select
                    value={rentalDuration}
                    onChange={(e) => setRentalDuration(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="hour">Hourly</option>
                    <option value="day">Daily</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {rentalDuration === 'hour' ? 'Hours' : 'Days'}
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    {[...Array(rentalDuration === 'hour' ? 24 : 14)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between py-3 border-t border-slate-200">
                <div className="text-sm text-slate-600">Total Price</div>
                <div className="text-2xl font-bold text-slate-900">${calculatePrice()}</div>
              </div>

              <Link 
                to={`/rent/${bike.id}`}
                className="block w-full py-3 px-4 bg-gradient-to-r from-slate-800 to-blue-900 hover:from-slate-900 hover:to-blue-800 text-white text-center font-medium rounded-lg transition-colors"
              >
                Rent Now
              </Link>
            </div>

            {/* Description */}
            <div className="text-sm text-slate-600 leading-relaxed">
              {bike.description}
            </div>
          </div>
        </div>

        {/* Similar Bikes */}
        <div className="mt-12">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Similar Bikes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bikesData.filter(b => b.id !== bike.id).slice(0, 3).map((similarBike) => (
              <Link 
                key={similarBike.id} 
                to={`/bike/${similarBike.id}`}
                className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={similarBike.imageUrl} 
                    alt={similarBike.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-slate-900">{similarBike.name}</h3>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-blue-500 font-medium">${similarBike.pricePerHour}/hr</span>
                    <span className="text-sm text-slate-500">{similarBike.distance} km away</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BikeDetails; 