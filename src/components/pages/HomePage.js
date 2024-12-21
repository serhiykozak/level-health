import React, { useState, useEffect } from 'react';
import { Navigation, Heart, Users, Star, TrendingUp, UserCheck, Award, Building2 } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePage = ({ setActivePage }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [stats] = useState([
    { label: "Years Experience", value: 15, suffix: "+", icon: TrendingUp },
    { label: "Clients Served", value: 50, suffix: "+", icon: UserCheck },
    { label: "Success Rate", value: 98, suffix: "%", icon: Award },
    { label: "Healthcare Partners", value: 10, suffix: "+", icon: Building2 }
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
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-3000"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1723618898312-54269787cbe0?q=80&w=3494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            filter: "brightness(0.7)",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center md:text-left">
          <div className="text-white max-w-2xl mx-auto md:mx-0 animate-slideUp">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Healthcare Journey, Guided with Care
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Expert health advocacy and care navigation services tailored to your needs
            </p>
            <button 
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => setActivePage('Contact')}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold mb-4">Making Healthcare Simple</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your dedicated partner in health advocacy and care navigation</p>
        </div>

        {/* Stats Section with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Services Grid with Enhanced Visual Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <Navigation className="w-16 h-16 text-blue-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Holistic Approach</h3>
            <p className="text-gray-600">Merging advocacy, nursing, social work, and life coaching for comprehensive care.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <Heart className="w-16 h-16 text-blue-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Client-Centered Care</h3>
            <p className="text-gray-600">Working directly for you, not insurance companies or hospitals.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <Users className="w-16 h-16 text-blue-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Family Support</h3>
            <p className="text-gray-600">Supporting both clients and their families throughout the healthcare journey.</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <Slider
            dots={true}
            infinite={true}
            speed={800}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={5000}
            arrows={false}
            className="testimonial-slider -mx-8"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-8">
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <div className="flex justify-center mb-6">
                    <Star className="w-8 h-8 text-yellow-400 mx-1" fill="currentColor" />
                    <Star className="w-8 h-8 text-yellow-400 mx-1" fill="currentColor" />
                    <Star className="w-8 h-8 text-yellow-400 mx-1" fill="currentColor" />
                    <Star className="w-8 h-8 text-yellow-400 mx-1" fill="currentColor" />
                    <Star className="w-8 h-8 text-yellow-400 mx-1" fill="currentColor" />
                  </div>
                  <p className="text-xl text-center mb-6 italic text-gray-700">{testimonial.text}</p>
                  <p className="text-center font-semibold text-blue-600">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose levɘl health?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Common Healthcare Challenges We Address:</h3>
              <ul className="space-y-4">
                {[
                  "Low healthcare literacy and system navigation",
                  "Overwhelming and confusing healthcare processes",
                  "Incomplete assessments and unmet needs",
                  "Inadequate support for clients and families",
                  "Complex insurance and benefits navigation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 group">
                    <span className="inline-block p-1 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Our Solutions:</h3>
              <ul className="space-y-4">
                {[
                  "Comprehensive clinical assessments",
                  "Streamlined care navigation and coordination",
                  "Insurance benefits and appeals management",
                  "Educational resources and informed decision support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 group">
                    <span className="inline-block p-1 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 