import styled from 'styled-components';
import fb from '../public/fb-circle.png';
import insta from '../public/instagram-cirlce.png';
import Image from 'next/image';
import { SocialsHeading } from '@/styles/styles';
const Container = styled.div`
  flex-direction: column;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const FirstLink = styled.a`
  margin-right: 6px;
`;

const LastLink = styled.a`
  margin-left: 6px;
`;

const SocialMedia = () => {
  return (
    <Container>
      <SocialsHeading>Seuraa minua somessa!</SocialsHeading>
      <div>
        <FirstLink
          href="https://www.facebook.com/profile.php?id=61571253035478"
          target="_blank"
        >
          <Image
            src={fb}
            width={40}
            height={40}
            alt="Linkki Puutarhuri Kari Alpin Facebook-sivulle"
          />
        </FirstLink>
        <LastLink
          href="https://www.instagram.com/puutarhurikarialppi/"
          target="_blank"
        >
          <Image
            src={insta}
            width={40}
            height={40}
            alt="Linkki Puutarhuri Kari Alpin Instagram-tilille"
          />
        </LastLink>
      </div>
    </Container>
  );
};
export default SocialMedia;
