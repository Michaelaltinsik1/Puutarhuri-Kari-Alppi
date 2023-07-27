import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
const DivStyled = styled.div`
  background-color: ${colors.green};
  height: 100vh;
`;

const Prices = () => {
  return <DivStyled id="prices"></DivStyled>;
};

export default Prices;
