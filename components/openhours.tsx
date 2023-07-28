import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { SecondaryHeading } from '@/styles/styles';
const DivStyled = styled.div`
  background-color: ${colors.gray_50};
  height: 100vh;
`;

const OpenHours = () => {
  return (
    <DivStyled id="openHours">
      <div></div>
      <div></div>
    </DivStyled>
  );
};

export default OpenHours;
