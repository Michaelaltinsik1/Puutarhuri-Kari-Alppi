import styled from 'styled-components';
import { devices } from '@/utils/devices';
import { colors } from '@/utils/colors';
import { Subheading } from '@/styles/styles';
import Mustikka from '../public/mustikka_1.png';
import Image from 'next/image';
const WaysOfWorkingList = [
  'Kerron Toiminnastani läpinäkyvästi',
  'Teen työni huolellisesti',
  'Panostan laatuun',
  'Hinnoittelen reilusti ja päivitän hintoja tarvittaessa',
];

const Container = styled.div`
  padding: 16px 20px;
  background-color: ${colors.waysOfWorkingBG};
  @media (min-width: ${devices.tablet}) {
    padding: 24 20px;
  }
  @media (min-width: ${devices.laptop}) {
    padding: 32px 20px;
  }
  @media (min-width: ${devices.desktop}) {
    padding: 32px 24px;
  }
`;

const Heading = styled(Subheading)`
  color: ${colors.gray_900} !important;
  margin-bottom: 20px;
  text-align: left;
  @media (min-width: ${devices.laptop}) {
    text-align: left;
  }
  @media (min-width: ${devices.desktop}) {
  }
`;

const ListItem = styled.li`
  color: ${colors.gray_900} !important;
  text-align: left;
  list-style: circle;
  margin-bottom: 12px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`;

const ListItemContainer = styled.ul`
  margin: 0 24px;
  @media (min-width: ${devices.laptop}) {
    margin: 0 32px;
  }
`;

const ListImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${devices.tablet}) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  @media (min-width: ${devices.tablet}) {
    margin-top: 0px;
    justify-content: flex-start;
  }
`;
const WaysOfWorking = () => {
  return (
    <Container>
      <Heading>Tapani toimia</Heading>
      <ListImageContainer>
        <ListItemContainer>
          {WaysOfWorkingList.map((WaysOfWorkingItem) => (
            <ListItem key={WaysOfWorkingItem}>{WaysOfWorkingItem}</ListItem>
          ))}
        </ListItemContainer>
        <ImageContainer>
          <Image src={Mustikka} width={100} height={100} alt="Mustikka" />
        </ImageContainer>
      </ListImageContainer>
    </Container>
  );
};
export default WaysOfWorking;
