import { useState } from 'react' 

function Sain() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(isLogin ? "Logging in..." : "Signing up...");
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-white p-4 sm:p-6">
      <div className="w-full max-w-5xl bg-white mt-18 rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image/Branding */}
          <div className="hidden lg:flex lg:w-5/12 bg-gradient-to-br from-slate-800 to-slate-900 justify-center items-center p-8 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90"></div>
            </div>
            <div className="relative z-10 text-center transform transition-all duration-500 hover:scale-105">
              <div className="mb-6 cursor-pointer group">
                <i className="fa-solid fa-biking text-white text-5xl group-hover:rotate-12 transition-transform duration-500"></i>
              </div>
              <h1 className="text-white text-4xl font-bold mb-4 tracking-wide">
                CityCycle
              </h1>
              <p className="text-white/80 text-lg max-w-sm leading-relaxed">
                Explore your city on two wheels. Join our community of urban cyclists today.
              </p>
            </div>
          </div>

          {/* Right side - Authentication Form */}
          <div className="w-full lg:w-7/12 p-6 sm:p-8">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                {/* Mobile logo */}
                <div className="lg:hidden mb-6 transform hover:scale-105 transition-all duration-300">
                  <div className="relative group cursor-pointer inline-block">
                    <div className="absolute inset-0 bg-slate-800 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <i className="fa-solid fa-biking text-slate-800 text-4xl relative group-hover:rotate-12 transition-transform duration-300"></i>
                  </div>
                  <h1 className="text-slate-800 text-3xl font-bold tracking-wide mt-3">CityCycle</h1>
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="text-slate-600 text-lg">
                  {isLogin 
                    ? 'Sign in to access your CityCycle account' 
                    : 'Join the CityCycle community today'
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {!isLogin && (
                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 mb-2 transition-colors group-focus-within:text-slate-800">
                      Full Name
                    </label>
                    <div className="relative transform transition-all duration-300 focus-within:scale-[1.01]">
                      <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800 transition-colors"></i>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required={!isLogin}
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-4 focus:ring-slate-500/20 focus:border-slate-500 transition-all duration-300 bg-white hover:border-slate-300 cursor-pointer"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                )}

                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-2 transition-colors group-focus-within:text-slate-800">
                    Email Address
                  </label>
                  <div className="relative transform transition-all duration-300 focus-within:scale-[1.01]">
                    <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800 transition-colors"></i>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-4 focus:ring-slate-500/20 focus:border-slate-500 transition-all duration-300 bg-white hover:border-slate-300 cursor-pointer"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-2 transition-colors group-focus-within:text-slate-800">
                    Password
                  </label>
                  <div className="relative transform transition-all duration-300 focus-within:scale-[1.01]">
                    <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800 transition-colors"></i>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-4 focus:ring-slate-500/20 focus:border-slate-500 transition-all duration-300 bg-white hover:border-slate-300 cursor-pointer"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 mb-2 transition-colors group-focus-within:text-slate-800">
                      Confirm Password
                    </label>
                    <div className="relative transform transition-all duration-300 focus-within:scale-[1.01]">
                      <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800 transition-colors"></i>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required={!isLogin}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-4 focus:ring-slate-500/20 focus:border-slate-500 transition-all duration-300 bg-white hover:border-slate-300 cursor-pointer"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                )}

                {/* Main Sign In/Up Button First */}
                <button
                  type="submit"
                  className="relative w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-500/20 transform hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-700/0 via-slate-700/10 to-slate-700/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  {isLogin ? (
                    <>
                      <i className="fa-solid fa-fingerprint mr-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"></i>
                      Sign in
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-user-plus mr-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"></i>
                      Create account
                    </>
                  )}
                </button>

                {/* Social Buttons Section - Only show for sign in */}
                {isLogin && (
                  <>
                    {/* Divider */}
                    <div className="mt-6 relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-slate-500">Or continue with</span>
                      </div>
                    </div>

                    {/* Social Buttons */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        className="relative w-full flex items-center justify-center px-4 py-3 border border-slate-200 rounded-lg shadow-sm bg-white text-base font-medium text-slate-700 hover:bg-red-50 hover:border-red-200 focus:outline-none focus:ring-4 focus:ring-red-500/20 transform hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer overflow-hidden"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        <i className="fa-brands fa-google mr-2 text-red-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"></i>
                        <span className="group-hover:text-red-600 transition-colors duration-300">Google</span>
                      </button>
                      
                      <button
                        type="button"
                        className="relative w-full flex items-center justify-center px-4 py-3 border border-slate-200 rounded-lg shadow-sm bg-white text-base font-medium text-slate-700 hover:bg-blue-50 hover:border-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transform hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer overflow-hidden"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        <i className="fa-brands fa-facebook mr-2 text-blue-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"></i>
                        <span className="group-hover:text-blue-600 transition-colors duration-300">Facebook</span>
                      </button>
                    </div>
                  </>
                )}

                {/* Toggle between Sign In and Sign Up */}
                <div className="mt-6 text-center text-sm">
                  <p className="text-slate-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                      onClick={toggleAuthMode}
                      className="ml-1 text-slate-700 hover:text-slate-800 font-medium cursor-pointer"
                    >
                      {isLogin ? "Sign up" : "Sign in"}
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sain