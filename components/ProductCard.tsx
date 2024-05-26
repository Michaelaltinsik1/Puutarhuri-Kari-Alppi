import Image from 'next/image';
import { Body, Subheading } from '@/styles/styles';
import styled from 'styled-components';
import { devices } from '@/utils/devices';
interface ProductCardType {
  url: string;
  alt: string;
  name: string;
  price: number;
  weight: string;
  isInSeason?: boolean;
}

const CardContainer = styled.div<{ $isInSeason?: boolean }>`
  width: 250px;
  box-shadow: rgba(35, 209, 96, 0.34) 0px 3px 8px;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  opacity: ${(props) => (props.$isInSeason ? '1' : '0.65')};
  @media (min-width: ${devices.laptop}) {
    margin: 0px 16px;
  }
`;
const ImageStyled = styled(Image)`
  border-radius: 4px;
  margin-bottom: 16px;
`;
const Name = styled(Subheading)`
  margin-bottom: 8px;
`;
const Price = styled(Body)`
  margin-bottom: 0px;
  font-size: 20px;
`;
const Span = styled.span`
  font-size: 24px;
`;
const Weight = styled(Body)`
  font-size: 20px;
  margin-bottom: 8px;
`;
const ProductCard = ({
  url = '',
  alt = '',
  name,
  price,
  weight,
  isInSeason = true,
}: ProductCardType) => {
  return (
    <CardContainer $isInSeason={isInSeason}>
      {alt && url && (
        <ImageStyled src={url} width={250} height={300} alt={alt} />
      )}
      <div>
        <Name>{name}</Name>
        <Weight>Määra: {weight}</Weight>
        <Price>Hinta: {price ? <Span>{price} &euro;</Span> : '-'}</Price>
      </div>
    </CardContainer>
  );
};

export default ProductCard;
