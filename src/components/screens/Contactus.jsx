// import React from 'react'

// const Contactus = () => {
//   return (
//     <div className='container max-auto'>
//       <h2 font-semibold text-white mb-4 uppercae>Contact us</h2>
//       <h3>Contact number - +91 1231231234 <br />
//       Email - abc@gmail.com</h3>
//     </div>
    
//   )
// }

// export default Contactus


import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-cyan-500  min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-pink-400 via-cyan-500 to-purple-400 text-white rounded-full text-lg font-semibold hover:opacity-80"
          >
            Send Message
          </button>
        </form>
        <div className=" mt-8 mb-6 text-center text-gray-600 text-sm">
  <p> Phone : +91 1234567890 </p>
  <p> Email : support@example.com</p>
</div>
      </div>
    
    </div>
  );
};

export default ContactUs;
