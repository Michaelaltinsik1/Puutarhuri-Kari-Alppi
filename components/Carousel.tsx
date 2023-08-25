import type { TouchEvent } from 'react';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import recipes from '@/utils/recipes.json';
import CircularButton from './minorComponents/CircularButton';
import RecipeCard from './RecipeCard';
import { devices } from '@/utils/devices';
import { colors } from '@/utils/colors';

import { SecondaryHeading } from '@/styles/styles';

const MINTOUCHMOVEMENT = 5;
const MOBILENROFREVIEWCARDSCONTAINER = 1;
const TABLETNROFREVIEWCARDSCONTAINER = 2;
const DESKTOPNROFREVIEWCARDSCONTAINER = 3;

const MOBILE_SCREEN_MAX = 768;
const TABLETSCREEN_SCREEN_MAX = 1200;

enum Devices {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

const ButtonWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
  min-width: max-content;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media (min-width: ${devices.tablet}) {
    margin-bottom: 56px;
    flex-direction: row;
  }
  /* @media (min-width: ${devices.desktopLarge}) {
    margin-top: 128px;
  } */
`;

const ButtonContainer = styled.div`
  display: none;
  @media (min-width: ${devices.tablet}) {
    display: flex;
  }
`;

const OuterDiv = styled.div`
  max-width: 100%;
  @media (min-width: ${devices.tablet}) {
    max-width: 90%;
    margin: 0 auto;
  }
  overflow: hidden;
`;
const InnerDiv = styled.div<{
  $isSwiping: boolean;
}>`
  display: flex;

