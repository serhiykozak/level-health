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
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Real Client Case Studies</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore how we've helped clients navigate complex healthcare challenges with personalized solutions and dedicated support.
        </p>
      </div>
      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
              expandedCase === index ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div 
              className="p-8 cursor-pointer hover:bg-blue-50 transition-colors duration-300"
              onClick={() => setExpandedCase(expandedCase === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-blue-900">{study.title}</h3>
                <button 
                  className={`text-blue-600 transform transition-transform duration-300 ${
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
              className={`border-t transition-all duration-300 overflow-hidden ${
                expandedCase === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-8 bg-blue-50">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Background</h4>
                  <p className="text-gray-700">{study.expandedDetails.background}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Key Challenges</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {study.expandedDetails.challenges.map((challenge, i) => (
                      <li key={i} className="text-gray-700">{challenge}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Services Provided</h4>
                  <ul className="list-disc list-inside space-y-2">
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