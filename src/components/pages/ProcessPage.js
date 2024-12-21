import React, { useState } from 'react';
import { 
  ClipboardCheck, Users, Brain, 
  PhoneCall, ArrowRight, CheckCircle2,
  Stethoscope, HeartPulse, Shield, MessageCircle
} from 'lucide-react';

const ProcessPage = ({ setActivePage }) => {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (stepNumber) => {
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber);
  };

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      icon: PhoneCall,
      description: "We begin with a thorough assessment of your needs and challenges.",
      details: [
        "Comprehensive review of medical history",
        "Discussion of current healthcare challenges",
        "Assessment of immediate and long-term needs",
        "Understanding family dynamics and support system",
        "Identification of primary healthcare goals"
      ]
    },
    {
      step: 2,
      title: "Care Planning",
      icon: Brain,
      description: "Develop a personalized strategy tailored to your specific situation.",
      details: [
        "Creation of detailed care roadmap",
        "Coordination with healthcare providers",
        "Insurance and benefits review",
        "Resource identification and allocation",
        "Timeline development for care milestones"
      ]
    },
    {
      step: 3,
      title: "Implementation",
      icon: ClipboardCheck,
      description: "Execute the plan with continuous coordination and support.",
      details: [
        "Appointment scheduling and coordination",
        "Provider communication management",
        "Documentation organization",
        "Care team assembly and coordination",
        "Regular progress monitoring"
      ]
    },
    {
      step: 4,
      title: "Ongoing Support",
      icon: HeartPulse,
      description: "Provide continuous advocacy and adjust strategies as needed.",
      details: [
        "Regular check-ins and updates",
        "Plan adjustments based on outcomes",
        "Continuous advocacy support",
        "Crisis intervention when needed",
        "Progress evaluation and goal updates"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "We ensure all aspects of your healthcare journey are covered and protected."
    },
    {
      icon: Users,
      title: "Family Integration",
      description: "We keep your family informed and involved throughout the entire process."
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Regular updates and open channels of communication ensure you're always informed."
    },
    {
      icon: Stethoscope,
      title: "Clinical Excellence",
      description: "Our medical expertise ensures the highest standard of care coordination."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Our Process</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A systematic approach to healthcare navigation, designed to provide you with comprehensive support and guidance every step of the way.
        </p>
      </div>

      {/* Process Steps */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`relative cursor-pointer transform transition-all duration-300 ${
                expandedStep === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => toggleStep(index)}
            >
              <div className={`bg-white p-8 rounded-xl shadow-lg ${
                expandedStep === index ? 'ring-2 ring-blue-500' : ''
              }`}>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <step.icon className="w-8 h-8 text-blue-600 mb-4" />
                
                {/* Expandable Details */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <ul className="space-y-2 mt-4">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-blue-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl shadow-lg mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Benefits of Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">
                <benefit.icon className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-900">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 shadow-sm w-full">
        <div className="max-w-3xl mx-auto p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-800">
            Contact us today to learn more about how we can support your healthcare journey.
          </p>
          <button 
            onClick={() => {
              setActivePage('Contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>

      {/* Next Page Navigation */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => {
            setActivePage('Cases');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg group transition-all duration-300"
        >
          View Our Case Studies
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
  );
};

export default ProcessPage; 