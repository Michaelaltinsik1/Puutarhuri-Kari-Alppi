import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { SecondaryHeading } from '@/styles/styles';
import { Body } from '@/styles/styles';
import Image from 'next/image';
import { devices } from '@/utils/devices';
import { Icons } from './TextWithIcon';
import TextWithIcon from './TextWithIcon';
interface FooterProps {
  headerHeight: number;
}
const DivStyled = styled.div<{ $headerHeight?: number }>`
  background-color: ${colors.gray_50};
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
  /* height: 100vh; */
`;

const Footer = ({ headerHeight }: FooterProps) => {
  return (
    <DivStyled $headerHeight={headerHeight - 1} id="footer">
      <div>
        <SecondaryHeading>Kontakt</SecondaryHeading>
      </div>
      <div>
        <SecondaryHeading>Överblick</SecondaryHeading>
        <TextWithIcon icon={Icons.phone} text="072 66 77 789" />
        <TextWithIcon icon={Icons.email} text="test@hotmail.com" />
        <TextWithIcon
          icon={Icons.location}
          text="Vasagatan 2. Stockholm, 12345, Sverige"
        />
      </div>
    </DivStyled>
  );
};

export default Footer;
