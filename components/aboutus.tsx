import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { Body, SecondaryHeading } from '@/styles/styles';
import { devices } from '@/utils/devices';

interface AboutUsProps {
  headerHeight: number;
}
// scroll-margin-top: 214px;
//{props => props.$inputColor || "#BF4F74"};
const Wrapper = styled.div<{ $headerHeight?: number }>`
  background-color: ${colors.green};
  padding: 24px 16px;
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
  @media (min-width: ${devices.desktop}) {
    display: flex;
    justify-content: center;
    padding: 64px;
  }
`;
const Container = styled.div`
  @media (min-width: ${devices.desktop}) {
    max-width: 50%;
  }
`;
const AboutUs = ({ headerHeight }: AboutUsProps) => {
  return (
    <Wrapper $headerHeight={headerHeight - 1} id="aboutUs">
      <Container>
        <SecondaryHeading>Yrityksestä</SecondaryHeading>
        <Body>
          Sivustoamme päivitetään parhaillaan. Kiitos kärsivällisyydestä.
        </Body>
      </Container>
    </Wrapper>
  );
};

export default AboutUs;
