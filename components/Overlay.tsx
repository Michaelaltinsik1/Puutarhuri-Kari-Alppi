import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface OverlayProps {
  children: ReactNode;
  onClose: () => void;
}

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Overlay: React.FC<OverlayProps> = ({ children, onClose }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      event.stopPropagation();
      document.body.classList.remove('disable-scroll');
      onClose();
    }
  };

  return (
    <OverlayWrapper onClick={handleOverlayClick}>{children}</OverlayWrapper>
  );
};

export default Overlay;
