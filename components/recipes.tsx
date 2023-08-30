import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import products from '../utils/products.json';
import { SecondaryHeading } from '@/styles/styles';
import PriceTag from './minorComponents/priceTag';
import { devices } from '@/utils/devices';
import Carousel from './Carousel';
import { useState } from 'react';
import SingleRecipe from './SingleRecipe';
import Overlay from './Overlay';
import { Recipe } from './RecipeCard';
interface PricesProps {
  headerHeight: number;
}
const DivStyled = styled.div<{ $headerHeight?: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
  background-color: ${colors.green};
  padding: 24px 16px;
  @media (min-width: ${devices.tablet}) {
    padding: 24px 40px;
  }
  @media (min-width: ${devices.laptop}) {
    padding: 40px 80px;
  }
  @media (min-width: ${devices.desktop}) {
    align-items: center;
    padding: 64px 180px;
  }
`;
const Container = styled.div`
  position: relative;
`;
const Recipes = ({ headerHeight }: PricesProps) => {
  const [showSingleRecipe, setShowSingleRecipe] = useState(false);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const toggleSingleRecipeView = (recipe: Recipe) => {
    document.body.classList.add('disable-scroll');
    setShowSingleRecipe((currState) => !currState);
    setRecipe(recipe);
  };
  const closeOverlay = () => {
    document.body.classList.remove('disable-scroll');
    setShowSingleRecipe(false);
  };

  return (
    <DivStyled $headerHeight={headerHeight - 1} id="recipes">
      <Container>
        <Carousel toggleSingleRecipeView={toggleSingleRecipeView} />
      </Container>

      {showSingleRecipe && recipe && (
        // <SingleRecipe closeOverlay={closeOverlay} recipe={recipe} />
        <Overlay onClose={closeOverlay}>
          <SingleRecipe recipe={recipe} closeOverlay={closeOverlay} />
        </Overlay>
      )}
    </DivStyled>
  );
};

export default Recipes;
