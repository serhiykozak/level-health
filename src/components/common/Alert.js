import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react';
import theme from '../../theme';

const Alert = ({ 
  children,
  variant = 'info',
  title,
  icon: CustomIcon,
  onClose,
  className = '',
  ...props 
}) => {
  // Define variant styles and icons
  const variants = {
    info: {
      icon: Info,
      styles: 'bg-blue-50 text-blue-800 border-blue-100',
      iconColor: 'text-blue-500',
    },
    success: {
      icon: CheckCircle,
      styles: 'bg-green-50 text-green-800 border-green-100',
      iconColor: 'text-green-500',
    },
    warning: {
      icon: AlertCircle,
      styles: 'bg-yellow-50 text-yellow-800 border-yellow-100',
      iconColor: 'text-yellow-500',
    },
    error: {
      icon: XCircle,
      styles: 'bg-red-50 text-red-800 border-red-100',
      iconColor: 'text-red-500',
    },
  };

  const Icon = CustomIcon || variants[variant].icon;

  const baseStyles = `
    relative
    flex
    items-start
    p-4
    rounded-lg
    border
    ${variants[variant].styles}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={baseStyles} role="alert" {...props}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={`w-5 h-5 ${variants[variant].iconColor}`} />
        </div>
        <div className="ml-3 flex-1">
          {title && (
            <h3 className="text-sm font-medium mb-1">
              {title}
            </h3>
          )}
          <div className="text-sm">
            {children}
          </div>
        </div>
        {onClose && (
          <button
            type="button"
            className={`ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              variants[variant].styles.replace('bg-', 'focus:ring-')
            }`}
            onClick={onClose}
            aria-label="Dismiss"
          >
            <span className="sr-only">Dismiss</span>
            <X className={`w-5 h-5 ${variants[variant].iconColor}`} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert; 