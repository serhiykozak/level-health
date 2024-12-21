import React from 'react';
import { Users, CheckCircle, Award, GraduationCap, Heart, Stethoscope } from 'lucide-react';

const AboutPage = () => (
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
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">BS</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">BSN</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">RN</span>
          </div>
        </div>
        <div className="md:w-2/3 p-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">Founder & Lead Healthcare Navigator</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              With over 15 years of experience in healthcare, Adriana brings a unique combination of clinical expertise, 
              patient advocacy, and care navigation skills to every client interaction.
            </p>
            <p>
              Her background in nursing, combined with extensive experience in case management and healthcare navigation, 
              allows her to provide comprehensive support that addresses both medical and personal needs.
            </p>
            <p>
              Adriana founded <span className="font-bold">levɘl</span> health navigation with a vision to transform how 
              individuals and families experience healthcare, making it more accessible, understandable, and manageable.
            </p>
          </div>
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
        <ul className="space-y-4">
          {[
            "Bachelor of Science in Nursing (BSN)",
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
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 text-blue-900 flex items-center">
          <Award className="w-8 h-8 mr-3 text-blue-600" />
          Areas of Expertise
        </h3>
        <ul className="space-y-4">
          {[
            "Patient Advocacy & Care Navigation",
            "Complex Care Coordination",
            "Mental Health Support",
            "Elder Care Management",
            "Insurance & Benefits Navigation",
            "Family Support & Education"
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
  </div>
);

export default AboutPage; 