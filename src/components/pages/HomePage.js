import React, { useState, useEffect } from 'react';
import { Navigation, Heart, Users, Star } from 'lucide-react';

const HomePage = ({ setActivePage }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats] = useState([
    { label: "Years Experience", value: 15, suffix: "+" },
    { label: "Clients Served", value: 50, suffix: "+" },
    { label: "Success Rate", value: 98, suffix: "%" },
    { label: "Healthcare Partners", value: 10, suffix: "+" }
  ]);

  const testimonials = [
    {
      text: "levɘl health transformed our healthcare journey. Their expertise and dedication made all the difference.",
      author: "Sarah M., Family Caregiver"
    },
    {
      text: "The personalized attention and comprehensive care coordination exceeded our expectations.",
      author: "John D., Client"
    },
    {
      text: "Their advocacy services helped us navigate complex medical decisions with confidence.",
      author: "Maria R., Client Family"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1723618898312-54269787cbe0?q=80&w=3494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            filter: "brightness(0.7)",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center md:text-left">
          <div className="text-white max-w-2xl mx-auto md:mx-0">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              Your Healthcare Journey, Guided with Care
            </h1>
            <p className="text-xl mb-8">
              Expert health advocacy and care navigation services tailored to your needs
            </p>
            <button 
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
              onClick={() => setActivePage('Contact')}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold mb-4">Making Healthcare Simple</h2>
          <p className="text-xl text-gray-600">Your dedicated partner in health advocacy and care navigation</p>
        </div>

        {/* Stats Section with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300`}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Services Grid with Enhanced Visual Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <Navigation className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
            <p>Merging advocacy, nursing, social work, and life coaching for comprehensive care.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <Heart className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Client-Centered Care</h3>
            <p>Working directly for you, not insurance companies or hospitals.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Family Support</h3>
            <p>Supporting both clients and their families throughout the healthcare journey.</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">What Our Clients Say</h2>
          <div className="relative h-48">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 transform ${
                  index === currentTestimonial
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <Star className="w-8 h-8 text-yellow-400" fill="currentColor" />
                  <Star className="w-8 h-8 text-yellow-400" fill="currentColor" />
                  <Star className="w-8 h-8 text-yellow-400" fill="currentColor" />
                  <Star className="w-8 h-8 text-yellow-400" fill="currentColor" />
                  <Star className="w-8 h-8 text-yellow-400" fill="currentColor" />
                </div>
                <p className="text-xl text-center mb-4 italic">{testimonial.text}</p>
                <p className="text-center font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose levɘl health?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Common Healthcare Challenges We Address:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Low healthcare literacy and system navigation</li>
                <li>Overwhelming and confusing healthcare processes</li>
                <li>Incomplete assessments and unmet needs</li>
                <li>Inadequate support for clients and families</li>
                <li>Complex insurance and benefits navigation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Solutions:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comprehensive clinical assessments</li>
                <li>Streamlined care navigation and coordination</li>
                <li>Insurance benefits and appeals management</li>
                <li>Educational resources and informed decision support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 