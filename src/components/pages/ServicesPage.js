import React, { useState, useEffect } from 'react';
import { Target, Stethoscope, Heart, Navigation, FileText, Shield, Users } from 'lucide-react';

const ServicesPage = ({ setActivePage }) => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', label: 'All Services', icon: Target },
    { id: 'clinical', label: 'Clinical Services', icon: Stethoscope },
    { id: 'support', label: 'Support Services', icon: Heart },
    { id: 'navigation', label: 'Navigation Services', icon: Navigation }
  ];

  const services = [
    {
      title: "Clinical Assessment & Care Planning",
      description: "Thorough evaluation of medical needs and development of comprehensive care plans.",
      category: "clinical",
      icon: <Stethoscope className="w-12 h-12 text-blue-600 mb-4" />,
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      details: [
        "Initial health assessment",
        "Care plan development",
        "Regular progress monitoring",
        "Health goal setting"
      ]
    },
    {
      title: "Medical Record Review & Management",
      description: "Detailed analysis of medical records to ensure comprehensive care coordination.",
      category: "clinical",
      icon: <FileText className="w-12 h-12 text-blue-600 mb-4" />,
      details: [
        "Document organization",
        "History analysis",
        "Treatment tracking",
        "Record maintenance"
      ]
    },
    {
      title: "Insurance Navigation",
      description: "Expert guidance through benefits, authorizations, and appeals processes.",
      category: "navigation",
      icon: <Shield className="w-12 h-12 text-blue-600 mb-4" />,
      details: [
        "Benefits verification",
        "Claims assistance",
        "Appeals support",
        "Coverage optimization"
      ]
    },
    {
      title: "Provider Coordination",
      description: "Seamless communication and coordination between all healthcare providers.",
      category: "navigation",
      icon: <Users className="w-12 h-12 text-blue-600 mb-4" />,
      details: [
        "Provider communication",
        "Appointment scheduling",
        "Treatment coordination",
        "Care team meetings"
      ]
    },
    {
      title: "Family Support & Education",
      description: "Resources and guidance for families and caregivers.",
      category: "support",
      icon: <Heart className="w-12 h-12 text-blue-600 mb-4" />,
      details: [
        "Family counseling",
        "Resource provision",
        "Education sessions",
        "Support group access"
      ]
    },
    {
      title: "Life Coaching",
      description: "Support for time management, organization, and wellness goals.",
      category: "support",
      icon: <Target className="w-12 h-12 text-blue-600 mb-4" />,
      details: [
        "Goal setting",
        "Progress tracking",
        "Lifestyle planning",
        "Wellness strategies"
      ]
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`text-center mb-12 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl font-bold mb-4">Our Comprehensive Services</h2>
        <p className="text-xl text-gray-600">Tailored healthcare solutions for every need</p>
      </div>

      <div className="mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <category.icon size={20} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105`}
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="relative h-48 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 hover:scale-110"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  loading: 'lazy'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                {service.icon}
                <p className="ml-4 text-gray-600">{service.description}</p>
              </div>
              
              <div className={`transition-all duration-300 ${
                hoveredService === index ? 'opacity-100 max-h-48' : 'opacity-0 max-h-0'
              } overflow-hidden`}>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Ready to Get Started?</h3>
        <p className="text-center text-gray-600 mb-8">
          Contact us today to learn more about how we can support your healthcare journey.
        </p>
        <div className="flex justify-center">
          <button 
            onClick={() => setActivePage('Contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 