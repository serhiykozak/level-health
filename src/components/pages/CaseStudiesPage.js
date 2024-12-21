import React, { useState } from 'react';

const CaseStudiesPage = ({ setActivePage }) => {
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

      {/* Next Page Navigation */}
      <div className="text-center mt-12">
        <button
          onClick={() => {
            setActivePage('Contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg group transition-all duration-300"
        >
          Contact Us
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

export default CaseStudiesPage; 