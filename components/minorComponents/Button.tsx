import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { devices } from '@/utils/devices';
export enum ButtonType {
  submit = 'SUBMITBUTTON',
  secondary = 'SECONDARY',
  outlined = 'OUTLINED',
}

interface ButtonProps {
  children: ReactNode;
  btnType: ButtonType;
  type: 'button' | 'submit' | 'reset';
  isSubmitting?: boolean;
}

const ButtonStyled = styled.button<{ $btnType: ButtonType }>`
  font-weight: bold;
  height: 52px;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid black;
  ${(props) =>
    props.$btnType === ButtonType.submit && {
      backgroundColor: colors.submitButton,
      minWidth: '100%',
      color: colors.gray_50,
      borderRadius: '6px',
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  ${(props) =>
    props.$btnType === ButtonType.secondary && {
      backgroundColor: colors.buttonGreen,
      minWidth: '100%',
      color: colors.gray_900,
      borderRadius: '6px',
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    ${(props) =>
    props.$btnType === ButtonType.outlined && {
      backgroundColor: colors.specialBG,
      border: '1px solid black',
      minWidth: '100%',
      color: colors.gray_900,
      borderRadius: '6px',
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  &:hover {
    ${(props) =>
      props.$btnType === ButtonType.outlined && {
        backgroundColor: '#c4c6c1',
      }}
  }
  &:active {
    ${(props) =>
      props.$btnType === ButtonType.outlined && {
        backgroundColor: '#bec0ba',
      }}
  }
`;

const Button = ({ children, btnType, type, isSubmitting }: ButtonProps) => {
  return (
    <ButtonStyled disabled={isSubmitting} type={type} $btnType={btnType}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
