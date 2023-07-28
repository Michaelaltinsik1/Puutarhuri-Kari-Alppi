import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
const DivStyled = styled.div`
  background-color: ${colors.gray_50};

  height: 100vh;
`;

const Footer = () => {
  return <DivStyled id="footer"></DivStyled>;
};

export default Footer;