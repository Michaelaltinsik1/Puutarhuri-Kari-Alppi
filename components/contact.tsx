import { styled } from 'styled-components';
import { colors } from '@/utils/colors';

interface ContactProps {
  headerHeight: number;
}
const DivStyled = styled.div<{ $headerHeight?: number }>`
  background-color: ${colors.khabi};
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
  height: 100vh;
`;

const Contact = ({ headerHeight }: ContactProps) => {
  return <DivStyled $headerHeight={headerHeight - 1} id="contact"></DivStyled>;
};

export default Contact;
