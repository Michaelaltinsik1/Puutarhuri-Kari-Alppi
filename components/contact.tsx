import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
const DivStyled = styled.div`
  background-color: ${colors.khabi};
  height: 100vh;
`;

const Contact = () => {
  return <DivStyled id="contact"></DivStyled>;
};

export default Contact;
