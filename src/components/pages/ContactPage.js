import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, Clock, MessageSquare } from 'lucide-react';

const ContactPage = ({ setActivePage }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log('setActivePage prop:', setActivePage);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Contact Us</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Let us help you navigate your healthcare journey with confidence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-blue-900">Get in Touch</h3>
          <form 
            action="https://docs.google.com/forms/d/e/1FAIpQLSf6zYvBDH3wvOqG4B6DEWFd_cqw9JNE469yWwnqPhiP-R_ItQ/viewform?usp=dialog"
            method="POST"
            target="_blank"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              const form = e.target;
              
              try {
                const formData = new FormData(form);
                
                const googleFormData = new FormData();
                googleFormData.append('entry.408649125', formData.get('name'));
                googleFormData.append('entry.1597737456', formData.get('email'));
                googleFormData.append('entry.1943926855', formData.get('message'));

                const response = await fetch(
                  'https://docs.google.com/forms/d/e/1FAIpQLSf6zYvBDH3wvOqG4B6DEWFd_cqw9JNE469yWwnqPhiP-R_ItQ/formResponse', 
                  {
                    method: 'POST',
                    body: googleFormData,
                    mode: 'no-cors'
                  }
                );

                setActivePage('ThankYou');
              } catch (error) {
                console.error('Form submission error:', error);
                alert('Error sending message. Please try again.');
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700">Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="name" 
                    className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    required 
                  />
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Email</label>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email" 
                    className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    required 
                  />
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Message</label>
                <div className="relative">
                  <textarea 
                    name="message" 
                    className="w-full p-3 pl-10 border rounded-lg h-32 focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    required
                  ></textarea>
                  <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-blue-600 text-white px-8 py-4 rounded-full text-lg 
                  hover:bg-blue-700 transition-all duration-300 transform 
                  hover:scale-105 w-full flex items-center justify-center gap-2
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
              </button>
            </div>
          </form>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-blue-900">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-medium text-blue-900">Email</p>
                <p className="text-gray-600">xxxx@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-medium text-blue-900">Phone</p>
                <p className="text-gray-600">Contact us to schedule a consultation</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-medium text-blue-900">Location</p>
                <p className="text-gray-600">Serving clients worldwide</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-medium text-blue-900">Response Time</p>
                <p className="text-gray-600">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 