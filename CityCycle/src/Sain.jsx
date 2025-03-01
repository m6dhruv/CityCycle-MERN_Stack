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
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
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

                <button
                  type="submit"
                  className="relative w-full py-3 px-4 border border-transparent rounded-lg text-base font-medium text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-500/20 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {isLogin ? (
                    <span className="relative flex items-center justify-center gap-2">
                      <i className="fa-solid fa-fingerprint text-lg group-hover:scale-110 transition-transform duration-300"></i>
                      Sign In
                    </span>
                  ) : (
                    <span className="relative flex items-center justify-center gap-2">
                      <i className="fa-solid fa-shield-halved text-lg group-hover:scale-110 transition-transform duration-300"></i>
                      Create Account
                    </span>
                  )}
                </button>

                {/* Social login buttons */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="relative w-full flex items-center justify-center px-4 py-3 border border-slate-200 rounded-lg shadow-sm bg-white text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-500/20 transform hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                  >
                    <i className="fa-brands fa-google mr-2 text-slate-600 group-hover:scale-110 transition-transform duration-300"></i>
                    Google
                  </button>
                  <button
                    type="button"
                    className="relative w-full flex items-center justify-center px-4 py-3 border border-slate-200 rounded-lg shadow-sm bg-white text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-500/20 transform hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                  >
                    <i className="fa-brands fa-facebook mr-2 text-slate-600 group-hover:scale-110 transition-transform duration-300"></i>
                    Facebook
                  </button>
                </div>

                {/* Remember me section */}
                {isLogin && (
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-slate-800 focus:ring-slate-500 border-slate-300 rounded cursor-pointer"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700 cursor-pointer hover:text-slate-900 transition-colors duration-300">
                        Remember me
                      </label>
                    </div>
                    <button 
                      type="button"
                      className="text-sm font-medium text-slate-800 hover:text-slate-900 cursor-pointer group"
                    >
                      Forgot password?
                      <i className="fa-solid fa-arrow-right ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                    </button>
                  </div>
                )}

                {/* Toggle auth mode button */}
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={toggleAuthMode}
                    className="text-base text-slate-600 hover:text-slate-800 focus:outline-none transition-colors duration-300 group"
                  >
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <span className="font-medium text-slate-800 hover:text-slate-900 underline-offset-4 hover:underline group-hover:text-slate-900">
                      {isLogin ? "Sign up" : "Sign in"}
                      <i className="fa-solid fa-arrow-right ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                    </span>
                  </button>
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