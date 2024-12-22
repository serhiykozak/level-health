import React from 'react';

// Add Google Fonts
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&display=swap');
`;

const DebugPage = ({ setActivePage }) => {
  const colorSchemes = [
    {
      name: 'Current Blue',
      bg: 'bg-blue-50',
      text: 'text-blue-900',
      accent: 'text-blue-600',
      button: {
        primary: 'bg-blue-600 hover:bg-blue-700',
        secondary: 'border-blue-600 text-blue-600 hover:bg-blue-50'
      }
    },
    {
      name: 'Navy',
      bg: 'bg-[#F0F4F8]',
      text: 'text-[#1B365D]',
      accent: 'text-[#2B4F8B]',
      button: {
        primary: 'bg-[#1B365D] hover:bg-[#132744]',
        secondary: 'border-[#1B365D] text-[#1B365D] hover:bg-[#F0F4F8]'
      }
    },
    {
      name: 'Deep Navy',
      bg: 'bg-[#EEF2F6]',
      text: 'text-[#0A2647]',
      accent: 'text-[#1E4D8C]',
      button: {
        primary: 'bg-[#0A2647] hover:bg-[#061A32]',
        secondary: 'border-[#0A2647] text-[#0A2647] hover:bg-[#EEF2F6]'
      }
    },
    {
      name: 'Royal Navy',
      bg: 'bg-[#F5F7FA]',
      text: 'text-[#14417B]',
      accent: 'text-[#2563EB]',
      button: {
        primary: 'bg-[#14417B] hover:bg-[#0F3161]',
        secondary: 'border-[#14417B] text-[#14417B] hover:bg-[#F5F7FA]'
      }
    },
    {
      name: 'Teal',
      bg: 'bg-teal-50',
      text: 'text-teal-900',
      accent: 'text-teal-600',
      button: {
        primary: 'bg-teal-600 hover:bg-teal-700',
        secondary: 'border-teal-600 text-teal-600 hover:bg-teal-50'
      }
    },
    {
      name: 'Professional Blue',
      bg: 'bg-[#F8FAFC]',
      text: 'text-[#1E3A8A]',
      accent: 'text-[#3B82F6]',
      button: {
        primary: 'bg-[#1E3A8A] hover:bg-[#172B6B]',
        secondary: 'border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#F8FAFC]'
      }
    }
  ];

  const fonts = [
    { name: 'Montserrat', desc: 'Professional, modern, and clean', style: 'geometric' },
    { name: 'Open Sans', desc: 'Friendly, readable, and versatile', style: 'humanist' },
    { name: 'Raleway', desc: 'Elegant, contemporary, and distinctive', style: 'geometric' },
    { name: 'Source Sans Pro', desc: 'Clear, approachable, and balanced', style: 'humanist' },
    { name: 'Inter', desc: 'Modern, neutral, and highly legible', style: 'geometric' },
    { name: 'DM Sans', desc: 'Geometric, friendly, and tech-forward', style: 'geometric' },
    { name: 'Outfit', desc: 'Contemporary, minimal, and sophisticated', style: 'geometric' },
    { name: 'Quicksand', desc: 'Rounded, friendly, and modern', style: 'geometric' },
    { name: 'Work Sans', desc: 'Clean, professional, and versatile', style: 'geometric' },
    { name: 'Plus Jakarta Sans', desc: 'Modern, premium, and refined', style: 'geometric' },
    { name: 'Manrope', desc: 'Technical, precise, and contemporary', style: 'geometric' },
    { name: 'Red Hat Display', desc: 'Professional, clear, and approachable', style: 'humanist' },
    { name: 'Albert Sans', desc: 'Modern, balanced, versatile', style: 'geometric' },
    { name: 'Archivo', desc: 'Technical, structured, precise', style: 'geometric' },
    { name: 'Be Vietnam Pro', desc: 'Contemporary, elegant, refined', style: 'geometric' },
    { name: 'Epilogue', desc: 'Refined, modern, versatile', style: 'geometric' },
    { name: 'Figtree', desc: 'Clean, modern, approachable', style: 'geometric' },
    { name: 'IBM Plex Sans', desc: 'Professional, precise, balanced', style: 'humanist' },
    { name: 'Jost', desc: 'Geometric, modern, minimal', style: 'geometric' },
    { name: 'Lexend', desc: 'Highly readable, modern, inclusive', style: 'geometric' },
    { name: 'Public Sans', desc: 'Clear, neutral, accessible', style: 'geometric' }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <style>{fontStyles}</style>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Font Options</h2>
        
        {/* Font Section */}
        <section className="mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <p className="text-blue-900">
              <span className="font-bold">Currently Using: </span>
              System default font (San Francisco on macOS, Segoe UI on Windows)
            </p>
          </div>

          {/* Font Categories */}
          <div className="mb-8 flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Geometric Sans: Clean, modern, tech-forward ({fonts.filter(f => f.style === 'geometric').length} options)
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Humanist Sans: Friendly, approachable, readable ({fonts.filter(f => f.style === 'humanist').length} options)
            </span>
          </div>

          <div className="space-y-12">
            {fonts.map(font => (
              <div key={font.name} className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-xl font-bold text-blue-900" style={{ fontFamily: font.name }}>
                      {font.name}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      font.style === 'geometric' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {font.style === 'geometric' ? 'Geometric' : 'Humanist'}
                    </span>
                  </div>
                  <p className="text-sm text-blue-800 mb-4">{font.desc}</p>
                  <div className="space-y-6" style={{ fontFamily: font.name }}>
                    {colorSchemes.map(scheme => (
                      <div key={scheme.name} className={`${scheme.bg} p-4 rounded-lg`}>
                        <div className="space-y-3">
                          <p className={`text-4xl font-bold ${scheme.text}`}>
                            levɘl health navigation
                          </p>
                          <p className={`text-2xl ${scheme.accent}`}>
                            Your Health Journey, Guided with Care
                          </p>
                          <p className={`text-base ${scheme.text}`}>
                            Expert health advocacy and care navigation services tailored to your needs. 
                            The quick brown fox jumps over the lazy dog.
                          </p>
                          <div className={`flex gap-6 ${scheme.text}`}>
                            <span className="font-normal">Regular Weight</span>
                            <span className="font-semibold">Semibold Weight</span>
                            <span className="font-bold">Bold Weight</span>
                          </div>
                          <div className="flex gap-4 mt-4">
                            <button className={`${scheme.button.primary} text-white px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300`}>
                              Primary Button
                            </button>
                            <button className={`border-2 ${scheme.button.secondary} px-4 py-2 rounded-full transition-all duration-300`}>
                              Secondary Button
                            </button>
                          </div>
                          <div className="text-sm text-gray-500 mt-2">
                            {scheme.name} Color Scheme
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DebugPage; 