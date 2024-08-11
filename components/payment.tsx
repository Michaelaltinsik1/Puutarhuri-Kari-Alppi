import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { SecondaryHeading } from '@/styles/styles';
import { Body } from '@/styles/styles';
import Image from 'next/image';
import { devices } from '@/utils/devices';

interface PaymentProps {
  headerHeight: number;
}
const Wrapper = styled.div<{ $headerHeight?: number }>`
  /* scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'}; */
  background-color: ${colors.green};
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${devices.desktop}) {
    padding: 64px;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PhoneNumberText = styled.p`
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const ImageStyled = styled(Image)`
  margin-top: 8px;
`;
const MainContainer = styled.div`
  @media (min-width: ${devices.desktop}) {
    max-width: 50%;
  }
`;
const Payment = ({ headerHeight }: PaymentProps) => {
  return (
    <Wrapper $headerHeight={headerHeight - 1} id="payment">
      <MainContainer>
        <SecondaryHeading>
          Payments, Lorem, ipsum dolor sit amet consectetur.
        </SecondaryHeading>
        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          aperiam consequuntur deleniti mollitia omnis earum natus similique
          suscipit facere distinctio?
        </Body>
        <Container>
          <ImageStyled
            src="/MobilePay.svg"
            alt="MobilePay Logo"
            width={120}
            height={100}
          />
          <PhoneNumberText>072 66 77 789</PhoneNumberText>
        </Container>
        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugit
          doloremque dolor porro quis adipisci sint tempora minus. Incidunt
          tempora nobis eveniet dolores iure ipsum minima? Maxime unde iusto
          neque?
        </Body>
      </MainContainer>
    </Wrapper>
  );
};

export default Payment;
