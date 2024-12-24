import React from 'react';
import theme from '../../theme';

const Container = ({ 
  children, 
  size = 'xl', 
  className = '',
  as: Component = 'div',
  ...props 
}) => {
  const maxWidth = theme.commonStyles.container.maxWidth[size];
  const defaultPadding = theme.commonStyles.container.padding.default;

  const containerClasses = `
    mx-auto
    px-4
    w-full
    max-w-[${maxWidth}]
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <Component className={containerClasses} {...props}>
      {children}
    </Component>
  );
};

export default Container; 