import { styled } from 'styled-components';

interface Ingredient {
  value: number;
  name: string;
  unit: string;
}
const IngredientStyled = styled.p`
  font-size: 24px;
  line-height: 250%;
  letter-spacing: 3px;
  border-bottom: 1px solid black;
`;

const Ingredient = ({ value, name, unit }: Ingredient) => {
  return <IngredientStyled>{value + ' ' + unit + ' ' + name}</IngredientStyled>;
};
export default Ingredient;
