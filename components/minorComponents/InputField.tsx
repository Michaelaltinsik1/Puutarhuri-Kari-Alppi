import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { devices } from '@/utils/devices';

interface InputProps {
  placeholder?: string;
  label: string;
}
const Input = styled.input`
  background-color: ${colors.gray_50};
  font-size: 20px;
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid ${colors.gray_900};
  margin-top: 8px;
  @media (min-width: ${devices.laptop}) {
    font-size: 20px;
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: ${colors.gray_900};
  font-weight: 600;
  &:not(:first-of-type) {
    margin-top: 24px;
  }
`;

const InputField = ({ placeholder, label }: InputProps) => {
  return (
    <Label>
      {label}
      <Input placeholder={placeholder ? placeholder : ''} />
    </Label>
  );
};
export default InputField;
