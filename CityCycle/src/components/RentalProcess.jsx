import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaQrcode, FaCreditCard, FaCheckCircle, FaArrowLeft, FaCalendarAlt, FaClock, FaShieldAlt, FaInfoCircle } from 'react-icons/fa';

// Sample bike data (would be fetched from API in a real application)
const bikesData = [
  {
    id: 1,
    name: "City Cruiser",
    type: "Electric",
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    station: "Central Station",
    address: "123 Main Street, Downtown",
    batteryLevel: 85,
    pricePerHour: 3.99,
    pricePerDay: 19.99,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Urban Explorer",
    type: "Standard",
    imageUrl: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    station: "Harbor Point",
    address: "45 Waterfront Drive, Harbor District",
    batteryLevel: null,
    pricePerHour: 2.49,
    pricePerDay: 14.99,
    isAvailable: true,
  }
];

const RentalProcess = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [rentalDuration, setRentalDuration] = useState('hour');
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('saved');
  const [unlockCode, setUnlockCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Find the bike based on the ID from URL params
  const bike = bikesData.find(bike => bike.id === parseInt(id)) || bikesData[0];
  
  // Generate a random unlock code when the component mounts
  useEffect(() => {
    setUnlockCode(Math.floor(100000 + Math.random() * 900000).toString());
  }, []);
  
  const calculatePrice = () => {
    const basePrice = rentalDuration === 'hour' ? bike.pricePerHour : bike.pricePerDay;
    return (basePrice * quantity).toFixed(2);
  };
  
  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      
      // Simulate loading for the final confirmation step
      if (currentStep === 3) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate(`/bike/${bike.id}`);
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-lg font-medium text-slate-800">Rental Details</h3>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <img 
                    src={bike.imageUrl} 
                    alt={bike.name} 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium text-slate-800">{bike.name}</h4>
                    <div className="flex items-center text-sm text-slate-500">
                      <FaMapMarkerAlt className="mr-1 text-indigo-500" />
                      <span>{bike.station}</span>
                    </div>
                    <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                      bike.type === 'Electric' 
                        ? 'bg-indigo-100 text-indigo-700' 
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {bike.type}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Rental Duration</label>
                    <select
                      value={rentalDuration}
                      onChange={(e) => setRentalDuration(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="hour">Hourly</option>
                      <option value="day">Daily</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      {rentalDuration === 'hour' ? 'Hours' : 'Days'}
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      {[...Array(rentalDuration === 'hour' ? 24 : 14)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1} {rentalDuration === 'hour' ? 'hour' : 'day'}{i > 0 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                  <div>
                    <div className="text-sm text-indigo-700">Total Price</div>
                    <div className="text-2xl font-bold text-indigo-700">${calculatePrice()}</div>
                  </div>
                  
                  <div className="flex items-center text-sm text-indigo-700">
                    <FaCalendarAlt className="mr-1" />
                    <span className="mr-3">Today</span>
                    <FaClock className="mr-1" />
                    <span>Available Now</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-lg font-medium text-slate-800">Rental Terms</h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start">
                    <FaShieldAlt className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <p>You are responsible for returning the bike in the same condition. Any damages may result in additional charges.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <FaShieldAlt className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Late returns will incur additional charges at the hourly rate.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <FaShieldAlt className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <p>By proceeding, you agree to our <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:underline">Rental Policy</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-lg font-medium text-slate-800">Payment Method</h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <input
                      id="saved-card"
                      name="payment-method"
                      type="radio"
                      checked={paymentMethod === 'saved'}
                      onChange={() => setPaymentMethod('saved')}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300"
                    />
                    <label htmlFor="saved-card" className="ml-3 flex items-center">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mr-3">
                        <FaCreditCard className="text-indigo-500" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Credit Card ending in 4242</p>
                        <p className="text-sm text-slate-500">Expires 05/25</p>
                      </div>
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="new-card"
                      name="payment-method"
                      type="radio"
                      checked={paymentMethod === 'new'}
                      onChange={() => setPaymentMethod('new')}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300"
                    />
                    <label htmlFor="new-card" className="ml-3">
                      <span className="font-medium text-slate-800">Use a new payment method</span>
                    </label>
                  </div>
                </div>
                
                {paymentMethod === 'new' && (
                  <div className="space-y-4 border-t border-slate-100 pt-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Expiration Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name on Card</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="save-card"
                        name="save-card"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                      />
                      <label htmlFor="save-card" className="ml-2 text-sm text-slate-700">
                        Save this card for future rentals
                      </label>
                    </div>
                  </div>
                )}
                
                <div className="mt-6 p-4 bg-indigo-50 rounded-lg flex items-center">
                  <FaInfoCircle className="text-indigo-500 mr-3 flex-shrink-0" />
                  <p className="text-sm text-indigo-700">
                    Your card will be charged ${calculatePrice()} for this rental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-lg font-medium text-slate-800">Rental Summary</h3>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <img 
                    src={bike.imageUrl} 
                    alt={bike.name} 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium text-slate-800">{bike.name}</h4>
                    <div className="flex items-center text-sm text-slate-500">
                      <FaMapMarkerAlt className="mr-1 text-indigo-500" />
                      <span>{bike.station}</span>
                    </div>
                    <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                      bike.type === 'Electric' 
                        ? 'bg-indigo-100 text-indigo-700' 
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {bike.type}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600">Rental Duration</span>
                    <span className="font-medium text-slate-800">
                      {quantity} {rentalDuration === 'hour' ? 'hour' : 'day'}{quantity > 1 ? 's' : ''}
                    </span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600">Rate</span>
                    <span className="font-medium text-slate-800">
                      ${rentalDuration === 'hour' ? bike.pricePerHour : bike.pricePerDay}/{rentalDuration}
                    </span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600">Payment Method</span>
                    <span className="font-medium text-slate-800">
                      {paymentMethod === 'saved' ? 'Credit Card ending in 4242' : 'New Credit Card'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between py-2 text-lg">
                    <span className="font-medium text-slate-800">Total</span>
                    <span className="font-bold text-indigo-600">${calculatePrice()}</span>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg flex items-start mb-6">
                  <FaInfoCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <div className="text-sm text-yellow-700">
                    <p className="font-medium mb-1">Important Information</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>You will receive an unlock code after payment is processed.</li>
                      <li>The bike must be returned to {bike.station} by the end of your rental period.</li>
                      <li>Late returns will incur additional charges.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-slate-700">
                    I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:underline">Rental Policy</a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-green-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Rental Confirmed!</h3>
                <p className="text-slate-600 mb-6">Your bike is ready to be unlocked and used.</p>
                
                <div className="max-w-xs mx-auto mb-6">
                  <div className="p-4 bg-indigo-50 rounded-lg text-center">
                    <p className="text-sm text-indigo-700 mb-2">Your Unlock Code</p>
                    <div className="flex justify-center space-x-2">
                      {unlockCode.split('').map((digit, index) => (
                        <div key={index} className="w-10 h-12 bg-white rounded-lg border border-indigo-200 flex items-center justify-center text-xl font-bold text-indigo-700">
                          {digit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <FaQrcode className="text-slate-700 text-6xl" />
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <p className="text-slate-600 mb-2">Scan this QR code or enter the unlock code on the bike&apos;s keypad.</p>
                  <p className="text-sm text-slate-500">Your rental will begin once the bike is unlocked.</p>
                </div>
                
                <div className="p-4 bg-indigo-50 rounded-lg text-sm text-indigo-700 mb-6">
                  <p className="font-medium mb-1">Rental Details</p>
                  <p>{bike.name} from {bike.station}</p>
                  <p>Duration: {quantity} {rentalDuration === 'hour' ? 'hour' : 'day'}{quantity > 1 ? 's' : ''}</p>
                  <p>Total: ${calculatePrice()}</p>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <Link to="/find-bikes" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Done
                  </Link>
                  <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
                    Get Help
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-6">
          <button 
            onClick={handlePrevStep}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            <span>{currentStep === 1 ? 'Back to bike details' : 'Back'}</span>
          </button>
        </div>
        
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {['Rental Details', 'Payment', 'Review', 'Confirmation'].map((step, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && (
                  <div className={`w-12 h-1 sm:w-24 ${
                    currentStep > index ? 'bg-indigo-500' : 'bg-slate-200'
                  }`}></div>
                )}
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep > index 
                      ? 'bg-indigo-500 text-white' 
                      : currentStep === index + 1
                        ? 'bg-indigo-500 text-white'
                        : 'bg-slate-200 text-slate-500'
                  }`}>
                    {currentStep > index ? (
                      <FaCheckCircle />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className={`text-xs mt-1 hidden sm:block ${
                    currentStep === index + 1 ? 'text-indigo-600 font-medium' : 'text-slate-500'
                  }`}>
                    {step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
              <p className="text-slate-600 font-medium">Processing your rental...</p>
            </div>
          ) : (
            renderStepContent()
          )}
          
          {/* Navigation Buttons */}
          {currentStep < 4 && !isLoading && (
            <div className="mt-8 flex justify-end">
              <button
                onClick={handlePrevStep}
                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 mr-2 hover:bg-slate-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {currentStep === 3 ? 'Confirm Rental' : 'Continue'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentalProcess; 