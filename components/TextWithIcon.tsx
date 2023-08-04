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

const TextWithIconStyled = styled.a<{ $isLocation?: boolean }>`
  display: flex;
  font-size: 20px;
  color: ${colors.gray_900};
  font-weight: 600;
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
          <Image src={Phone} alt="Phone icon" />
          <span style={{ marginRight: '8px' }}></span>
          {text}
        </TextWithIconStyled>
      );
    } else if (icon === Icons.email) {
      return (
        <TextWithIconStyled href="mailto:Mickealt@hotmail.se">
          <Image src={Email} alt="Email icon" />
          <span style={{ marginRight: '8px' }}></span>
          {text}
        </TextWithIconStyled>
      );
    } else {
      return (
        <TextWithIconStyled $isLocation={true}>
          <Image src={Location} alt="Location icon" />{' '}
          <span style={{ marginRight: '8px' }}></span> {text}
        </TextWithIconStyled>
      );
    }
  };
  return <>{findIcon()}</>;
};
export default TextWithIcon;
