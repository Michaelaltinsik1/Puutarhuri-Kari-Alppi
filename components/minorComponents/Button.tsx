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
  type: 'button' | 'submit' | 'reset';
  isSubmitting?: boolean;
}

const ButtonStyled = styled.button<{ $btnType: ButtonType }>`
  height: 52px;

  font-size: 16px;
  border: 1px solid black;
  ${(props) =>
    props.$btnType === ButtonType.submit && {
      backgroundColor: colors.submitButton,
      minWidth: '100%',
      color: colors.gray_50,
      borderRadius: '12px',
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  &:hover {
    ${(props) =>
      props.$btnType === ButtonType.submit && {
        backgroundColor: colors.submitButtonHover,
      }}
  }
  &:active {
    ${(props) =>
      props.$btnType === ButtonType.submit && {
        backgroundColor: colors.submitButtonActive,
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
