import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { devices } from '@/utils/devices';
import { useState } from 'react';
import { Body, SecondaryHeading } from '@/styles/styles';
import Image from 'next/image';
const Card = styled.div`
  background-color: transparent;
  border-radius: 12px;
  display: flex;
  width: 100%;
  flex-shrink: 0;
  @media (min-width: ${devices.tablet}) {
    width: 50%;
  }
  @media (min-width: ${devices.desktop}) {
    width: 33.33333%;
  }
`;
const ContainerDiv = styled.div`
  background-color: ${colors.gray_50};
  box-sizing: border-box;
  display: flex;
  min-height: 250px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  padding: 24px;
  &:first-of-type {
    margin-left: 16px;
  }
  &:last-of-type {
    margin-right: 16px;
  }
`;
interface RecipeCard {
  title: string;
  imgUrl: string;
  description: string;
}

const Paragraph = styled(Body)`
  margin-bottom: 0px;
  max-height: 150px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-align: center;
`;
const ImageStyled = styled(Image)`
  margin-top: 20px;
  margin-bottom: 20px;
  align-self: center;
`;
const SecondaryHeadingCenter = styled(SecondaryHeading)`
  text-align: center;
  margin-bottom: 0px;
`;

const RecipeCard = ({ title, imgUrl, description }: RecipeCard) => {
  return (
    <Card>
      <ContainerDiv>
        <SecondaryHeadingCenter>{title}</SecondaryHeadingCenter>
        <ImageStyled
          width={100}
          height={100}
          src={imgUrl}
          alt={`image for ${title}`}
        />
        <Paragraph>{description}</Paragraph>
      </ContainerDiv>
    </Card>
  );
};
export default RecipeCard;
