import React, { useState } from 'react';
import { Heart, Navigation, Book, Phone, Users, Home, Mail, Info, FileText, CheckCircle } from 'lucide-react';

const Navbar = ({ activePage, setActivePage }) => (
  <nav className="bg-blue-900 p-4 text-white">
    <div className="container mx-auto flex flex-wrap justify-between items-center">
      <div className="text-xl font-bold">Level Health</div>
      <div className="flex space-x-4">
        {[
          { name: 'Home', icon: Home },
          { name: 'Services', icon: Heart },
          { name: 'Case Studies', icon: FileText },
          { name: 'About', icon: Info },
          { name: 'Contact', icon: Phone }
        ].map(item => (
          <button
            key={item.name}
            onClick={() => setActivePage(item.name)}
            className={`flex items-center space-x-1 px-3 py-2 rounded ${
              activePage === item.name ? 'bg-blue-700' : 'hover:bg-blue-800'
            }`}
          >
            <item.icon size={16} />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  </nav>
);

const HomePage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to Level Health</h1>
      <p className="text-xl text-gray-600">Expert Health Advocacy & Care Navigation Services</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Navigation className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
        <p>Merging advocacy, nursing, social work, and life coaching for comprehensive care.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Heart className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Client-Centered Care</h3>
        <p>Working directly for you, not insurance companies or hospitals.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Users className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Family Support</h3>
        <p>Supporting both clients and their families throughout the healthcare journey.</p>
      </div>
    </div>

    <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl font-bold mb-4">Why Choose Level Health?</h2>
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
            <li>Worldwide service availability</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-8">Our Comprehensive Services</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          title: "Clinical Assessment & Care Planning",
          description: "Thorough evaluation of medical needs and development of comprehensive care plans."
        },
        {
          title: "Medical Record Review & Management",
          description: "Detailed analysis of medical records to ensure comprehensive care coordination."
        },
        {
          title: "Insurance Navigation",
          description: "Expert guidance through benefits, authorizations, and appeals processes."
        },
        {
          title: "Provider Coordination",
          description: "Seamless communication and coordination between all healthcare providers."
        },
        {
          title: "Medication & Treatment Management",
          description: "Oversight of treatment plans and medication regimens."
        },
        {
          title: "Family Support & Education",
          description: "Resources and guidance for families and caregivers."
        },
        {
          title: "Life Coaching",
          description: "Support for time management, organization, and wellness goals."
        },
        {
          title: "End of Life Care Navigation",
          description: "Compassionate guidance through end-of-life care decisions and planning."
        }
      ].map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const CaseStudiesPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-8">Real Client Case Studies</h2>
    <div className="space-y-8">
      {[
        {
          title: "Adolescent Mental Health Support",
          description: "14-year-old with anxiety and school refusal. Provided comprehensive care coordination, IEP development, and family support.",
          services: ["Medical record review", "School coordination", "Treatment management", "Family support"]
        },
        {
          title: "Elder Care Management",
          description: "72-year-old with neurocognitive degeneration. Focused on safety, nutrition, and comprehensive care coordination.",
          services: ["Clinical assessment", "Safety planning", "Nutrition management", "End of life care"]
        },
        {
          title: "Adult Mental Health & Life Coaching",
          description: "69-year-old with ADD and complex trauma. Provided organization skills, time management, and family mediation.",
          services: ["Life coaching", "Family mediation", "Treatment coordination", "Emotional support"]
        },
        {
          title: "Complex Medical Case Management",
          description: "19-year-old with multiple medical conditions requiring extensive care coordination and advocacy.",
          services: ["Medical coordination", "Treatment management", "Family support", "Provider communication"]
        },
        {
          title: "International Care Coordination",
          description: "73-year-old requiring coordination between international healthcare systems and providers.",
          services: ["International care navigation", "Treatment management", "Family education", "Provider communication"]
        }
      ].map((study, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
          <p className="text-gray-600 mb-4">{study.description}</p>
          <div className="flex flex-wrap gap-2">
            {study.services.map((service, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {service}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AboutPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-8">About Level Health</h2>
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
            <span>adri.escobedo22@gmail.com</span>
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
        return <HomePage />;
      case 'Services':
        return <ServicesPage />;
      case 'Case Studies':
        return <CaseStudiesPage />;
      case 'About':
        return <AboutPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
      <footer className="bg-blue-900 text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Level Health. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

