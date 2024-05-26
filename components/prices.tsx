import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import products from '../utils/products.json';
import { SecondaryHeading } from '@/styles/styles';
import PriceTag from './minorComponents/priceTag';
import { devices } from '@/utils/devices';
import ProductCard from './ProductCard';
interface PricesProps {
  headerHeight: number;
}
interface ProductCardType {
  url: string;
  alt: string;
  name: string;
  price: number;
  weight: string;
}
const DivStyled = styled.div<{ $headerHeight?: number }>`
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
  background-color: ${colors.gray_50};
  padding: 24px 16px;
  @media (min-width: ${devices.tablet}) {
    padding: 24px 40px;
  }
  @media (min-width: ${devices.laptop}) {
    padding: 40px 80px;
  }
  @media (min-width: ${devices.desktop}) {
    padding: 64px 180px;
  }
`;
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${devices.laptop}) {
    align-items: normal;
    flex-direction: row;
    justify-content: center;
  }
`;
const Prices = ({ headerHeight }: PricesProps) => {
  return (
    <DivStyled $headerHeight={headerHeight - 1} id="prices">
      <SecondaryHeading>Tuotteet ja hinta</SecondaryHeading>
      <CardsContainer>
        {products.map((product) => (
          // <PriceTag name={product.name} key={product.name} />
          <ProductCard
            key={product.name}
            url={product.url}
            alt={product.alt}
            name={product.name}
            price={product.price}
            weight={product.weight}
            isInSeason={product.isInSeason}
          />
        ))}
      </CardsContainer>
    </DivStyled>
  );
};

export default Prices;
