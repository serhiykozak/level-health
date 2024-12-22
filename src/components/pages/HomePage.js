import React, { useState, useEffect } from 'react';
import { Navigation, Heart, Users, Star, TrendingUp, UserCheck, Award, Building2, 
  Brain, Clock, Shield, Target } from 'lucide-react';
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
      text: "<span className='font-bold'>levɘl</span> health navigation transformed our healthcare journey. Their expertise and dedication made all the difference.",
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

  const specialties = [
    {
      icon: Brain,
      title: "Mental Health Support",
      description: "Expert guidance for mental health challenges, including anxiety, depression, and complex trauma."
    },
    {
      icon: Clock,
      title: "Chronic Disease Management",
      description: "Comprehensive support for ongoing health conditions and complex medical needs."
    },
    {
      icon: Shield,
      title: "Elder Care Navigation",
      description: "Specialized assistance for aging adults, including care coordination and family support."
    },
    {
      icon: Users,
      title: "Family Advocacy",
      description: "Dedicated support for families navigating complex healthcare decisions and transitions."
    }
  ];
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <picture>
          {/* WebP versions */}
          <source
            media="(min-width: 1024px)"
            srcSet={`${process.env.PUBLIC_URL}/images/hero/hero-lg.webp`}
            type="image/webp"
          />
          <source
            media="(min-width: 640px)"
            srcSet={`${process.env.PUBLIC_URL}/images/hero/hero-md.webp`}
            type="image/webp"
          />
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/hero/hero-sm.webp`}
            type="image/webp"
          />
          
          {/* JPG fallbacks */}
          <source
            media="(min-width: 1024px)"
            srcSet={`${process.env.PUBLIC_URL}/images/hero/hero-lg.jpg`}
          />
          <source
            media="(min-width: 640px)"
            srcSet={`${process.env.PUBLIC_URL}/images/hero/hero-md.jpg`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/hero/hero-sm.jpg`}
            alt="Health navigation"
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-3000"
            style={{
              filter: "brightness(0.85) opacity(0.8)"
            }}
            loading="eager" // Load immediately as it's above the fold
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-50/60 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center md:text-left">
          <div className="text-warm-gray-900 max-w-2xl mx-auto md:mx-0 animate-slideUp">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-blue-900">
              Your Health Journey, Guided with Care
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-warm-gray-800">
              Expert health advocacy and care navigation services tailored to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={() => setActivePage('Contact')}
              >
                Get Started Today
              </button>
              <button 
                className="bg-white/50 backdrop-blur-sm text-blue-700 px-8 py-4 rounded-full text-lg hover:bg-white/70 transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => setActivePage('Services'), 100);
                }}
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Mission Statement */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To empower individuals and families through their healthcare journey by providing expert advocacy, 
            personalized care navigation, and comprehensive support services that ensure the best possible outcomes.
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Making Healthcare Simple</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your dedicated partner in health advocacy and care navigation
          </p>
        </div>

        {/* Stats Section with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
        <div className="text-center mb-16">
          <button
            onClick={() => {
              setActivePage('About');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg group transition-all duration-300"
          >
            Learn More About Us
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Specialties Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 text-center">Our Areas of Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Specialized healthcare navigation services across multiple disciplines
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <specialty.icon className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{specialty.title}</h3>
                <p className="text-gray-600 text-center">{specialty.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => setActivePage('Services'), 100);
              }}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg group transition-all duration-300"
            >
              Learn More About Our Services
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 text-center">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A systematic approach to ensure comprehensive care and support
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We begin with a thorough assessment of your needs and challenges."
              },
              {
                step: "2",
                title: "Care Planning",
                description: "Develop a personalized strategy tailored to your specific situation."
              },
              {
                step: "3",
                title: "Implementation",
                description: "Execute the plan with continuous coordination and support."
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "Provide continuous advocacy and adjust strategies as needed."
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => setActivePage('Process'), 100);
              }}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg group transition-all duration-300"
            >
              Learn More About Our Process
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 text-center">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Real experiences from families we've helped navigate their healthcare journey
          </p>
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
                  <p 
                    className="text-xl text-center mb-6 italic text-gray-700"
                    dangerouslySetInnerHTML={{ __html: testimonial.text }}
                  />
                  <p className="text-center font-semibold text-blue-600">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 text-center">
            Why Choose <span className="font-bold">levɘl</span> health navigation?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Expert healthcare navigation tailored to your unique needs
          </p>
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
                    <div className="p-1 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
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
                    <div className="p-1 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 p-12 rounded-2xl shadow-sm text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-800">Let us help you navigate your healthcare journey with confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              onClick={() => setActivePage('Contact')}
            >
              Schedule a Consultation
            </button>
            <button 
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => setActivePage('Cases'), 100);
              }}
            >
              View Case Studies
            </button>
          </div>
        </div>

        {/* Next Page Navigation */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => setActivePage('About'), 100);
            }}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg group transition-all duration-300"
          >
            Learn More About Us
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 