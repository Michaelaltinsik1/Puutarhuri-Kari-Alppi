import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
const DivStyled = styled.div`
  background-color: ${colors.green};
  height: 100vh;
`;

const Payment = () => {
  return <DivStyled id="payment"></DivStyled>;
};

export default Payment;
