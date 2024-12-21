import React from 'react';
import { Users, CheckCircle } from 'lucide-react';

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

export default AboutPage; 