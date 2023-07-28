import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { SecondaryHeading } from '@/styles/styles';
import openHours from '@/utils/openHours.json';
import deviantHours from '@/utils/deviantHours.json';
import { devices } from '@/utils/devices';
import React from 'react';

interface OpenHoursProps {
  headerHeight: number;
}

const DivStyled = styled.div<{ $headerHeight?: number }>`
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
  background-color: ${colors.gray_50};
  padding: 24px 16px;
  @media (min-width: ${devices.desktop}) {
    display: flex;
    justify-content: center;
  }
`;

const DayParagraph = styled.p`
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0px;
  margin-bottom: 16px;
`;
const OpenHoursParagraph = styled(DayParagraph)`
  font-weight: 600;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
  &:first-of-type {
    margin-bottom: 16px;
  }
`;
const Wrapper = styled.div`
  min-width: 75%;
  @media (min-width: ${devices.desktop}) {
    display: flex;
    justify-content: space-evenly;
  }
`;
const Span = styled.span`
  margin-left: 4px;
  margin-right: 4px;
`;
const OpenHours = ({ headerHeight }: OpenHoursProps) => {
  return (
    <DivStyled $headerHeight={headerHeight - 1} id="openHours">
      <Wrapper>
        <div>
          <SecondaryHeading>Öppettider</SecondaryHeading>
          <GridContainer>
            {openHours.map((openHour) => (
              <React.Fragment key={openHour.day}>
                <DayParagraph>{openHour.day}</DayParagraph>
                {openHour.close.toLowerCase() != 'closed' ? (
                  <OpenHoursParagraph>
                    {openHour.open} <Span>-</Span> {openHour.close}
                  </OpenHoursParagraph>
                ) : (
                  <OpenHoursParagraph>{openHour.open}</OpenHoursParagraph>
                )}
              </React.Fragment>
            ))}
          </GridContainer>
        </div>
        <div>
          <SecondaryHeading>Avvikande öppettider</SecondaryHeading>
          <GridContainer>
            {deviantHours.map((openHour) => (
              <React.Fragment key={openHour.day}>
                <DayParagraph>{openHour.day}</DayParagraph>
                {openHour.close.toLowerCase() != 'closed' ? (
                  <OpenHoursParagraph>
                    {openHour.open} <Span>-</Span> {openHour.close}
                  </OpenHoursParagraph>
                ) : (
                  <OpenHoursParagraph>{openHour.open}</OpenHoursParagraph>
                )}
              </React.Fragment>
            ))}
          </GridContainer>
        </div>
      </Wrapper>
    </DivStyled>
  );
};

export default OpenHours;
