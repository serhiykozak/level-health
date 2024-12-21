import React, { useState, useEffect } from 'react';
import { Heart, Navigation, Phone, Users, Home, Mail, Info, FileText, CheckCircle, Shield, Target, Stethoscope, Star } from 'lucide-react';

const Navbar = ({ activePage, setActivePage }) => (
  <nav className="bg-blue-900 p-4 text-white">
    
    <div className="container mx-auto flex flex-wrap justify-between items-center">
      <div className="text-xl font-bold">levɘl health</div>
      <div className="flex space-x-4">
        {[
          { name: 'Home', icon: Home },
          { name: 'Services', icon: Heart },
          { name: 'Cases', icon: FileText },
          { name: 'About', icon: Info },
          { name: 'Contact', icon: Phone }
        ].map(item => ( 
          <button
            key={item.name}
            onClick={() => setActivePage(item.name)}
            className={`flex items-center space-x-1 px-3 py-2 rounded transition-all duration-300 ${
              activePage === item.name ? 'bg-blue-700' : 'hover:bg-blue-800'
            }`}
            style={{
              backgroundColor: activePage === item.name ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
              color: 'white'
            }}
          >
            <item.icon size={16} />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  </nav>
);

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
      <div className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
            filter: "brightness(0.7)",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              Your Healthcare Journey, Guided with Care
            </h1>
            <p className="text-xl mb-8">
              Expert health advocacy and care navigation services tailored to your needs
            </p>
            <button 
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
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
        <div className="grid md:grid-cols-4 gap-8 mb-12">
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
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                {/* <li>Worldwide service availability</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
            className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ${
              hoveredService === index ? 'scale-105' : ''
            }`}
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="relative h-48 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 hover:scale-110"
                style={{
                  backgroundImage: `url(${service.image})`,
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

const CaseStudiesPage = () => {
  const [expandedCase, setExpandedCase] = useState(null);

  const caseStudies = [
    {
      title: "Adolescent Mental Health Support",
      description: "14-year-old with anxiety and school refusal. Recent completion of 8-day stay at in-patient psych facility followed by 5 months in partial hospitalization program.",
      shortServices: ["Medical record review", "School coordination", "Treatment management", "Family support"],
      expandedDetails: {
        background: "Family feels they have exhausted all options and are searching for resources and answers without knowing where to look.",
        challenges: ["Preventing intervention by Child Protective Services", "School refusal", "Anxiety management"],
        servicesProvided: [
          "Comprehensive review of medical & school records",
          "Clinical assessment & findings",
          "Coordinating care and services including insurance benefit navigation",
          "Medication & Treatment Management",
          "Communication with providers",
          "Scheduling/attending appointments",
          "Literature review",
          "Client Education",
          "Collaboration with school district in formulating IEP",
          "Emotional support & coping strategies for client and family members"
        ]
      }
    },
    {
      title: "Elder Care Management",
      description: "72-year-old with neurocognitive degeneration, decreased appetite, malnutrition, and loss of speech.",
      shortServices: ["Clinical assessment", "Safety planning", "Nutrition management", "End of life care"],
      expandedDetails: {
        background: "Client requires comprehensive care coordination due to complex medical conditions and declining cognitive function.",
        challenges: [
          "Overwhelmed by complex diagnoses and care coordination",
          "Safety concerns and accident prevention",
          "Improving appetite and nutrition status"
        ],
        servicesProvided: [
          "Comprehensive Review of Medical Records",
          "Clinical Assessment & Findings",
          "Coordinating Care and Services",
          "Medication & Treatment Management",
          "Communication with Providers",
          "Attending Appointments",
          "Literature Review",
          "Client Education",
          "Emotional support & coping strategies",
          "Therapeutic communication",
          "End of Life Care Navigation"
        ]
      }
    },
    {
      title: "Adult Mental Health & Life Coaching",
      description: "69-year-old with attention deficit disorder (ADD), complex trauma, and former substance use. Recent death of mother and subsequent falling out with siblings over estate division.",
      shortServices: ["Life coaching", "Family mediation", "Treatment coordination", "Emotional support"],
      expandedDetails: {
        background: "Client seeking support for organization, time management, and family conflict resolution.",
        challenges: [
          "Time management difficulties",
          "Organization challenges",
          "Family conflict over estate",
          "Complex trauma management"
        ],
        servicesProvided: [
          "Life Coaching for time management and organization",
          "Comprehensive review of medical records",
          "Clinical assessment & findings",
          "Coordinating care and services",
          "Medication & Treatment Management",
          "Literature review",
          "Client Education",
          "Emotional support & coping strategies",
          "Therapeutic communication",
          "Consulting for remediation with siblings"
        ]
      }
    },
    {
      title: "Complex Medical Case Management",
      description: "19-year-old with cerebral palsy, epilepsy, severe cognitive dysfunction, wheelchair bound, unable to speak and requires feeding tube.",
      shortServices: ["Medical coordination", "Treatment management", "Family support", "Provider communication"],
      expandedDetails: {
        background: "Multiple orthopedic surgeries, chronic urinary tract infection, impaired upper airway clearance & chronic respiratory infections with frequent hospitalizations.",
        challenges: [
          "Complex medical needs requiring coordination",
          "Multiple chronic conditions",
          "Frequent hospitalizations",
          "Communication challenges"
        ],
        servicesProvided: [
          "Direct care coordination",
          "Comprehensive medical record review",
          "Clinical assessment & findings",
          "Treatment Management",
          "Medication Management",
          "Literature review",
          "Client Education",
          "Emotional support & coping strategies",
          "Therapeutic communication"
        ]
      }
    },
    {
      title: "International Care Coordination",
      description: "73-year-old requiring coordination between international healthcare systems and providers.",
      shortServices: ["International care navigation", "Treatment management", "Family education", "Provider communication"],
      expandedDetails: {
        background: "Client suffered injury while sleeping abroad, complicated by use of sleep aid Ambien and excessive alcohol use.",
        challenges: [
          "Overwhelmed by navigating healthcare system",
          "Inadequate understanding of hospitalization processes",
          "Treatment nonadherence",
          "International care coordination"
        ],
        servicesProvided: [
          "Traveling to be with patient during hospitalization",
          "Comprehensive review of medical records",
          "Clinical assessment & findings",
          "Navigation of care and services",
          "Medication & treatment management",
          "Literature review",
          "Client & family education",
          "Emotional support & coping strategies",
          "Therapeutic communication"
        ]
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Real Client Case Studies</h2>
      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
              expandedCase === index ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div 
              className="p-6 cursor-pointer hover:bg-blue-50 transition-colors"
              onClick={() => setExpandedCase(expandedCase === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{study.title}</h3>
                <button 
                  className={`text-blue-600 transform transition-transform duration-200 ${
                    expandedCase === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </button>
              </div>
              <p className="text-gray-600 mt-2">{study.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {study.shortServices.map((service, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            
            <div 
              className={`border-t transition-all duration-500 ease-in-out overflow-hidden ${
                expandedCase === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 bg-blue-50">
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2">Background</h4>
                  <p className="text-gray-700">{study.expandedDetails.background}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2">Key Challenges</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {study.expandedDetails.challenges.map((challenge, i) => (
                      <li key={i} className="text-gray-700">{challenge}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Services Provided</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {study.expandedDetails.servicesProvided.map((service, i) => (
                      <li key={i} className="text-gray-700">{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-8">About levɘl health</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="w-48 h-48 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <Users className="w-24 h-24 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold">Adriana Escobedo</h3>
          <p className="text-lg text-gray-600 mb-4">BS, BSN, RN</p>
        </div>
        <p className="mb-4 text-center">
          A dedicated healthcare professional with extensive experience in patient advocacy
          and care navigation. Her unique approach combines nursing expertise, case management skills,
          and a deep understanding of healthcare systems to provide comprehensive support for clients
          and their families.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
            <span>Client-centered care focused on individual needs and goals</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
            <span>Comprehensive wellness assessment and support</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
            <span>Evidence-based healthcare decision support</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
            <span>Family-inclusive approach to care management</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea className="w-full p-2 border rounded h-32"></textarea>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="w-6 h-6 mr-2 text-blue-600" />
            <span>xxx.xxxxxxx@gmail.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-6 h-6 mr-2 text-blue-600" />
            <span>Contact us to schedule a consultation</span>
          </div>
          <div className="mt-6">
            <p className="text-gray-600">
              Serving clients worldwide with personalized health advocacy and care navigation services.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage setActivePage={setActivePage} />;
      case 'Services':
        return <ServicesPage setActivePage={setActivePage} />;
      case 'Case Studies':
        return <CaseStudiesPage />;
      case 'About':
        return <AboutPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
      <footer className="bg-blue-900 text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 levɘl health. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
