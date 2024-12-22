import React from 'react';
import { Check } from 'lucide-react';

const ThankYouPage = ({ setActivePage }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-blue-900">
          Thank You for Reaching Out!
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          We've received your message and will get back to you shortly.
        </p>
        <button
          onClick={() => setActivePage('Home')}
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage; 