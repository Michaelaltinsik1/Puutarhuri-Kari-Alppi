import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
interface FooterProps {
  headerHeight: number;
}
const DivStyled = styled.div<{ $headerHeight?: number }>`
  background-color: ${colors.gray_50};
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
  height: 100vh;
`;

const Footer = ({ headerHeight }: FooterProps) => {
  return <DivStyled $headerHeight={headerHeight - 1} id="footer"></DivStyled>;
};

export default Footer;
