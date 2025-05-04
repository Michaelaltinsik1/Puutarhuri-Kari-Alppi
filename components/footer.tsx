import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { CopyRight, SecondaryHeading } from '@/styles/styles';

import Image from 'next/image';
import { devices } from '@/utils/devices';
import mapMobile from '../public/MapMobile.jpg';
import { Subheading } from '@/styles/styles';
import SocialMedia from './SocialMedia';
import Mustikka from '../public/mustikka_1.png';
interface FooterProps {
  headerHeight: number;
}

const DivStyled = styled.div<{ $headerHeight?: number }>`
  display: flex;
  flex-direction: column;
  background-color: ${colors.blueBGNew};
  /* scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'}; */
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
  display: flex;
  flex-direction: column;
  @media (min-width: ${devices.laptop}) {
    align-items: center;
    justify-content: center;
  }
`;
const FooterHeading = styled(Subheading)`
  color: ${colors.gray_900} !important;
  min-width: 100%;
  margin-bottom: 0px;
  text-align: left;
  @media (min-width: ${devices.laptop}) {
    text-align: center;
    min-width: 860px;
  }
  @media (min-width: ${devices.desktop}) {
    min-width: 100%;
  }
`;
const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  @media (min-width: ${devices.laptop}) {
    justify-content: center;
    flex-direction: row;
    min-width: 75%;
  }
`;
const ImageStyled = styled(Image)`
  width: 100%;
  height: auto;
  margin: 24px 0px;
  border: 1px solid black;
  border-radius: 12px;
  &:hover {
    filter: brightness(90%);
  }
  @media (min-width: ${devices.tablet}) {
    width: 100%;
  }
  @media (min-width: ${devices.laptop}) {
    max-width: 80vh;
    width: auto;
    margin-right: 32px;
  }

  @media (min-width: ${devices.desktop}) {
    width: auto;
    margin-right: 64px;
  }

  @media (min-width: ${devices.desktop}) and (max-width: 1550px) {
    width: auto;
    margin-right: 32px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  @media (min-width: ${devices.tablet}) {
    justify-content: center;
  }
`;

const Footer = ({ headerHeight }: FooterProps) => {
  const destinationLat = 61.574391246702795;
  const destinationLng = 23.286892840078547;
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;
  return (
    <>
      <DivStyled $headerHeight={headerHeight - 1} id="footer">
        <Container>
          <FooterHeading>Katso tästä ajo-ohjeet.</FooterHeading>
          <NavContainer>
            <a href={googleMapsUrl} target="_blank">
              <picture style={{ display: 'flex' }}>
                <source media="(max-width: 767px)" srcSet="/MapMobile.jpg" />
                <source media="(min-width: 768px)" srcSet="/MapDesktop.jpg" />
                <ImageStyled src={mapMobile} alt="Map to location" />
              </picture>
            </a>
          </NavContainer>
        </Container>
        <SocialMedia />
        <ImageContainer>
          <Image src={Mustikka} width={100} height={100} alt="Mustikka" />
        </ImageContainer>
        <CopyRight>
          &copy; Puutarhuri Kari Alppi. Kaikki oikeudet pidätetään.
        </CopyRight>
      </DivStyled>
    </>
  );
};

export default Footer;
