import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
const DivStyled = styled.div`
  background-color: ${colors.gray_50};
  height: 100vh;
`;

const OpenHours = () => {
  return <DivStyled id="openHours"></DivStyled>;
};

export default OpenHours;
