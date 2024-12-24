// Color palette
export const colors = {
  primary: {
    50: '#eff6ff',   // blue-50
    100: '#dbeafe',  // blue-100
    500: '#3b82f6',  // blue-500
    600: '#2563eb',  // blue-600
    700: '#1d4ed8',  // blue-700
    800: '#1e40af',  // blue-800
    900: '#1e3a8a',  // blue-900
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  white: '#ffffff',
};

// Typography
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

// Spacing
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
};

// Animations
export const animations = {
  transition: {
    fast: 'all 0.2s ease',
    base: 'all 0.3s ease',
    slow: 'all 0.5s ease',
  },
  scale: {
    hover: 'scale(1.05)',
    active: 'scale(0.95)',
  },
};

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
};

// Common styles
export const commonStyles = {
  container: {
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    padding: {
      default: '1rem',
      sm: '2rem',
      lg: '4rem',
    },
  },
  button: {
    base: `
      transition-all duration-300
      font-medium
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
    `,
    primary: `
      bg-blue-600
      hover:bg-blue-700
      text-white
      focus:ring-blue-500
    `,
    secondary: `
      bg-gray-100
      hover:bg-gray-200
      text-gray-800
      focus:ring-gray-500
    `,
    sizes: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    },
  },
};

// Layout
export const layout = {
  navbar: {
    height: '4rem',
    mobileMenuBreakpoint: 'md',
  },
  footer: {
    spacing: {
      top: '3rem',
      bottom: '2rem',
    },
  },
  maxWidth: '1280px',
  containerPadding: '1rem',
};

// Z-index
export const zIndex = {
  navbar: 50,
  modal: 100,
  tooltip: 150,
  dropdown: 200,
};

// Export all theme variables
const theme = {
  colors,
  typography,
  spacing,
  animations,
  breakpoints,
  borderRadius,
  shadows,
  commonStyles,
  layout,
  zIndex,
};

export default theme; 