import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { devices } from '@/utils/devices';
export enum ButtonType {
  submit = 'SUBMITBUTTON',
}

interface ButtonProps {
  children: ReactNode;
  btnType: ButtonType;
}

const ButtonStyled = styled.button<{ $btnType: ButtonType }>`
  height: 52px;

  font-size: 16px;
  ${(props) =>
    props.$btnType === ButtonType.submit && {
      backgroundColor: colors.green,
      minWidth: '100%',
      color: colors.gray_900,
      borderRadius: '12px',
      marginTop: '24px',
    }}
  &:hover {
    ${(props) =>
      props.$btnType === ButtonType.submit && {
        backgroundColor: colors.greenHover,
      }}
  }
  &:active {
    ${(props) =>
      props.$btnType === ButtonType.submit && {
        backgroundColor: colors.greenActive,
      }}
  }
`;

const Button = ({ children, btnType }: ButtonProps) => {
  return <ButtonStyled $btnType={btnType}>{children}</ButtonStyled>;
};

export default Button;
