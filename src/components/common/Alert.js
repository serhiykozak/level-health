import React from 'react';
import PropTypes from 'prop-types';
import { X, AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const Alert = ({ 
  children, 
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  className = '',
  icon: CustomIcon,
}) => {
  const baseClasses = 'rounded-lg p-4 flex items-start gap-3 transition-all duration-300';

  const variantClasses = {
    info: 'bg-blue-50 text-blue-800',
    success: 'bg-green-50 text-green-800',
    warning: 'bg-yellow-50 text-yellow-800',
    error: 'bg-red-50 text-red-800',
  };

  const variantIcons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
  };

  const Icon = CustomIcon || variantIcons[variant];

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} role="alert">
      {Icon && (
        <Icon className="w-5 h-5 flex-shrink-0" />
      )}
      <div className="flex-1">
        {title && (
          <h3 className="font-semibold mb-1">{title}</h3>
        )}
        <div className="text-sm">{children}</div>
      </div>
      {dismissible && (
        <button
          type="button"
          className="flex-shrink-0 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded"
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  title: PropTypes.string,
  dismissible: PropTypes.bool,
  onDismiss: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.elementType,
};

export default Alert; 