import { Recipe } from './RecipeCard';
import { colors } from '@/utils/colors';
import { styled } from 'styled-components';
import { SecondaryHeading, TertiaryHeading } from '@/styles/styles';
import { Body } from '@/styles/styles';
import Image from 'next/image';
import Decrement from '../public/decrement.svg';
import Increment from '../public/increment.svg';
import Ingredient from './Ingredient';
import Instruction from './Instruction';
import { devices } from '@/utils/devices';
import { useState } from 'react';
interface SingleRecipe {
  recipe: Recipe;
  closeOverlay: () => void;
}

const SingleRecipeHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${colors.green};
  @media (min-width: ${devices.laptop}) {
    border-radius: 8px 8px 0px 0px;
  }
`;
const Wrapper = styled.div`
  background-color: ${colors.gray_50};
  width: 100%;
  box-sizing: border-box;
  height: 100vh;
  z-index: 1000;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${devices.laptop}) {
    max-width: 90%;
    height: 95vh;
    border-radius: 8px;
  }
  @media (min-width: ${devices.desktop}) {
    max-width: 80%;
  }
`;
const Container = styled.div`
  box-sizing: border-box;
  padding: 40px 16px;
  display: grid;
  max-height: 75vh;
  @media (min-width: ${devices.laptop}) {
    grid-template-columns: 1fr 1fr;
    max-height: 65vh;
  }
  overflow-y: scroll;
`;
const CloseIcon = styled(Image)`
  align-self: end;
`;
const ButtonContainer = styled.div`
  background-color: ${colors.gray_50};
  border: 1px solid ${colors.gray_900};
  display: flex;
  border-radius: 32px;
  margin-bottom: 24px;
`;
const SecondaryHeadingRecipe = styled(SecondaryHeading)`
  margin-top: 16px;
  text-align: center;
`;

const TertiaryHeadingStyled = styled(TertiaryHeading)`
  display: flex;
  margin-bottom: 32px;
`;

const BodyStyled = styled(Body)`
  margin: 0px;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  padding: 16px 32px;
  cursor: pointer;
  border-radius: 32px;
  &:hover {
    background-color: ${colors.buttonHover};
  }
  &:active {
    background-color: ${colors.buttonActive};
  }
  &:disabled {
    background-color: transparent;
    pointer-events: none;
  }
`;
const ButtonTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const IngredientsContainer = styled.div`
  @media (min-width: ${devices.laptop}) {
    border-right: 1px solid ${colors.gray_900};
    padding: 0px 80px;
  }
`;
const InstructionsContainer = styled.div`
  margin-top: 40px;
  @media (min-width: ${devices.laptop}) {
    margin-top: 0px;
    padding: 0px 80px;
    border-left: 1px solid ${colors.gray_900};
  }
`;
const SingleRecipe = ({ recipe, closeOverlay }: SingleRecipe) => {
  const [currModifier, setCurrModifier] = useState<number>(1);
  const [currPortion, setCurrPortion] = useState<number>(recipe.portions);
  const decrementPortionCount = () => {
    if (recipe.portions % 2 === 0) {
      if (currPortion > 2) {
        const currPort = currPortion - 2;
        setCurrPortion(currPort);
        const modifier = currPort / recipe.portions;
        setCurrModifier(modifier);
      }
    }
  };
  const incremenetPortionCount = () => {
    if (recipe.portions % 2 === 0) {
      if (currPortion < 12) {
        const currPort = currPortion + 2;
        setCurrPortion(currPort);
        const modifier = currPort / recipe.portions;
        setCurrModifier(modifier);
      }
    }
  };
  return (
    <Wrapper>
      <SingleRecipeHeader>
        <CloseIcon
          onClick={closeOverlay}
          src="/Close.svg"
          alt="close recipe view"
          width={64}
          height={64}
        />
        <SecondaryHeadingRecipe>{recipe.name}</SecondaryHeadingRecipe>
      </SingleRecipeHeader>
      <Container>
        <IngredientsContainer>
          <TertiaryHeadingStyled>Ingredienser</TertiaryHeadingStyled>
          <ButtonContainer>
            <Button
              disabled={recipe.portions % 2 !== 0 || currPortion <= 2}
              onClick={decrementPortionCount}
            >
              <Image src={Decrement} alt="Decrement button" />
            </Button>
            <ButtonTextContainer>
              <BodyStyled>
                {currPortion}{' '}
                <span style={{ marginLeft: '4px', marginRight: '4px' }}></span>{' '}
                Portioner
              </BodyStyled>
            </ButtonTextContainer>
            <Button
              onClick={incremenetPortionCount}
              disabled={recipe.portions % 2 !== 0 || currPortion >= 12}
            >
              <Image src={Increment} alt="Incremenet button" />
            </Button>
          </ButtonContainer>
          {recipe.ingredients.map((ingredient) => (
            <Ingredient
              value={ingredient.value * currModifier}
              name={ingredient.name}
              unit={ingredient.unit}
              key={ingredient.name}
            />
          ))}
        </IngredientsContainer>
        <InstructionsContainer>
          <TertiaryHeadingStyled>Instruktioner</TertiaryHeadingStyled>
          {recipe.instructions.map((instruction, index) => (
            <Instruction
              instruction={instruction}
              index={index + 1}
              key={instruction}
            />
          ))}
        </InstructionsContainer>
      </Container>
    </Wrapper>
  );
};
export default SingleRecipe;
