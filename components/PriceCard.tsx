import Image from 'next/image';
import { Body, Subheading } from '@/styles/styles';
import styled from 'styled-components';
import { devices } from '@/utils/devices';
import { colors } from '@/utils/colors';
interface PriceCardType {
  url: string;
  alt: string;
  name: string;
  price: number;
  weight: string;
  isInSeason?: boolean;
  showDiagonal?: boolean;
  diagonalText?: string;
}

const CardContainer = styled.div<{ $isInSeason?: boolean }>`
  position: relative;
  width: 250px;
  background-color: ${colors.blueBGNew};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  //opacity: ${(props) => (props.$isInSeason ? '1' : '0.65')};
  @media (min-width: ${devices.laptop}) {
    //margin: 0px 16px;
  }
`;
const ImageStyled = styled(Image)`
  border-radius: 4px;
  margin-bottom: 16px;
`;
const Name = styled(Subheading)`
  margin-bottom: 8px;
  color: ${colors.gray_900};
`;
const Price = styled(Body)`
  margin-bottom: 0px;
  font-size: 20px;
  color: ${colors.gray_900};
`;
const Span = styled.span`
  display: block;
  font-size: 20px;
  font-weight: bold;
`;
const Weight = styled(Body)`
  font-size: 20px;
  margin-bottom: 8px;
  color: ${colors.gray_900};
`;

const Ribbon = styled(Body)`
  width: 100%;
  height: 188px;
  position: absolute;
  top: -8px;
  left: 8px;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 8px;
    right: 100px;
    background: #8a8f84;
    border-radius: 8px 8px 0px 0px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 40px;
    right: 0px;
    top: 100px;
    background: #8a8f84;
    border-radius: 0px 8px 8px 0px;
  }
`;
const RibbonSpan = styled.span`
  width: 200px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 30px;
  right: -50px;
  z-index: 2;
  overflow: hidden;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  border: 1px dashed ${colors.specialBG};
  box-shadow: 0 0 0 3px ${colors.specialBG},
    0px 21px 5px -18px rgb(138, 143, 132, 0.6);
  background: ${colors.specialBG};
  text-align: center;
`;

const Container = styled.div``;
const PriceCard = ({
  url = '',
  alt = '',
  name,
  price,
  weight,
  isInSeason = true,
  showDiagonal = false,
  diagonalText = '',
}: PriceCardType) => {
  return (
    <CardContainer $isInSeason={isInSeason}>
      {alt && url && (
        <ImageStyled src={url} width={250} height={300} alt={alt} />
      )}
      <Container>
        <Name>{name}</Name>
        <Price>
          Hinta:
          {price && weight ? (
            <Span>
              {price}&euro; / {weight}
            </Span>
          ) : (
            <Span>-</Span>
          )}
        </Price>
        {diagonalText && showDiagonal && (
          <Ribbon>
            <RibbonSpan>{diagonalText}</RibbonSpan>
          </Ribbon>
        )}
      </Container>
    </CardContainer>
  );
};

export default PriceCard;
