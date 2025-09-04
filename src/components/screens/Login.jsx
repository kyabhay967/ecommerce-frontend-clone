import React, { useState } from 'react';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);

  //Edited: Centralized form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  // Edited: Improved validation
  const validate = () => {
    const newErrors = {};
    const { name, email, password, confirmPassword } = formData;

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (password.length<6) {
      newErrors.password = 'Password length must be of 7 characters';
    }

    if (!isLoginMode) {
      if (!name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!confirmPassword.trim()) {
        newErrors.confirmPassword = 'Confirm your password';
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Edited: Validate on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Form submitted:', formData);
  };

  // Edited: Real-time input state update
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Edited: Reset form on tab switch
  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  return (
    <div className="bg-cyan-500 min-h-screen flex items-center justify-center">
      <div className="w-[500px] bg-white p-8 rounded-2xl shadow-xl shadow-teal-900/100 mx-auto mt-10">
        <div className="flex justify-center mb-7">
          <h2 className="font-semibold text-2xl">
            {isLoginMode ? 'Login' : 'Sign Up'}
          </h2>
        </div>

        {/* Tab controls */}
        <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
          <button
            onClick={toggleMode}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              isLoginMode ? 'text-white' : 'text-black'
            }`}
          >
            Login
          </button>
          <button
            onClick={toggleMode}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              !isLoginMode ? 'text-white' : 'text-black'
            }`}
          >
            Sign Up
          </button>

          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-pink-400 via-cyan-500 to-purple-400 transition-all duration-300 ${
              isLoginMode ? 'left-0' : 'left-1/2'
            }`}
          />
        </div>

        {/* Edited: Form handles submit */}
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {!isLoginMode && (
            <>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={`w-full p-2 border-b-2 ${
                  errors.name ? 'border-red-500' : 'border-purple-900'
                } focus:border-fuchsia-700 placeholder-slate-700`}
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </>
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className={`w-full p-2 border-b-2 ${
              errors.email ? 'border-red-500' : 'border-purple-900'
            } focus:border-fuchsia-700 placeholder-slate-700`}
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={`w-full p-2 border-b-2 ${
              errors.password ? 'border-red-500' : 'border-purple-900'
            } focus:border-fuchsia-700 placeholder-slate-700`}
          />
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

          {!isLoginMode && (
            <>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={`w-full p-2 border-b-2 ${
                  errors.confirmPassword ? 'border-red-500' : 'border-purple-900'
                } focus:border-fuchsia-700 placeholder-slate-700`}
              />
              {errors.confirmPassword && (
                <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
              )}
            </>
          )}

          {isLoginMode && (
            <div className="text-right">
              <p className="text-cyan-600 hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>
          )}

          {/* Edited: Submit triggers handleSubmit */}
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-pink-400 via-cyan-500 to-purple-400 text-white rounded-full text-lg font-semibold hover:opacity-80"
          >
            {isLoginMode ? 'Login' : 'Sign Up'}
          </button>

          <p className="text-center text-slate-700">
            {isLoginMode ? "Don't have an account?" : 'Already have an account?'}
            <button
              type="button"
              onClick={toggleMode}
              className="text-cyan-600 hover:underline ml-1"
            >
              {isLoginMode ? 'Sign up now' : 'Login'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;





