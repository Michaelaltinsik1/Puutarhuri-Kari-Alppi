import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { devices } from '@/utils/devices';

import { ErrorMessage } from '@/styles/styles';
interface InputProps {
  placeholder?: string;
  label: string;
  register?: any;
  name: string;
  errors?: string;
}
const Input = styled.input`
  font-family: var(--font-allura);;
  background-color: ${colors.gray_50};
  font-size: 20px;
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid ${colors.gray_900};
  margin-top: 8px;
`;
const Label = styled.label`
  font-family: var(--font-allura);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: ${colors.gray_900};
  font-weight: 600;
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`;

const InputField = ({
  placeholder,
  label,
  register,
  name,
  errors,
}: InputProps) => {
  return (
    <Label>
      {label}
      {register && (
        <>
          <Input
            {...register(name)}
            placeholder={placeholder ? placeholder : ''}
          />
          {errors ? (
            <ErrorMessage>{errors}</ErrorMessage>
          ) : (
            <ErrorMessage></ErrorMessage>
          )}
        </>
      )}
    </Label>
  );
};
export default InputField;
