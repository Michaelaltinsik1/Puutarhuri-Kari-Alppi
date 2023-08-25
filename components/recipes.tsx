import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import products from '../utils/products.json';
import { SecondaryHeading } from '@/styles/styles';
import PriceTag from './minorComponents/priceTag';
import { devices } from '@/utils/devices';
import Carousel from './Carousel';
interface PricesProps {
  headerHeight: number;
}
const DivStyled = styled.div<{ $headerHeight?: number }>`
  display: flex;
  flex-direction: column;
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
  background-color: ${colors.green};
  padding: 24px 16px;
  @media (min-width: ${devices.tablet}) {
    padding: 24px 40px;
  }
  @media (min-width: ${devices.laptop}) {
    padding: 40px 80px;
  }
  @media (min-width: ${devices.desktop}) {
    align-items: center;
    padding: 64px 180px;
  }
`;
const Container = styled.div`
  position: relative;
`;
const Recipes = ({ headerHeight }: PricesProps) => {
  return (
    <DivStyled $headerHeight={headerHeight - 1} id="recipes">
      <Container>
        <Carousel />
      </Container>
    </DivStyled>
  );
};

export default Recipes;
