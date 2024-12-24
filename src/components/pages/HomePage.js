import React, { useState, useEffect, useRef } from 'react';
import { Navigation, Heart, Users, Star, TrendingUp, UserCheck, Award, Building2, 
  Brain, Clock, Shield, Target } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card, Button, Container, Text } from '../common';

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

const HomePage = ({ setActivePage }) => {
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [missionRef, missionVisible] = useIntersectionObserver();
  const [servicesRef, servicesVisible] = useIntersectionObserver();
  const [statsRef, statsVisible] = useIntersectionObserver();
  const [specialtiesRef, specialtiesVisible] = useIntersectionObserver();
  const [processRef, processVisible] = useIntersectionObserver();
  const [testimonialsRef, testimonialsVisible] = useIntersectionObserver();
  const [whyUsRef, whyUsVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();

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

  return (
    <div className="animate-fadeIn overflow-x-hidden">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className={`relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden transition-all duration-1000 transform ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
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
              filter: "brightness(0.85) opacity(0.8)",
              transform: heroVisible ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 1.5s ease-out'
            }}
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-50/60 to-transparent"></div>
        <Container className="relative h-full flex items-center justify-center text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <Text
              variant="h1"
              color="default"
              className="mb-6 animate-slideDown text-blue-900 leading-tight"
            >
              Your Health Journey, Guided with Care
            </Text>
            <Text
              variant="body-large"
              color="default"
              className="mb-8 animate-slideUp delay-300 text-warm-gray-800"
            >
              Expert health advocacy and care navigation services tailored to your needs
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeIn delay-500">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setActivePage('Contact')}
              >
                Get Started Today
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => setActivePage('Services'), 100);
                }}
              >
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        {/* Mission Statement */}
        <div 
          ref={missionRef}
          className={`text-center mb-16 max-w-4xl mx-auto transition-all duration-1000 transform ${
            missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 text-center">
            Our Mission
          </h2>
          <Text variant="body-large" color="muted" className="text-center">
            To empower individuals and families through their healthcare journey by providing expert advocacy, 
            personalized care navigation, and comprehensive support services that ensure the best possible outcomes.
          </Text>
        </div>

        {/* Core Services Grid */}
        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 transform ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card>
            <Navigation className="w-16 h-16 text-blue-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Holistic Approach</h3>
            <p className="text-gray-600">Merging advocacy, nursing, social work, and life coaching for comprehensive care.</p>
          </Card>
          
          <Card>
            <Heart className="w-16 h-16 text-blue-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Client-Centered Care</h3>
            <p className="text-gray-600">Working directly for you, not insurance companies or hospitals.</p>
          </Card>
          
          <Card>
            <Users className="w-16 h-16 text-blue-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Family Support</h3>
            <p className="text-gray-600">Supporting both clients and their families throughout the healthcare journey.</p>
          </Card>
        </div>

        {/* Stats Section with Animation */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 transition-all duration-1000 transform ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </Card>
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
        <div 
          ref={specialtiesRef}
          className={`mb-20 transition-all duration-1000 transform ${
            specialtiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 text-center">Our Areas of Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Specialized healthcare navigation services across multiple disciplines
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <Card
                key={index}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="flex justify-center mb-6">
                  <specialty.icon className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{specialty.title}</h3>
                <p className="text-gray-600 text-center">{specialty.description}</p>
              </Card>
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
        <div 
          ref={processRef}
          className={`mb-20 transition-all duration-1000 transform ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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
                <Card>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </Card>
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
        </div>

        {/* Testimonials Section */}
        <div 
          ref={testimonialsRef}
          className={`mb-16 transition-all duration-1000 transform ${
            testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card variant="gradient" className="p-12">
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
                  <Card className="p-8">
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
                  </Card>
                </div>
              ))}
            </Slider>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <div 
          ref={whyUsRef}
          className={`mb-16 transition-all duration-1000 transform ${
            whyUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card variant="gradient" className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 text-center">
              Why Choose <span className="font-bold">levɘl</span> health navigation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Expert healthcare navigation tailored to your unique needs
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="transform transition-all duration-300 hover:scale-105">
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
              </Card>
              <Card className="transform transition-all duration-300 hover:scale-105">
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
              </Card>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div 
          ref={ctaRef}
          className={`transition-all duration-1000 transform ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card variant="blue" className="p-12 text-center">
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
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default HomePage; 