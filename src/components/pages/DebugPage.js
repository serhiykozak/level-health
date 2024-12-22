import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Yantramanav:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Asap:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Gudea:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Hind:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Signika:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Wendy+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Xanh+Mono:wght@400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ysabeau:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Andika:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Brygada+1918:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Petrona:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Uncut+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Victor+Mono:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Chivo:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Eczar:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fragment+Mono&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Gantari:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Hanuman:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inclusive+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Jaldi:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=K2D:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Labrada:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Metrophobic&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nobile:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Telex&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Unica+One&display=swap');
`;

const DebugPage = ({ setActivePage }) => {
  const [expandedFonts, setExpandedFonts] = useState(new Set());

  const toggleFont = (fontName) => {
    const newExpanded = new Set(expandedFonts);
    if (newExpanded.has(fontName)) {
      newExpanded.delete(fontName);
    } else {
      newExpanded.add(fontName);
    }
    setExpandedFonts(newExpanded);
  };

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
    { name: 'Public Sans', desc: 'Clear, neutral, accessible', style: 'geometric' },
    { name: 'Rubik', desc: 'Modern, friendly, balanced', style: 'geometric' },
    { name: 'Space Grotesk', desc: 'Technical, distinctive, modern', style: 'geometric' },
    { name: 'Sora', desc: 'Contemporary, tech-forward, refined', style: 'geometric' },
    { name: 'Nunito Sans', desc: 'Friendly, approachable, balanced', style: 'humanist' },
    { name: 'Mulish', desc: 'Clean, modern, versatile', style: 'humanist' },
    { name: 'Karla', desc: 'Clean, approachable, versatile', style: 'humanist' },
    { name: 'Barlow', desc: 'Modern, functional, balanced', style: 'geometric' },
    { name: 'Lato', desc: 'Balanced, harmonious, versatile', style: 'humanist' },
    { name: 'Roboto', desc: 'Professional, neutral, versatile', style: 'geometric' },
    { name: 'Poppins', desc: 'Modern, friendly, geometric', style: 'geometric' },
    { name: 'Noto Sans Display', desc: 'Clear, universal, balanced', style: 'humanist' },
    { name: 'Overpass', desc: 'Modern, legible, versatile', style: 'geometric' },
    { name: 'Oxygen', desc: 'Clean, modern, friendly', style: 'geometric' },
    { name: 'Fira Sans', desc: 'Technical, versatile, balanced', style: 'humanist' },
    { name: 'Cabin', desc: 'Humanist, versatile, readable', style: 'humanist' },
    { name: 'Assistant', desc: 'Clean, modern, approachable', style: 'geometric' },
    { name: 'Catamaran', desc: 'Modern, geometric, versatile', style: 'geometric' },
    { name: 'Exo 2', desc: 'Modern, tech-forward, geometric', style: 'geometric' },
    { name: 'Heebo', desc: 'Clean, modern, balanced', style: 'geometric' },
    { name: 'Kanit', desc: 'Modern, distinctive, geometric', style: 'geometric' },
    { name: 'Libre Franklin', desc: 'Classic, versatile, balanced', style: 'humanist' },
    { name: 'Maven Pro', desc: 'Modern, clean, geometric', style: 'geometric' },
    { name: 'Noto Sans JP', desc: 'Universal, balanced, clean', style: 'humanist' },
    { name: 'PT Sans', desc: 'Clean, legible, versatile', style: 'humanist' },
    { name: 'Red Hat Text', desc: 'Clear, modern, balanced', style: 'humanist' },
    { name: 'Source Sans 3', desc: 'Clean, versatile, balanced', style: 'humanist' },
    { name: 'Ubuntu', desc: 'Modern, friendly, distinctive', style: 'humanist' },
    { name: 'Varela Round', desc: 'Friendly, rounded, modern', style: 'geometric' },
    { name: 'Wix Madefor Display', desc: 'Modern, clean, balanced', style: 'geometric' },
    { name: 'Yantramanav', desc: 'Modern, geometric, clean', style: 'geometric' },
    { name: 'Zen Kaku Gothic New', desc: 'Modern, clean, balanced', style: 'geometric' },
    { name: 'Asap', desc: 'Modern, balanced, versatile', style: 'geometric' },
    { name: 'Bitter', desc: 'Contemporary slab serif, readable', style: 'humanist' },
    { name: 'Comfortaa', desc: 'Rounded, modern, friendly', style: 'geometric' },
    { name: 'Dosis', desc: 'Rounded, geometric, modern', style: 'geometric' },
    { name: 'Encode Sans', desc: 'Versatile, modern, balanced', style: 'geometric' },
    { name: 'Fredoka', desc: 'Friendly, rounded, modern', style: 'geometric' },
    { name: 'Gudea', desc: 'Clean, modern, balanced', style: 'humanist' },
    { name: 'Hind', desc: 'Modern, versatile, readable', style: 'humanist' },
    { name: 'Istok Web', desc: 'Clean, professional, balanced', style: 'humanist' },
    { name: 'Josefin Sans', desc: 'Geometric, stylish, modern', style: 'geometric' },
    { name: 'Kalam', desc: 'Friendly, casual, handwritten', style: 'humanist' },
    { name: 'Lora', desc: 'Elegant, readable, balanced', style: 'humanist' },
    { name: 'M PLUS Rounded 1c', desc: 'Rounded, friendly, modern', style: 'geometric' },
    { name: 'Nanum Gothic', desc: 'Clean, modern, balanced', style: 'geometric' },
    { name: 'Oswald', desc: 'Condensed, modern, bold', style: 'geometric' },
    { name: 'Playfair Display', desc: 'Elegant, classic, refined', style: 'humanist' },
    { name: 'Questrial', desc: 'Modern, geometric, balanced', style: 'geometric' },
    { name: 'Rajdhani', desc: 'Technical, modern, geometric', style: 'geometric' },
    { name: 'Signika', desc: 'Clear, friendly, modern', style: 'humanist' },
    { name: 'Titillium Web', desc: 'Modern, technical, clean', style: 'geometric' },
    { name: 'Urbanist', desc: 'Contemporary, clean, geometric', style: 'geometric' },
    { name: 'Vollkorn', desc: 'Classic, readable, refined', style: 'humanist' },
    { name: 'Wendy One', desc: 'Playful, distinctive, bold', style: 'geometric' },
    { name: 'Xanh Mono', desc: 'Monospace, technical, clean', style: 'geometric' },
    { name: 'Ysabeau', desc: 'Modern, elegant, balanced', style: 'humanist' },
    { name: 'Zilla Slab', desc: 'Contemporary slab, readable', style: 'humanist' },
    { name: 'Andika', desc: 'Clear, accessible, friendly', style: 'humanist' },
    { name: 'Atkinson Hyperlegible', desc: 'Highly readable, accessible', style: 'humanist' },
    { name: 'Azeret Mono', desc: 'Modern monospace, technical', style: 'geometric' },
    { name: 'Bricolage Grotesque', desc: 'Contemporary, distinctive', style: 'geometric' },
    { name: 'Commissioner', desc: 'Modern, versatile, balanced', style: 'geometric' },
    { name: 'DM Mono', desc: 'Clean monospace, technical', style: 'geometric' },
    { name: 'Familjen Grotesk', desc: 'Modern, clean, balanced', style: 'geometric' },
    { name: 'Fraunces', desc: 'Elegant, refined, distinctive', style: 'humanist' },
    { name: 'Gentium Book Plus', desc: 'Readable, scholarly', style: 'humanist' },
    { name: 'Hanken Grotesk', desc: 'Modern, neutral, balanced', style: 'geometric' },
    { name: 'IBM Plex Mono', desc: 'Technical, precise monospace', style: 'geometric' },
    { name: 'JetBrains Mono', desc: 'Developer-focused monospace', style: 'geometric' },
    { name: 'Kumbh Sans', desc: 'Modern, friendly, balanced', style: 'geometric' },
    { name: 'League Spartan', desc: 'Bold, modern, geometric', style: 'geometric' },
    { name: 'Martian Mono', desc: 'Futuristic monospace', style: 'geometric' },
    { name: 'Newsreader', desc: 'Elegant, readable serif', style: 'humanist' },
    { name: 'Onest', desc: 'Clean, modern, balanced', style: 'geometric' },
    { name: 'Petrona', desc: 'Elegant, refined serif', style: 'humanist' },
    { name: 'Readex Pro', desc: 'Modern, legible, clean', style: 'geometric' },
    { name: 'Syne', desc: 'Modern, distinctive, geometric', style: 'geometric' },
    { name: 'Unbounded', desc: 'Bold, modern, unique', style: 'geometric' },
    { name: 'Uncut Sans', desc: 'Contemporary, clean', style: 'geometric' },
    { name: 'Victor Mono', desc: 'Distinctive monospace', style: 'geometric' },
    { name: 'Instrument Sans', desc: 'Modern, precise, clean', style: 'geometric' },
    { name: 'Golos Text', desc: 'Clear, balanced, modern', style: 'geometric' },
    { name: 'Darker Grotesque', desc: 'Bold, contemporary', style: 'geometric' },
    { name: 'Cabinet Grotesk', desc: 'Modern, distinctive', style: 'geometric' },
    { name: 'Chivo', desc: 'Modern, geometric, clean', style: 'geometric' },
    { name: 'Crimson Pro', desc: 'Elegant, refined serif', style: 'humanist' },
    { name: 'Dela Gothic One', desc: 'Bold, distinctive display', style: 'geometric' },
    { name: 'Eczar', desc: 'Contemporary serif, readable', style: 'humanist' },
    { name: 'Fragment Mono', desc: 'Minimalist monospace', style: 'geometric' },
    { name: 'Gantari', desc: 'Modern, balanced, clean', style: 'geometric' },
    { name: 'Hanuman', desc: 'Clean, balanced serif', style: 'humanist' },
    { name: 'Inclusive Sans', desc: 'Accessible, friendly', style: 'humanist' },
    { name: 'Jaldi', desc: 'Clean, modern, balanced', style: 'geometric' },
    { name: 'K2D', desc: 'Modern, technical, clean', style: 'geometric' },
    { name: 'Labrada', desc: 'Elegant, refined serif', style: 'humanist' },
    { name: 'Metrophobic', desc: 'Modern, minimal, clean', style: 'geometric' },
    { name: 'Nobile', desc: 'Clean, balanced, readable', style: 'humanist' },
    { name: 'Philosopher', desc: 'Distinctive, elegant', style: 'humanist' },
    { name: 'Quantico', desc: 'Technical, modern, sharp', style: 'geometric' },
    { name: 'Rethink Sans', desc: 'Modern, clean, balanced', style: 'geometric' },
    { name: 'Spline Sans', desc: 'Contemporary, balanced', style: 'geometric' },
    { name: 'Telex', desc: 'Clean, modern, minimal', style: 'geometric' },
    { name: 'Unica One', desc: 'Modern display, distinctive', style: 'geometric' }
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

          <div className="space-y-4">
            {fonts.map(font => (
              <div key={font.name} className="rounded-xl shadow-sm border border-blue-100 overflow-hidden">
                <button
                  onClick={() => toggleFont(font.name)}
                  className="w-full p-6 bg-white hover:bg-blue-50 transition-colors duration-150"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h4 className="text-lg font-bold text-blue-900">{font.name}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          font.style === 'geometric' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {font.style === 'geometric' ? 'Geometric' : 'Humanist'}
                        </span>
                        <p className="text-sm text-blue-800">{font.desc}</p>
                      </div>
                      <div className="space-y-2" style={{ fontFamily: font.name }}>
                        <p className="text-2xl font-bold text-blue-900">levɘl health navigation</p>
                        <p className="text-lg text-blue-600">Your Health Journey, Guided with Care</p>
                        <p className="text-base text-blue-800">Expert health advocacy and care navigation services</p>
                      </div>
                    </div>
                    {expandedFonts.has(font.name) ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600 ml-4" />
                    )}
                  </div>
                </button>
                
                {expandedFonts.has(font.name) && (
                  <div className="border-t border-blue-100">
                    <div className="p-6 space-y-6" style={{ fontFamily: font.name }}>
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
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DebugPage; 