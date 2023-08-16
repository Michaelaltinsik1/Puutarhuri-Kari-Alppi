import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { devices } from '@/utils/devices';

interface TextAreaProps {
  placeholder?: string;
  label: string;
}
const TextAreaStyled = styled.textarea`
  background-color: ${colors.gray_50};
  height: 200px;
  font-size: 20px;
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid ${colors.gray_900};
  margin-top: 8px;
  @media (min-width: ${devices.laptop}) {
    height: 240px;
    font-size: 24px;
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

const TextArea = ({ placeholder, label }: TextAreaProps) => {
  return (
    <Label>
      {label}
      <TextAreaStyled placeholder={placeholder ? placeholder : ''} />
    </Label>
  );
};
export default TextArea;
