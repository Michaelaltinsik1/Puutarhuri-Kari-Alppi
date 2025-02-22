import { styled } from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import { TertiaryHeading, Subheading, Body } from '@/styles/styles';
import { allura } from '../app/fonts';
import { devices } from '@/utils/devices';
import { colors } from '@/utils/colors';
import { NavLink } from '@/styles/styles';

interface IadditionalInfoBody {
  text: string;
  isBodyHeader: boolean;
}
interface Card {
  staticImage: StaticImageData;
  alt: string;
  title?: string;
  body: Array<string>;
  isProductCard?: boolean;
  hasAdditionalInfo?: boolean;
  additionalInfoTitle?: string;
  additionalInfoBody?: Array<IadditionalInfoBody>;
  shouldCenterMainCardInfo?: boolean;
}

const CardContainer = styled.div<{ $isProductCard?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  ${(props) =>
    props?.$isProductCard
      ? {
          backgroundColor: `${colors.gray_50}`,
        }
      : { backgroundColor: `${colors.blueBGNew}`, alignItems: 'center' }}
  border-radius: 5px;
  border: 1px solid ${colors.blueBGNew};
  margin-bottom: 40px;
  &:first-of-type {
    margin-top: 40px;
  }
  @media (min-width: ${devices.tablet}) {
    padding: 24px;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: ${devices.laptop}) {
    max-width: none;
    padding: 48px 56px;
  }
`;

const ImageStyled = styled(Image)`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 5px;
  @media (min-width: ${devices.laptop}) {
    margin-bottom: 0px;
    margin-right: 40px;
  }
  @media (min-width: ${devices.desktop}) {
    max-width: 50%;
    margin-bottom: 0px;
    margin-right: 40px;
  }
`;
const BodyCard = styled(Body)<{ $isProductCard?: boolean }>`
  ${(props) =>
    props?.$isProductCard
      ? {
          color: `${colors.textNew}`,
        }
      : { color: `${colors.gray_900}` }}
`;
const NavLinkCard = styled(NavLink)`
  background-color: ${colors.gray_50};
  color: ${colors.gray_900};
  padding: 4px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 24px;
  &:first-of-type {
    margin-bottom: 16px;
  }
  @media (min-width: ${devices.laptop}) {
    &:first-of-type {
      margin-right: 16px;
      margin-bottom: 0px;
    }
    &:last-of-type {
      margin-left: 16px;
    }
  }
  &:hover {
    text-decoration: none;
    background-color: #f5f5f5;
  }
  &:focus {
    text-decoration: none;
    background-color: #eeeeee;
  }
`;

const LinksContainer = styled.div`
  margin-top: 24px;
  @media (min-width: ${devices.laptop}) {
    display: flex;
    justify-content: space-between;
  }
`;

const TertiaryHeadingCard = styled(Body)`
  font-size: 32px;
  margin-bottom: 24px;
  @media (min-width: ${devices.laptop}) {
    font-size: 48px;
    margin-bottom: 32px;
  }
`;

const InnerCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${devices.laptop}) {
    flex-direction: row;
  }
  width: 100%;
  box-sizing: border-box;
`;

const AdditionalInformationContainer = styled.div<{ $isProductCard?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: red;
  padding: 16px 24px;
  ${(props) =>
    props?.$isProductCard
      ? {
          backgroundColor: `${colors.blueBGNew}`,
        }
      : { backgroundColor: `${colors.gray_50}`, alignItems: 'center' }}
  margin-top: 20px;
  @media (min-width: ${devices.laptop}) {
    max-width: none;
    padding: 32px 40px;
    margin-top: 32px;
  }
`;

const SubheadingCardAdditional = styled(Subheading)`
  margin-bottom: 16px;
  text-align: center;
`;

const AdditionalBody = styled.div`
  text-align: center;
  color: ${colors.textNew};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  margin-bottom: 16px;
`;
const AdditionalBodyHeader = styled(AdditionalBody)`
  font-size: 20px;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-weight: bold;
`;

const MainCardInfo = styled(AdditionalBody)<{
  $shouldCenterMainCardInfo?: boolean;
}>`
  ${(props) =>
    props?.$shouldCenterMainCardInfo && {
      marginBottom: 'auto',
      marginTop: 'auto',
    }}
`;
const Card = ({
  staticImage,
  alt,
  title,
  body,
  isProductCard = false,
  additionalInfoBody = [],
  hasAdditionalInfo = false,
  additionalInfoTitle = '',
  shouldCenterMainCardInfo,
}: Card) => {
  function getAdditionalBodyTag(bodyText: IadditionalInfoBody) {
    if (bodyText.isBodyHeader) {
      return (
        <AdditionalBodyHeader key={bodyText.text}>
          {bodyText.text}
        </AdditionalBodyHeader>
      );
    }
    return <AdditionalBody key={bodyText.text}>{bodyText.text}</AdditionalBody>;
  }
  return (
    <CardContainer $isProductCard={isProductCard}>
      <InnerCardContainer>
        <ImageStyled src={staticImage} alt={alt} />
        <MainCardInfo $shouldCenterMainCardInfo={shouldCenterMainCardInfo}>
          {title && (
            <TertiaryHeadingCard className={allura.className}>
              {title}
            </TertiaryHeadingCard>
          )}
          {body.map((paragraph) => (
            <BodyCard $isProductCard={isProductCard} key={paragraph}>
              {paragraph}
            </BodyCard>
          ))}
          {!isProductCard && (
            <LinksContainer>
              <NavLinkCard href="#prices" className={allura.className}>
                Tuotteet ja hinnasto
              </NavLinkCard>
              <NavLinkCard href="#contact" className={allura.className}>
                Ota yhteyttä
              </NavLinkCard>
            </LinksContainer>
          )}
        </MainCardInfo>
      </InnerCardContainer>
      {hasAdditionalInfo && (
        <AdditionalInformationContainer $isProductCard={isProductCard}>
          {additionalInfoTitle && (
            <SubheadingCardAdditional>
              {additionalInfoTitle}
            </SubheadingCardAdditional>
          )}
          {additionalInfoBody.map((additionalInfo) =>
            getAdditionalBodyTag(additionalInfo)
          )}
        </AdditionalInformationContainer>
      )}
    </CardContainer>
  );
};
export default Card;
