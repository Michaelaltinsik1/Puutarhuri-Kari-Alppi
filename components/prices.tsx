import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
interface PricesProps {
  headerHeight: number;
}
const DivStyled = styled.div<{ $headerHeight?: number }>`
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
  background-color: ${colors.green};
  height: 100vh;
`;

const Prices = ({ headerHeight }: PricesProps) => {
  return <DivStyled $headerHeight={headerHeight - 1} id="prices"></DivStyled>;
};

export default Prices;
