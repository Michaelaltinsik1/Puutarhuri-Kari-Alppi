import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import products from '../utils/products.json';
import { SecondaryHeading } from '@/styles/styles';
import PriceTag from './minorComponents/priceTag';
interface PricesProps {
  headerHeight: number;
}
const DivStyled = styled.div<{ $headerHeight?: number }>`
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
  background-color: ${colors.green};
  height: 100vh;
`;

const Recipes = ({ headerHeight }: PricesProps) => {
  return <DivStyled $headerHeight={headerHeight - 1} id="recipes"></DivStyled>;
};

export default Recipes;
