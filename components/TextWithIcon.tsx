import { Body } from '@/styles/styles';
import Phone from '../public/Phone.svg';
import Email from '../public/Email.svg';
import Location from '../public/Location.svg';
import { styled } from 'styled-components';
import Image from 'next/image';
import { colors } from '@/utils/colors';
export enum Icons {
  phone = 'Phone',
  email = 'Email',
  location = 'Location',
}

interface TextWithIconProps {
  text: string;
  icon: Icons;
  url?: string;
}
const Container = styled.div`
  min-width: 30px;
`;
const TextWithIconStyled = styled.a<{ $isLocation?: boolean }>`
  display: flex;
  font-size: 18px;
  line-height: 150%;
  color: ${colors.gray_900};
  align-items: center;
  text-decoration: underline;
  text-underline-offset: 8px;
  &:hover {
    text-decoration: none;
  }
  margin-bottom: 16px;
`;

const TextWithIcon = ({ text, icon, url = '' }: TextWithIconProps) => {
  const findIcon = () => {
    if (icon === Icons.phone) {
      return (
        <TextWithIconStyled href={`tel:${text}`}>
          <Container>
            <Image
              src={Phone}
              alt="Phone icon"
              style={{ width: '20px', height: 'auto', marginTop: '2px' }}
            />
          </Container>
          <span style={{ marginRight: '8px' }}></span>
          {text}
        </TextWithIconStyled>
      );
    } else if (icon === Icons.email) {
      return (
        <TextWithIconStyled href={`mailto:${text}`}>
          <Container>
            <Image
              src={Email}
              alt="Email icon"
              style={{ width: '20px', height: 'auto', marginTop: '6px' }}
            />
          </Container>
          <span style={{ marginRight: '8px' }}></span>
          {text}
        </TextWithIconStyled>
      );
    } else {
      return (
        <TextWithIconStyled $isLocation={true} href={url} target="_blank">
          <Container>
            <Image
              src={Location}
              alt="Location icon"
              style={{ width: '20px', height: 'auto' }}
            />{' '}
          </Container>
          <span style={{ marginRight: '8px' }}></span> {text}
        </TextWithIconStyled>
      );
    }
  };
  return <>{findIcon()}</>;
};
export default TextWithIcon;
