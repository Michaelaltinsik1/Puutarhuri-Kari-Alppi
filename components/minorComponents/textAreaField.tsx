import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { devices } from '@/utils/devices';

import { ErrorMessage } from '@/styles/styles';
interface TextAreaProps {
  placeholder?: string;
  label: string;
  errors?: string;
  register?: any;
  name: string;
}
const TextAreaStyled = styled.textarea`
  font-family: var(--font-allura);
  background-color: ${colors.gray_50};
  height: 200px;
  font-size: 20px;
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid ${colors.gray_900};
  margin-top: 8px;
  @media (min-width: ${devices.laptop}) {
    height: 240px;
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: var(--font-allura);
  color: ${colors.gray_900};
  font-weight: 600;
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`;

const TextArea = ({
  placeholder,
  label,
  errors,
  name,
  register,
}: TextAreaProps) => {
  return (
    <Label>
      {label}
      {register ? (
        <>
          <TextAreaStyled
            {...register(name)}
            placeholder={placeholder ? placeholder : ''}
          />
          {errors ? (
            <ErrorMessage>{errors}</ErrorMessage>
          ) : (
            <ErrorMessage></ErrorMessage>
          )}
        </>
      ) : (
        <TextAreaStyled placeholder={placeholder ? placeholder : ''} />
      )}
    </Label>
  );
};
export default TextArea;
