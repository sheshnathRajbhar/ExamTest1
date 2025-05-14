import React from 'react'

const Contact = () => {
  return (
   
        <div className=" bg-white px-6 py-6 lg:px-24 flex items-center justify-center">
          <div className="max-w-3xl w-full bg-gray-50 p-8 rounded-2xl shadow-md">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
    
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
    
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                />
              </div>
    
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      );
    };
    
    export default Contact;
    
 