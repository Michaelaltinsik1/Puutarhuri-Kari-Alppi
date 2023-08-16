import { Body } from '@/styles/styles';
import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
interface PriceProps {
  price: number;
  name: string;
}
const PriceText = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
  margin-bottom: 0px;
  font-size: 24px;
`;

const Container = styled.div`
  border-bottom: 1px solid rgba(26, 25, 25, 0.3);
  display: flex;
  justify-content: space-between;
  padding: 24px 0px;
`;
const PriceTag = ({ price, name }: PriceProps) => {
  return (
    <Container>
      <PriceText>{name}</PriceText>
      <PriceText>{price} &euro;</PriceText>
    </Container>
  );
};
export default PriceTag;
