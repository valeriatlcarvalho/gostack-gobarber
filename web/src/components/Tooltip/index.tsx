import React from 'react';

import { Container } from './styles';

interface TooltipTooltip {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipTooltip> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
