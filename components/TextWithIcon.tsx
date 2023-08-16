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
}
const Container = styled.div`
  min-width: 30px;
`;
const TextWithIconStyled = styled.a<{ $isLocation?: boolean }>`
  display: flex;
  font-size: 24px;
  color: ${colors.gray_900};
  align-items: center;
  text-decoration: none;
  &:hover {
    ${(props) => !props?.$isLocation && { textDecoration: 'underline' }}
  }
  text-underline-offset: 4px;
  margin-bottom: 16px;
`;

const TextWithIcon = ({ text, icon }: TextWithIconProps) => {
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
        <TextWithIconStyled href="mailto:Mickealt@hotmail.se">
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
        <TextWithIconStyled $isLocation={true}>
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
