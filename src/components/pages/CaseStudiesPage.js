import React, { useState } from 'react';
import { 
  CheckCircle2,
  Brain,
  Heart,
  Target,
  Stethoscope,
  Globe,
  Shield
} from 'lucide-react';

const CaseStudiesPage = ({ setActivePage }) => {
  const [expandedCases, setExpandedCases] = useState({});

  const caseStudies = [
    {
      title: "Adolescent Mental Health Support",
      icon: Brain,
      color: '#2563EB',
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
      icon: Heart,
      color: '#DC2626',
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
      icon: Target,
      color: '#7C3AED',
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
      icon: Stethoscope,
      color: '#059669',
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
      icon: Globe,
      color: '#EA580C',
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

  const toggleCase = (index) => {
    setExpandedCases(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Real Client Case Studies</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore how we've helped clients navigate complex healthcare challenges with personalized solutions and dedicated support.
        </p>
      </div>
      <div className="space-y-8 max-w-[95%] mx-auto">
        {caseStudies.map((study, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform ${
              expandedCases[index] ? 'ring-2 ring-blue-500 scale-[1.02]' : 'hover:scale-[1.02]'
            }`}
          >
            <div 
              className="p-6 md:p-8 cursor-pointer hover:bg-blue-50 transition-colors duration-300"
              onClick={() => toggleCase(index)}
            >
              <div className="flex justify-between items-start">
                <div className="pr-6">
                  <div className="flex items-center gap-3 mb-4">
                    <study.icon className="w-8 h-8" style={{ color: study.color }} />
                    <h3 className="text-xl font-semibold text-blue-900">{study.title}</h3>
                  </div>
                  <p className="text-gray-600 mt-2">{study.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.shortServices.map((service, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className={`transform transition-transform duration-300 flex-shrink-0 ${
                    expandedCases[index] ? 'rotate-180' : ''
                  }`}
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
            </div>
            <div 
              className={`border-t transition-all duration-300 overflow-hidden ${
                expandedCases[index] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 md:p-8 space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Background</h4>
                  <p className="text-gray-700">{study.expandedDetails.background}</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Key Challenges</h4>
                  <ul className="space-y-2">
                    {study.expandedDetails.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Target className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-900 mb-3">Services Provided</h4>
                  <ul className="space-y-2">
                    {study.expandedDetails.servicesProvided.map((service, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 shadow-sm w-full mt-16">
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
    </div>
  );
};

export default CaseStudiesPage; 