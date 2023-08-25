import { MouseEventHandler } from 'react';
import Direction from '../../public/Direction.svg';
import Image from 'next/image';
import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { devices } from '@/utils/devices';
interface CircularButton {
  direction: 'forward' | 'backward';
  isDisabled?: boolean;
  modifyIndex: MouseEventHandler<HTMLButtonElement>;
}

const Button = styled.button<{
  $direction: 'forward' | 'backward';
}>`
  cursor: pointer;
  border-radius: 999999px;
  z-index: 200;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50.5%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  ${(props) =>
    props.$direction === 'backward'
      ? {
          transform: 'rotate(180deg)',
          left: -20,
        }
      : { right: -20 }}
`;

const ImageStyled = styled(Image)`
  margin-left: 6px;
`;
const CircularButton = ({
  direction,
  isDisabled,
  modifyIndex,
}: CircularButton) => {
  return (
    <Button $direction={direction} onClick={modifyIndex} disabled={isDisabled}>
      <ImageStyled src={Direction} alt="forward " />
    </Button>
  );
};

export default CircularButton;
