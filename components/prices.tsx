import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import products from '../utils/products.json';
import { SecondaryHeading } from '@/styles/styles';
import PriceTag from './minorComponents/priceTag';
import { devices } from '@/utils/devices';
interface PricesProps {
  headerHeight: number;
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

const Prices = ({ headerHeight }: PricesProps) => {
  return (
    <DivStyled $headerHeight={headerHeight - 1} id="prices">
      <SecondaryHeading>Tuotteet ja hinnasto</SecondaryHeading>
      <div>
        {products.map((product) => (
          <PriceTag name={product.name} key={product.name} />
        ))}
      </div>
    </DivStyled>
  );
};

export default Prices;
