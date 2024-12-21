import React from 'react';
import { Users, CheckCircle, Award, GraduationCap, Heart, Stethoscope } from 'lucide-react';

const AboutPage = ({ setActivePage }) => (
  <div className="container mx-auto px-4 py-12">
    {/* Hero Section */}
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">About <span className="font-bold">levɘl</span> health navigation</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Transforming healthcare experiences through expert advocacy, personalized navigation, and compassionate support.
      </p>
    </div>

    {/* Founder Section */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
      <div className="md:flex">
        <div className="md:w-1/3 bg-blue-50 p-8 flex flex-col items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            <Users className="w-24 h-24 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-blue-900">Adriana Escobedo</h2>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">BS Biochemistry</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">BSN</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">RN</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <span className="text-sm text-gray-600">UCLA</span>
            <span className="text-sm text-gray-600">•</span>
            <span className="text-sm text-gray-600">George Mason University</span>
          </div>
        </div>
        <div className="md:w-2/3 p-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">Founder & Lead Healthcare Navigator</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              As a patient advocate and medical case management consultant, Adriana provides clients with the resources 
              and knowledge required to make the most informed decisions for their healthcare needs. Her role focuses on 
              optimizing the patient-provider experience by facilitating effective communication between patients and their 
              healthcare providers.
            </p>
            <p>
              With a comprehensive approach, she begins each client relationship with a thorough review of medical history 
              and discussion of current objectives. Her goal is to broaden patient awareness of their healthcare needs while 
              providing expert guidance in navigating the healthcare system.
            </p>
            <p>
              Combining her background in biochemistry from UCLA with nursing expertise from George Mason University, 
              Adriana brings a unique scientific and clinical perspective to healthcare advocacy.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Professional Experience Section */}
    <div className="bg-white rounded-xl shadow-lg mb-16 overflow-hidden">
      <h3 className="text-2xl font-semibold p-8 text-blue-900 border-b">Professional Experience</h3>
      <div className="p-8">
        <div className="space-y-8">
          {[
            {
              title: "Private Patient Advocate and Care Navigator",
              company: "Self employed",
              period: "2017 - Present",
              skills: [
                "Concierge Medicine",
                "Treatment Planning",
                "Health Education",
                "Healthcare Management",
                "Medication Adherence",
                "Special Needs Planning",
                "Care Plans"
              ]
            },
            {
              title: "Health And Wellness Consultant",
              company: "Apple a Day-Care Services",
              period: "2014 - Present",
              skills: [
                "Medical Case Management",
                "Concierge Services",
                "Neurodiversity Support",
                "Care Plans",
                "Organization Skills",
                "Meal Planning"
              ]
            },
            {
              title: "Intensive Care Nurse",
              company: "Inova Health",
              period: "2022 - 2023",
              skills: [
                "Critical Care Medicine",
                "Patient Care Management",
                "Care Plans"
              ]
            },
            {
              title: "Research Laboratory Technician",
              company: "Salk Institute for Biological Studies",
              period: "2007 - 2008",
              location: "La Jolla, California",
              skills: ["Research", "Laboratory Techniques", "Scientific Analysis"]
            }
          ].map((experience, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-lg font-semibold text-blue-900">{experience.title}</h4>
              <p className="text-gray-600">{experience.company}</p>
              <p className="text-sm text-gray-500 mb-2">{experience.period}</p>
              {experience.location && (
                <p className="text-sm text-gray-500 mb-2">{experience.location}</p>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Qualifications Section */}
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 text-blue-900 flex items-center">
          <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
          Education & Certifications
        </h3>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-4">
            <div className="flex items-start">
              <div>
                <h4 className="text-lg font-semibold">UCLA</h4>
                <p className="text-gray-600">Bachelor of Science (BS), Biochemistry</p>
                <p className="text-sm text-gray-500">2011</p>
              </div>
            </div>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <div className="flex items-start">
              <div>
                <h4 className="text-lg font-semibold">George Mason University</h4>
                <p className="text-gray-600">Bachelor of Science in Nursing (BSN)</p>
                <p className="text-gray-600">Registered Nursing/Registered Nurse</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4 text-blue-900">Professional Certifications</h4>
            <ul className="space-y-4">
              {[
                "Registered Nurse (RN) License",
                "Healthcare Navigation Certification",
                "Case Management Certification",
                "Mental Health First Aid Certification"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 text-blue-900 flex items-center">
          <Award className="w-8 h-8 mr-3 text-blue-600" />
          Areas of Expertise
        </h3>
        <ul className="space-y-4">
          {[
            "Patient Advocacy & Care Navigation",
            "Complex Care Coordination",
            "Critical Care Medicine",
            "Mental Health Support",
            "Elder Care Management",
            "Insurance & Benefits Navigation",
            "Family Support & Education",
            "Treatment Planning",
            "Medication Adherence",
            "Special Needs Planning",
            "Neurodiversity Support",
            "Healthcare System Navigation"
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Values Section */}
    <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl shadow-lg mb-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Our Core Values</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Heart,
            title: "Client-Centered Care",
            description: "Every decision and action is focused on what's best for our clients and their families."
          },
          {
            icon: Users,
            title: "Family-Inclusive Approach",
            description: "We recognize the vital role of family support in healthcare journeys and include them in the process."
          },
          {
            icon: Stethoscope,
            title: "Clinical Excellence",
            description: "Our services are grounded in clinical expertise and evidence-based practices."
          }
        ].map((value, index) => (
          <div key={index} className="text-center">
            <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6">
              <value.icon className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Mission & Vision */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 text-blue-900">Our Mission</h3>
        <p className="text-gray-600 leading-relaxed">
          To empower individuals and families through their healthcare journey by providing expert advocacy, 
          personalized care navigation, and comprehensive support services that ensure the best possible outcomes.
        </p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 text-blue-900">Our Vision</h3>
        <p className="text-gray-600 leading-relaxed">
          To transform healthcare experiences by making quality care accessible, understandable, and manageable 
          for everyone, creating a world where no one has to navigate health challenges alone.
        </p>
      </div>
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

    {/* Next Page Navigation */}
    <div className="mt-12 flex justify-center">
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => setActivePage('Services'), 100);
        }}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg group transition-all duration-300"
      >
        Continue to Our Services
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

export default AboutPage; 