import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <form className="space-y-4" action="https://formspree.io/f/xlddrbon" method="POST">
            <div>
              <label className="block mb-1">Name</label>
              <input type="text" name="name" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" name="email" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea name="message" className="w-full p-2 border rounded h-32" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2 text-blue-600" />
              <span>xxxx@gmail.com</span>
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
};

export default ContactPage; 