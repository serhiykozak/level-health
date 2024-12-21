import React, { useState, useRef, useEffect } from 'react';
import { 
  Heart, Navigation, FileText, Shield, Users, Brain, 
  Target, Stethoscope, Clipboard
} from 'lucide-react';

const ServicesPage = ({ setActivePage }) => {
  const [hoveredCircle, setHoveredCircle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const servicesRef = useRef({});
  const [expandedSections, setExpandedSections] = useState({});

  // 1) We track the size of the container in state
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // On mount, measure container size
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    }
  }, []);

  const toggleSection = (serviceId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  // Circle data
  const circleMenuItems = [
    {
      id: 'center',
      title: 'Meeting Wellness Goals',
      icon: Target,
      color: '#1D4ED8', // Tailwind "blue-600"
      description: 'Comprehensive support for achieving your health and wellness objectives.',
      details: [
        "Holistic wellness planning",
        "Health goal coordination",
        "Outcome optimization",
        "Lifestyle modification support"
      ],
      expandedContent: {
        keyFeatures: [
          "Comprehensive health assessment",
          "Integrated care planning",
          "Multi-disciplinary approach",
          "Continuous monitoring"
        ],
        benefits: [
          "Optimized health outcomes",
          "Coordinated care delivery",
          "Enhanced quality of life",
          "Sustainable health improvements"
        ],
        process: [
          "Health needs assessment",
          "Integrated plan development",
          "Implementation support",
          "Outcome monitoring"
        ]
      }
    },
    {
      id: 'clinical',
      title: 'Clinical Assessment',
      icon: Stethoscope,
      color: '#DC2626', // red-600
      description: 'Thorough evaluation of medical needs and development of comprehensive care plans.',
      details: [
        "Initial health assessment and baseline evaluation",
        "Personalized care plan development and goal setting",
        "Regular progress monitoring and plan adjustments",
        "Health goal setting and outcome tracking"
      ],
      expandedContent: {
        keyFeatures: [
          "Comprehensive medical history review",
          "Current health status evaluation",
          "Identification of health risks and challenges",
          "Development of personalized care strategies"
        ],
        benefits: [
          "Early identification of potential health issues",
          "Coordinated care approach",
          "Clear health improvement roadmap",
          "Regular progress evaluation"
        ],
        process: [
          "Initial consultation and assessment",
          "Development of personalized care plan",
          "Regular monitoring and adjustments",
          "Outcome evaluation and plan updates"
        ]
      }
    },
    {
      id: 'records',
      title: 'Medical Records',
      icon: FileText,
      color: '#7C3AED', // purple-600
      description: 'Detailed analysis and organization of medical records to ensure comprehensive care coordination.',
      details: [
        "Complete medical record organization and digitization",
        "Detailed history analysis and summary creation",
        "Ongoing treatment tracking and documentation",
        "Secure record maintenance and updates"
      ],
      expandedContent: {
        keyFeatures: [
          "Centralized record management",
          "Digital record organization",
          "Secure document storage",
          "Easy access and sharing"
        ],
        benefits: [
          "Improved care coordination",
          "Reduced medical errors",
          "Better treatment planning",
          "Efficient information sharing"
        ],
        process: [
          "Initial record collection",
          "Document organization and digitization",
          "Regular updates and maintenance",
          "Secure sharing with providers"
        ]
      }
    },
    {
      id: 'insurance',
      title: 'Insurance Navigation',
      icon: Shield,
      color: '#059669', // green-600
      description: 'Expert guidance through benefits, authorizations, and appeals processes.',
      details: [
        "Comprehensive benefits verification and explanation",
        "Pre-authorization and claims assistance",
        "Appeals support and advocacy",
        "Coverage optimization strategies"
      ],
      expandedContent: {
        keyFeatures: [
          "In-depth insurance policy analysis",
          "Benefits maximization strategies",
          "Claims tracking and management",
          "Appeals process expertise"
        ],
        benefits: [
          "Reduced insurance denials",
          "Maximum coverage utilization",
          "Streamlined claims process",
          "Cost-effective care planning"
        ],
        process: [
          "Initial policy review and analysis",
          "Coverage verification and optimization",
          "Ongoing claims management",
          "Appeals handling when needed"
        ]
      }
    },
    {
      id: 'coordination',
      title: 'Provider Coordination',
      icon: Users,
      color: '#14B8A6', // teal-600
      description: 'Seamless communication and coordination between all healthcare providers.',
      details: [
        "Comprehensive provider network management",
        "Appointment scheduling and coordination",
        "Treatment plan synchronization",
        "Care team communication facilitation"
      ],
      expandedContent: {
        keyFeatures: [
          "Provider network development",
          "Care team collaboration",
          "Treatment synchronization",
          "Communication management"
        ],
        benefits: [
          "Improved care continuity",
          "Better treatment outcomes",
          "Reduced care gaps",
          "Enhanced provider collaboration"
        ],
        process: [
          "Provider network assessment",
          "Care team assembly",
          "Communication protocol setup",
          "Ongoing coordination management"
        ]
      }
    },
    {
      id: 'support',
      title: 'Family Support',
      icon: Heart,
      color: '#F97316', // orange-600
      description: 'Resources and guidance for families and caregivers.',
      details: [
        "Comprehensive family counseling services",
        "Resource identification and access",
        "Educational program coordination",
        "Support group facilitation"
      ],
      expandedContent: {
        keyFeatures: [
          "Family needs assessment",
          "Resource matching",
          "Educational programming",
          "Support network development"
        ],
        benefits: [
          "Enhanced family coping skills",
          "Better care understanding",
          "Stronger support networks",
          "Improved care outcomes"
        ],
        process: [
          "Initial family assessment",
          "Resource plan development",
          "Support implementation",
          "Regular progress review"
        ]
      }
    },
    {
      id: 'coaching',
      title: 'Life Coaching',
      icon: Brain,
      color: '#DB2777', // pink-600
      description: 'Support for time management, organization, and wellness goals.',
      details: [
        "Personalized goal setting and planning",
        "Progress tracking and accountability",
        "Lifestyle optimization strategies",
        "Wellness plan development"
      ],
      expandedContent: {
        keyFeatures: [
          "Personal goal assessment",
          "Action plan development",
          "Progress monitoring",
          "Strategy adjustment"
        ],
        benefits: [
          "Improved life balance",
          "Enhanced goal achievement",
          "Better time management",
          "Increased well-being"
        ],
        process: [
          "Initial goals discussion",
          "Strategy development",
          "Regular check-ins",
          "Progress evaluation"
        ]
      }
    }
  ];

  // Scroll
  const scrollToService = (id) => {
    setSelectedCategory(id);
    setExpandedSections({});
    setTimeout(() => {
      setExpandedSections((prev) => ({
        ...prev,
        [id]: true
      }));
      servicesRef.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
  };

  // Angles for each service:
  const circleAngles = {
    center: 0,
    clinical: 150,    // 11 o’clock
    records: 30,      // 1 o’clock
    insurance: -90,   // 3 o’clock
    coordination: -30,// 5 o’clock
    support: 210,     // 7 o’clock
    coaching: 90      // 9 o’clock
  };

  // For layering (z-index)
  const zIndices = {
    center: 100,
    clinical: 70,
    records: 50,
    insurance: 10,
    coordination: 40,
    support: 5,
    coaching: 60
  };

  // 2) Increased orbitRadiusPercent to spread out circles
  const getCircleStyle = (id, color) => {
    const { width, height } = containerSize;
    if (!width || !height) {
      // If container not measured yet, just hide circles
      return { display: 'none' };
    }

    const minDim = Math.min(width, height);

    // Outer circle size = 1/3 of min dimension
    const circleSize = minDim / 3;
    // Center circle size = 2/3 of that => 1/4.5
    const centerSize = circleSize * (3 / 4);

    // Increase radius => 50 => 50% of (minDim/2)
    const orbitRadiusPercent = 55;

    const angleDeg = circleAngles[id] || 0;
    const angleRad = (Math.PI / 180) * angleDeg;

    const isCenter = id === 'center';
    const diameter = isCenter ? centerSize : circleSize;

    const centerX = width / 2;
    const centerY = height / 2;

    let x = centerX;
    let y = centerY;

    if (!isCenter) {
      // radiusPx = 0.40 * (minDim/2)
      const radiusPx = (orbitRadiusPercent / 100) * (minDim / 2);
      x = centerX + radiusPx * Math.cos(angleRad);
      y = centerY + radiusPx * Math.sin(angleRad);
    }

    return {
      position: 'absolute',
      width: `${diameter}px`,
      height: `${diameter}px`,
      left: `${x}px`,
      top: `${y}px`,
      transform: 'translate(-50%, -50%)',
      borderRadius: '9999px',
      backgroundColor: color,
      zIndex: hoveredCircle === id ? 100 : zIndices[id] || 10,
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: hoveredCircle === id 
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
        : 'none'
    };
  };

  // Centered text overlay
  const circleTextStyle = {
    position: 'absolute',
    width: '80%',
    textAlign: 'center',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.3s'
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive healthcare navigation and advocacy services tailored to your unique needs.
        </p>
      </div>

      {/* The container that we measure */}
      <div 
        ref={containerRef} 
        className="relative w-full min-h-[400px] md:min-h-[600px] mt-4 mb-4 overflow-visible bg-gray-50"
      >
        {
          circleMenuItems.map((item) => {
            const style = getCircleStyle(item.id, item.color);

            return (
              <div
                key={item.id}
                style={style}
                onMouseEnter={() => setHoveredCircle(item.id)}
                onMouseLeave={() => setHoveredCircle(null)}
                onClick={() => scrollToService(item.id)}
                className="hover:scale-125 flex items-center justify-center"
              >
                {/* Text inside */}
                <div style={circleTextStyle}>
                  <item.icon
                    style={{
                      width: `${Math.floor(parseFloat(style.width) / 5)}px`,
                      height: `${Math.floor(parseFloat(style.height) / 5)}px`,
                      margin: '0 auto 4px',
                      color: '#ffffff'
                    }}
                  />
                  <div
                    style={{
                      fontSize: `${Math.floor(parseFloat(style.width) / 9)}px`,
                      lineHeight: '1.1',
                      color: '#ffffff'
                    }}
                  >
                    {item.title.split(' ').map((word, i) => (
                      <div key={i}>{word}</div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>

      {/* Service Sections */}
      <div className="space-y-16 mt-16">
        {[
          circleMenuItems.find(item => item.id === 'center'),        // Meeting Wellness Goals
          circleMenuItems.find(item => item.id === 'insurance'),     // Insurance Navigation
          circleMenuItems.find(item => item.id === 'coordination'),  // Provider Coordination
          circleMenuItems.find(item => item.id === 'records'),       // Medical Records
          circleMenuItems.find(item => item.id === 'coaching'),      // Life Coaching
          circleMenuItems.find(item => item.id === 'clinical'),      // Clinical Assessment
          circleMenuItems.find(item => item.id === 'support')        // Family Support
        ].map(service => {
          if (!service) return null; // safeguard

          return (
            <div
              key={service.id}
              ref={el => (servicesRef.current[service.id] = el)}
              className={
                "bg-white rounded-xl shadow-lg p-8 transition-all duration-500 " +
                (selectedCategory === service.id ? "scale-105" : "")
              }
            >
              <div
                className="flex items-start mb-6 cursor-pointer"
                onClick={() => toggleSection(service.id)}
              >
                <service.icon className="w-12 h-12 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-6 flex-grow">
                  <h2 className="text-2xl font-bold text-blue-900 text-left">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 text-left">
                    {service.description}
                  </p>
                </div>
                <div
                  className={
                    "transform transition-transform duration-300 flex-shrink-0 " +
                    (expandedSections[service.id] ? "rotate-180" : "")
                  }
                >
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={
                  "transition-all duration-500 overflow-hidden " +
                  (expandedSections[service.id]
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0")
                }
              >
                {/* Core Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {service.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-left">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Expanded Content */}
                {service.expandedContent && (
                  <div className="mt-8 space-y-6">
                    {/* Key Features */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4 text-left">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.expandedContent.keyFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-left">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-900 mb-4 text-left">
                        Benefits
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.expandedContent.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-left">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-purple-900 mb-4 text-left">
                        Our Process
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {service.expandedContent.process.map((step, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                              {index + 1}
                            </div>
                            <span className="text-gray-700 text-left pt-1">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Next Page Navigation */}
      <div className="mt-12 space-y-8">
        {/* Ready to Start Section */}
        <div className="bg-blue-50 shadow-sm w-full">
          <div className="max-w-3xl mx-auto p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-800">
              Contact us today to learn more about how we can support your healthcare journey.
            </p>
            <button
              onClick={() => setActivePage('Contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>

        {/* Process Navigation */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              setActivePage('Process');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg group transition-all duration-300"
          >
            Learn About Our Process
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

export default ServicesPage;