  touch-action: ${(props) => (props.$isSwiping ? 'pan-x' : 'pan-y')};
`;

const ProgressBarWrapper = styled.div`
  width: calc(100% - 32px);
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 32px;
  min-height: 4px;
  border-radius: 12px;
  background-color: ${colors.gray_50};
  @media (min-width: ${devices.tablet}) {
    margin-left: auto;
    margin-right: auto;
    width: calc(90% - 32px);
  }
`;
const ProgressBarContainer = styled.div<{
  $value: number;
}>`
  width: 100%;
  min-height: 4px;
  border: 4px;
  background-color: ${colors.progressBar};
  ${(props) =>
    props.$value && {
      width: `calc(${props.$value}%)`,
    }}
`;
const Carousel = () => {
  const [currentXPosition, setCurrentXPosition] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const [touchPos, setTouchPos] = useState<number | null>(null);
  const [touchPosY, setTouchPosY] = useState<number | null>(null);
  const [nrOfElementsToShifts, setNrOfElementsToShifts] = useState<number>(1);
  const [nrOfContainers, setNrOfContainers] = useState<number>(
    Math.ceil(recipes.length / nrOfElementsToShifts)
  );
  const [isShiftAdjusted, setIsShiftAdjusted] = useState<boolean>(false);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const currDeviceType = useRef<Devices | null>(null);

  useEffect(() => {
    function handleResize() {
      const currScreenWidth = getWindowWidth();
      setNrOfElementsToShifts(calculateNrOfShifts(currScreenWidth));
      let currDevice = findDeviceType(currScreenWidth);
      if (currDeviceType.current !== currDevice) {
        currDeviceType.current = currDevice;
        setIndex(0);
        setCurrentXPosition(0);
        setIsShiftAdjusted(false);
      }
    }
    if (window) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setNrOfContainers(Math.ceil(recipes.length / nrOfElementsToShifts));
  }, [nrOfElementsToShifts]);

  useEffect(() => {
    if (window) {
      const screenWidth = getWindowWidth();
      let currDevice = findDeviceType(screenWidth);
      if (currDeviceType.current !== currDevice) {
        currDeviceType.current = currDevice;
      }
      setNrOfElementsToShifts(calculateNrOfShifts(screenWidth));
    } else {
      setNrOfElementsToShifts(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function findDeviceType(screenWidth: number): Devices {
    if (screenWidth <= MOBILE_SCREEN_MAX) {
      return Devices.MOBILE;
    } else if (screenWidth <= TABLETSCREEN_SCREEN_MAX) {
      return Devices.TABLET;
    } else {
      return Devices.DESKTOP;
    }
  }

  function calculateNrOfShifts(screenWidth: number): number {
    if (screenWidth >= 0 && screenWidth <= MOBILE_SCREEN_MAX) {
      return MOBILENROFREVIEWCARDSCONTAINER;
    } else if (
      screenWidth > MOBILE_SCREEN_MAX &&
      screenWidth <= TABLETSCREEN_SCREEN_MAX
    ) {
      return TABLETNROFREVIEWCARDSCONTAINER;
    } else {
      return DESKTOPNROFREVIEWCARDSCONTAINER;
    }
  }

  function getWindowWidth() {
    if (window) return window.innerWidth;
    else return 0;
  }

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    const touchDownY = e.touches[0].clientY;
    setTouchPos(touchDown);
    setTouchPosY(touchDownY);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPos;
    const touchDownY = touchPosY;
    if (touchDown === null || touchDownY === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const currentTouchY = e.touches[0].clientY;
    const diff = touchDown - currentTouch;
    const diffx = Math.abs(touchDown - currentTouch);
    const diffY = Math.abs(touchDownY - currentTouchY);
    if (diffY > diffx) {
      setIsSwiping(false);
    } else {
      setIsSwiping(true);
      if (diff > MINTOUCHMOVEMENT) {
        shiftForward();
      }
      if (diff < -MINTOUCHMOVEMENT) {
        shiftBackWards();
      }
    }

    setTouchPos(null);
    setTouchPosY(null);
  };

  function shiftForward() {
    if (recipes.length % nrOfElementsToShifts === 0) {
      if (index + 1 < nrOfContainers) {
        setCurrentXPosition((prevPos) => prevPos + 100);
        setIndex((currIndex) => currIndex + 1);
      }
    } else {
      if (index === nrOfContainers - 2 && !isShiftAdjusted) {
        setIsShiftAdjusted(true);
        let procentage =
          ((recipes.length % nrOfElementsToShifts) / nrOfElementsToShifts) *
          100;
        setCurrentXPosition((prevPos) => prevPos + procentage);

        setIndex((currIndex) => currIndex + 1);
      } else if (index + 1 < nrOfContainers) {
        setCurrentXPosition((prevPos) => prevPos + 100);
        setIndex((currIndex) => currIndex + 1);
      }
    }
  }

  function shiftBackWards() {
    if (recipes.length % nrOfElementsToShifts === 0) {
      if (index > 0) {
        setCurrentXPosition((prevPos) => prevPos - 100);
        setIndex((currIndex) => currIndex - 1);
      }
    } else {
      if (index === 1) {
        setCurrentXPosition(0);
        setIndex((currIndex) => currIndex - 1);
        setIsShiftAdjusted(false);
      } else if (index > 1) {
        setCurrentXPosition((prevPos) => prevPos - 100);
        setIndex((currIndex) => currIndex - 1);
      }
    }
  }

  useEffect(() => {
    const temp = ((index + 1) / nrOfContainers) * 100;
    setValue(temp);
  }, [index, nrOfContainers]);

  return (
    <>
      <ButtonWrapper>
        <SecondaryHeading>Recipes</SecondaryHeading>
        <ButtonContainer>
          <CircularButton direction="backward" modifyIndex={shiftBackWards} />
          <CircularButton direction="forward" modifyIndex={shiftForward} />
        </ButtonContainer>
      </ButtonWrapper>
      {/* //outter div */}
      <OuterDiv>
        {/* inner div */}
        <InnerDiv
          $isSwiping={isSwiping}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          style={{
            transition: 'transform 1s',
            transform: `translateX(${-currentXPosition}%)`,
          }}
        >
          {recipes.map((data) => (
            <RecipeCard
              key={data.id}
              title={data.name}
              description={data.description}
              imgUrl={data.img}
            />
          ))}
        </InnerDiv>
      </OuterDiv>
      <ProgressBarWrapper>
        <ProgressBarContainer $value={value} />
      </ProgressBarWrapper>
    </>
  );
};
export default Carousel;
