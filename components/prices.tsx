import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import products from '../utils/products.json';
import { SecondaryHeading, Subheading } from '@/styles/styles';
import PriceTag from './minorComponents/priceTag';
import { devices } from '@/utils/devices';
import PriceCard from './PriceCard';
import Card from './Card';
import yrityksestä from '../public/Yrityksestä.jpg';
import TuotteetMustikka from '../public/TuotteetMustikka.jpg';
import TuotteetParsa from '../public/TuotteetParsa.jpg';
import TuotteetDummy from '../public/TuotteetDummy.jpg';
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
  /* scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'}; */
  background-color: ${colors.blueBGNew};
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
  display: grid;
  justify-items: center;
  gap: 16px;
  @media (min-width: ${devices.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1650px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const CardsWrapper = styled.div`
  background-color: ${colors.gray_50};
  padding: 24px 16px;
  border-radius: 5px;
  @media (min-width: ${devices.tablet}) {
    padding: 64px 24px;
  }
  @media (min-width: 1650px) {
    padding: 64px 24px;
  }
`;

const SubheadingPrices = styled(SecondaryHeading)`
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
  @media (min-width: ${devices.desktop}) {
    margin-top: 40px;
    max-width: 70%;
    font-size: 32px;
  }
`;
const Prices = ({ headerHeight }: PricesProps) => {
  return (
    <DivStyled $headerHeight={headerHeight - 1} id="prices">
      <SecondaryHeading style={{ color: `${colors.gray_900}` }}>
        Tuotteet
      </SecondaryHeading>
      <Card
        staticImage={TuotteetParsa}
        alt="Parsa"
        title="Parsa"
        body={[
          'Parsan satokausi käynnistyy toukokuun puolivälissä ja se kestää noin kolme viikkoa (kesällä 2025).',
          'Myyn parsat aina samana aamuna kerättynä.',
        ]}
        isProductCard={true}
      />
      <Card
        staticImage={TuotteetMustikka}
        alt="Pensasmustikkaä"
        title="Pensasmustikka"
        body={[
          'Pensasmustikat kypsyvät elo-syyskuun aikana. Koska taimet ovat vielä nuoria, pensasmustikkaa on toistaiseksi tarjolla vielä rajallisesti.',
          'Viljelyssä olevien lajikkeiden marjat ovat suurikokoisia. Marjat säilyvät hyvin sekä tuoreena että pakastettuna.',
        ]}
        isProductCard={true}
      />
      <Card
        staticImage={TuotteetDummy}
        alt="Yritit ja vihannesten taimet"
        title="Yritit ja vihannesten taimet"
        body={[
          'Kasvatan myös yrttien ja vihannesten taimia jatkokasvatukseen. Voit kasvattaa taimia pihallasi tai parvekkeellasi. Taimien valikoima vaihtelee vuosittain ja saatavuus on rajallinen. Seuraavan kesän (2025) taimivalikoima ilmestyy sivuillemme kevään 2025 aikana.',
          'Yrtit: mm. basilika, timjami, rosmariini, tilli Vihannesten taimet: mm. tomaatti, kurkku, chilipaprika',
        ]}
        isProductCard={true}
        hasAdditionalInfo={true}
        additionalInfoTitle="Viljelyssä 2025"
        additionalInfoBody={[
          { isBodyHeader: true, text: 'Vihannesten taimet:' },
          {
            isBodyHeader: false,
            text: 'tomatti, chilipaprika, kesäkurpitsa, kurkku, pinaatti, selleri',
          },
          { isBodyHeader: true, text: 'Yrtit: ' },
          {
            isBodyHeader: false,
            text: 'basilika, timjani, rosmariini, laventeli, oregano, kurkkuyrtti, salvia, sitruunamelissa, viinisuolaheinä, korianteri, rucola, kiinankaali, stevia',
          },
        ]}
      />
      <SecondaryHeading style={{ color: `${colors.gray_900}` }}>
        Hinnasto
      </SecondaryHeading>

      <CardsWrapper>
        <CardsContainer>
          {products.map((product) => (
            // <PriceTag name={product.name} key={product.name} />
            <PriceCard
              key={product.name}
              url={product.url}
              alt={product.alt}
              name={product.name}
              price={product.price}
              weight={product.weight}
              isInSeason={product.isInSeason}
              diagonalText={product.diagonalText}
              showDiagonal={product.showDiagonal}
            />
          ))}
        </CardsContainer>
        <SubheadingPrices>
          Varmista saatavuus aina etukäteen ottamalla ensin yhteyttä!
        </SubheadingPrices>
      </CardsWrapper>
    </DivStyled>
  );
};

export default Prices;
