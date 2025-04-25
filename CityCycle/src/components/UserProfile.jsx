import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaCreditCard, FaHistory, FaMapMarkerAlt, FaBell, FaSignOutAlt, FaCamera, FaEdit, FaCheck, FaTimes, FaSearch } from 'react-icons/fa';

// Sample user data (would be fetched from API in a real application)
const userData = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main Street, Apt 4B, New York, NY 10001",
  profileImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  memberSince: "January 2023",
  paymentMethods: [
    {
      id: 1,
      type: "credit",
      last4: "4242",
      expiry: "05/25",
      isDefault: true
    },
    {
      id: 2,
      type: "credit",
      last4: "1234",
      expiry: "12/24",
      isDefault: false
    }
  ],
  preferences: {
    notifications: {
      email: true,
      sms: false,
      app: true
    },
    bikeTypes: ["Electric", "Standard"],
    defaultPaymentMethod: 1
  }
};

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState(userData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({...userData});
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(editedUser);
    setIsEditing(false);
  };
  
  // Handle notification toggle
  const handleNotificationToggle = (type) => {
    setEditedUser({
      ...editedUser,
      preferences: {
        ...editedUser.preferences,
        notifications: {
          ...editedUser.preferences.notifications,
          [type]: !editedUser.preferences.notifications[type]
        }
      }
    });
  };
  
  // Handle payment method selection
  const handleDefaultPaymentMethod = (id) => {
    const updatedPaymentMethods = editedUser.paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id
    }));
    
    setEditedUser({
      ...editedUser,
      paymentMethods: updatedPaymentMethods,
      preferences: {
        ...editedUser.preferences,
        defaultPaymentMethod: id
      }
    });
  };
  
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-24">
              {/* Profile Summary */}
              <div className="p-6 border-b border-slate-100">
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src={user.profileImage} 
                      alt={user.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <button className="absolute bottom-0 right-0 bg-indigo-500 text-white p-1 rounded-full text-xs">
                      <FaCamera />
                    </button>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-bold text-slate-800">{user.name}</h2>
                    <p className="text-sm text-slate-500">Member since {user.memberSince}</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="p-2">
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                    activeTab === 'profile' 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <FaUser className={`mr-3 ${activeTab === 'profile' ? 'text-indigo-500' : 'text-slate-400'}`} />
                  <span>Personal Information</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('payment')}
                  className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                    activeTab === 'payment' 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <FaCreditCard className={`mr-3 ${activeTab === 'payment' ? 'text-indigo-500' : 'text-slate-400'}`} />
                  <span>Payment Methods</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('history')}
                  className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                    activeTab === 'history' 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <FaHistory className={`mr-3 ${activeTab === 'history' ? 'text-indigo-500' : 'text-slate-400'}`} />
                  <span>Rental History</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('preferences')}
                  className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                    activeTab === 'preferences' 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <FaBell className={`mr-3 ${activeTab === 'preferences' ? 'text-indigo-500' : 'text-slate-400'}`} />
                  <span>Preferences</span>
                </button>
                
                <div className="border-t border-slate-100 my-2 pt-2">
                  <button 
                    className="w-full flex items-center p-3 rounded-lg text-left text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    <FaSignOutAlt className="mr-3 text-slate-400" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Personal Information */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                  <h2 className="text-xl font-bold text-slate-800">Personal Information</h2>
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    {isEditing ? (
                      <>
                        <FaTimes className="mr-1" />
                        <span>Cancel</span>
                      </>
                    ) : (
                      <>
                        <FaEdit className="mr-1" />
                        <span>Edit</span>
                      </>
                    )}
                  </button>
                </div>
                
                <div className="p-6">
                  {isEditing ? (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaUser className="text-slate-400" />
                            </div>
                            <input
                              type="text"
                              name="name"
                              value={editedUser.name}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaEnvelope className="text-slate-400" />
                            </div>
                            <input
                              type="email"
                              name="email"
                              value={editedUser.email}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaPhone className="text-slate-400" />
                            </div>
                            <input
                              type="tel"
                              name="phone"
                              value={editedUser.phone}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaLock className="text-slate-400" />
                            </div>
                            <input
                              type="password"
                              placeholder="••••••••"
                              className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          <p className="mt-1 text-xs text-slate-500">Leave blank to keep current password</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaMapMarkerAlt className="text-slate-400" />
                          </div>
                          <input
                            type="text"
                            name="address"
                            value={editedUser.address}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 mr-2 hover:bg-slate-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium text-slate-500 mb-1">Full Name</h3>
                          <p className="text-slate-800">{user.name}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-slate-500 mb-1">Email Address</h3>
                          <p className="text-slate-800">{user.email}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-slate-500 mb-1">Phone Number</h3>
                          <p className="text-slate-800">{user.phone}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-slate-500 mb-1">Password</h3>
                          <p className="text-slate-800">••••••••</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 mb-1">Address</h3>
                        <p className="text-slate-800">{user.address}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Payment Methods */}
            {activeTab === 'payment' && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                  <h2 className="text-xl font-bold text-slate-800">Payment Methods</h2>
                  <button 
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <FaEdit className="mr-1" />
                    <span>Add New</span>
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {editedUser.paymentMethods.map((method) => (
                      <div 
                        key={method.id}
                        className={`p-4 border rounded-lg flex items-center justify-between ${
                          method.isDefault ? 'border-indigo-300 bg-indigo-50' : 'border-slate-200'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                            <FaCreditCard className={method.isDefault ? 'text-indigo-500' : 'text-slate-400'} />
                          </div>
                          <div className="ml-4">
                            <p className="font-medium text-slate-800">
                              {method.type === 'credit' ? 'Credit Card' : 'Debit Card'} ending in {method.last4}
                            </p>
                            <p className="text-sm text-slate-500">Expires {method.expiry}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          {method.isDefault ? (
                            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Default</span>
                          ) : (
                            <button 
                              onClick={() => handleDefaultPaymentMethod(method.id)}
                              className="text-sm text-indigo-600 hover:text-indigo-800"
                            >
                              Set as default
                            </button>
                          )}
                          <button className="ml-4 text-slate-400 hover:text-slate-600">
                            <FaEdit />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 border border-dashed border-slate-300 rounded-lg text-center">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                      + Add New Payment Method
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Rental History */}
            {activeTab === 'history' && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <h2 className="text-xl font-bold text-slate-800">Rental History</h2>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="relative w-64">
                      <input
                        type="text"
                        placeholder="Search rentals..."
                        className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaSearch className="text-slate-400" />
                      </div>
                    </div>
                    
                    <div>
                      <select className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                        <option>All Time</option>
                        <option>Last 30 Days</option>
                        <option>Last 3 Months</option>
                        <option>Last Year</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Empty state */}
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaHistory className="text-slate-400 text-xl" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-800 mb-2">No rental history yet</h3>
                    <p className="text-slate-500 mb-6">You haven&apos;t rented any bikes yet. Start exploring available bikes.</p>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Find Bikes to Rent
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Preferences */}
            {activeTab === 'preferences' && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <h2 className="text-xl font-bold text-slate-800">Preferences</h2>
                </div>
                
                <div className="p-6">
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-slate-800 mb-4">Notifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-slate-700">Email Notifications</p>
                          <p className="text-sm text-slate-500">Receive updates about your rentals via email</p>
                        </div>
                        <button 
                          onClick={() => handleNotificationToggle('email')}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            editedUser.preferences.notifications.email ? 'bg-indigo-600' : 'bg-slate-200'
                          }`}
                        >
                          <span 
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              editedUser.preferences.notifications.email ? 'translate-x-6' : 'translate-x-1'
                            }`} 
                          />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-slate-700">SMS Notifications</p>
                          <p className="text-sm text-slate-500">Receive updates about your rentals via SMS</p>
                        </div>
                        <button 
                          onClick={() => handleNotificationToggle('sms')}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            editedUser.preferences.notifications.sms ? 'bg-indigo-600' : 'bg-slate-200'
                          }`}
                        >
                          <span 
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              editedUser.preferences.notifications.sms ? 'translate-x-6' : 'translate-x-1'
                            }`} 
                          />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-slate-700">App Notifications</p>
                          <p className="text-sm text-slate-500">Receive in-app notifications</p>
                        </div>
                        <button 
                          onClick={() => handleNotificationToggle('app')}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            editedUser.preferences.notifications.app ? 'bg-indigo-600' : 'bg-slate-200'
                          }`}
                        >
                          <span 
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              editedUser.preferences.notifications.app ? 'translate-x-6' : 'translate-x-1'
                            }`} 
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-slate-800 mb-4">Preferred Bike Types</h3>
                    
                    <div className="flex flex-wrap gap-2">
                      <button 
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          editedUser.preferences.bikeTypes.includes('Electric') 
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        Electric
                        {editedUser.preferences.bikeTypes.includes('Electric') && (
                          <FaCheck className="inline-block ml-2" />
                        )}
                      </button>
                      
                      <button 
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          editedUser.preferences.bikeTypes.includes('Standard') 
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        Standard
                        {editedUser.preferences.bikeTypes.includes('Standard') && (
                          <FaCheck className="inline-block ml-2" />
                        )}
                      </button>
                      
                      <button 
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          editedUser.preferences.bikeTypes.includes('Mountain') 
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        Mountain
                        {editedUser.preferences.bikeTypes.includes('Mountain') && (
                          <FaCheck className="inline-block ml-2" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      onClick={() => setUser(editedUser)}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 