import { styled } from 'styled-components';
import Image from 'next/image';
import { colors } from '@/utils/colors';
import { SecondaryHeading, Body, TertiaryHeading } from '@/styles/styles';
import { devices } from '@/utils/devices';
import Bee from '../public/bee.png';
import Parsa_ja_mustikka from '../public/Parsa_ja_mustikka.png';
import fb from '../public/fb-circle.png';

interface RekoProps {
  headerHeight: number;
}

const DivStyled = styled.div<{ $headerHeight?: number }>`
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray_50};
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
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
  border-bottom: 1px solid ${colors.blueBGNew};
`;

const RekoContainer = styled.div`
  position: relative;
  background-color: ${colors.blueBGNew};
  padding: 16px;
  border-radius: 5px;
  margin-bottom: 40px;

  @media (min-width: ${devices.tablet}) {
    padding: 24px;
  }
  @media (min-width: ${devices.laptop}) {
    padding: 48px 56px;
  }
  justify-content: center;
`;

const StyledBody = styled(Body)`
  text-align: center;
  &:last-of-type {
    margin-bottom: 0px;
  }
`;

const StyledBodyUnderline = styled(StyledBody)`
  font-size: 20px;
  text-decoration: underline;
  text-underline-offset: 4px;
`;
const StyledTertiaryHeading = styled(TertiaryHeading)`
  text-align: center;
  margin-bottom: 20px;
`;
TertiaryHeading;
const BoldSpan = styled.span`
  font-weight: bold;
`;

const ImageAbsolute = styled(Image)`
  position: absolute;
`;
const ImageAbsoluteBee = styled(ImageAbsolute)`
  top: -30px;
  right: -16px;
  overflow: hidden;
  @media (min-width: ${devices.laptop}) {
    width: 130px;
    height: 130px;
    top: -25px;
    right: -25px;
  }
  @media (min-width: ${devices.desktop}) {
    width: 150px;
    height: 150px;
    top: -25px;
    right: -25px;
  }
`;
const ImageAbsoluteGreens = styled(ImageAbsolute)`
  bottom: -25px;
  left: 16px;
  @media (min-width: ${devices.tablet}) {
    width: 91px;
    height: 130px;
    padding: 24px;
    bottom: -45px;
    left: -10px;
  }
  @media (min-width: ${devices.desktop}) {
    width: 105px;
    height: 150px;
    padding: 24px;
    bottom: -45px;
    left: -10px;
  }
`;

const SocialsContainer = styled.div`
  flex-direction: column;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  @media (min-width: ${devices.laptop}) {
    margin-top: 32px;
  }
`;
const Reko = ({ headerHeight }: RekoProps) => {
  return (
    <DivStyled $headerHeight={headerHeight - 1} id="reko">
      <SecondaryHeading style={{ color: `${colors.gray_900}` }}>
        REKO - lähiruokarinki
      </SecondaryHeading>
      <RekoContainer>
        <ImageAbsoluteBee
          src={Bee}
          width={100}
          height={100}
          alt="Kuva ampiaisesta"
        />
        <StyledBody>
          Olen mukana lähiruoan myynti- ja jakelumalli REKO:ssa.
        </StyledBody>
        <StyledBody>
          REKO:ssa asiakkaat voivat tilata lähiruokaa suoraan tuottajilta ilman
          välikäsiä.
        </StyledBody>
        <StyledBody>
          REKO-renkaat toimivat Facebookissa suljettuina ryhminä, joissa jäsenet
          tekevät tilauksia ja sopivat toimituksista. Tilausten toimitus ja
          nouto tapahtuvat etukäteen sovittuna REKO-päivänä, joka ilmoitetaan
          ryhmän Facebook-seinällä. Jakopäivät ja -ajat löytyvät ryhmän
          tiedoista. Huomioithan, että Facebookiin tehty tilaus on sitova ostos,
          joten muista noutaa tilaamasi tuotteet.
        </StyledBody>
        <StyledBody>
          Maksutapoina hyväksytään sekä kortti että käteinen.
        </StyledBody>
      </RekoContainer>

      <RekoContainer>
        <ImageAbsoluteGreens
          src={Parsa_ja_mustikka}
          width={71}
          height={100}
          alt="Kuva parsasta ja mustikasta"
        />
        <StyledTertiaryHeading>
          Kierrän Pirkanmaan alueen lähiruokaringessä seuraavasti
        </StyledTertiaryHeading>
        <StyledBodyUnderline>
          Parittoman viikon keskiviikoisin:
        </StyledBodyUnderline>
        <StyledBody>
          - <BoldSpan>Lielahti</BoldSpan> (Sotkan takaparkkipaikka) klo 16.30 -
          17.00
        </StyledBody>
        <StyledBodyUnderline>Parittoman viikon tiistaisin:</StyledBodyUnderline>
        <StyledBody>
          - <BoldSpan>Tohloppi</BoldSpan> (Tampereen lihajalosteen parkkipaikka)
          klo 18.30 - 19.00
        </StyledBody>
        <StyledBody>
          - <BoldSpan>Pirkkala</BoldSpan> (Partola, CM parkkipaikka) klo 17.30 -
          18.00
        </StyledBody>
        <StyledBodyUnderline>Parillisen viikon torstaisin:</StyledBodyUnderline>
        <StyledBody>
          - <BoldSpan>Nokia</BoldSpan> (Pirkkalaistori, CM parkkipaikka) klo
          17.30 - 18.00
        </StyledBody>
        <StyledBody>
          - <BoldSpan>Ylöjärvi</BoldSpan> (Elovainio, CM parkkipaikka, autopesun
          reuna) klo 18.30 - 19.00
        </StyledBody>
        <StyledBody>
          - <BoldSpan>Hämeenkyrö</BoldSpan> (Kyröskosken tori) klo 19.30 - 20.00
        </StyledBody>
        <SocialsContainer>
          <a
            href="https://www.facebook.com/profile.php?id=61571253035478"
            target="_blank"
          >
            <Image
              src={fb}
              width={40}
              height={40}
              alt="Linkki Puutarhuri Kari Alpin Facebook-sivulle"
            />
          </a>
        </SocialsContainer>
      </RekoContainer>
    </DivStyled>
  );
};

export default Reko;
