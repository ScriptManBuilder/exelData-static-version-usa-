import React from 'react';
import {
  LoaderContainer,
  LoaderContent,
  Logo,
  Tagline,
  SpinnerContainer,
  Spinner,
  ProgressSection,
  ProgressBarContainer,
  ProgressBar,
  ProgressText,
  LoadingText
} from '../styles/components/InitialLoaderStyles';

interface InitialLoaderProps {
  progress: number;
}

const InitialLoader: React.FC<InitialLoaderProps> = ({ progress }) => {
  const isComplete = progress >= 100;

  // Dynamic loading messages based on progress
  const getLoadingMessage = () => {
    if (progress < 20) return 'Initializing data visualization platform...';
    if (progress < 40) return 'Loading charts, graphs and visualization tools...';
    if (progress < 60) return 'Preparing your interactive dashboard environment...';
    if (progress < 80) return 'Setting up your data analysis workspace...';
    if (progress < 95) return 'Almost ready to start your data visualization journey...';
    return 'Welcome to your data visualization education platform!';
  };

  return (
    <LoaderContainer $isComplete={isComplete}>
      <LoaderContent>
        <Logo>DATA VISUALIZATION COURSES</Logo>
        <Tagline>Master the Art of Visual Data </Tagline>
        
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
        
        <ProgressSection>
          <ProgressBarContainer>
            <ProgressBar $progress={progress} />
          </ProgressBarContainer>
          <ProgressText>{Math.round(progress)}%</ProgressText>
        </ProgressSection>
        
        <LoadingText>
          {getLoadingMessage()}
        </LoadingText>
      </LoaderContent>
    </LoaderContainer>
  );
};

export default InitialLoader;