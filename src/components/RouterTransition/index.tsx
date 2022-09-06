import React, { useEffect, useState } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import { NavigationProgress, startNavigationProgress } from '@mantine/nprogress';

interface RouterProps {
  children: React.ReactNode;
}

const RouterTransition = ({ children }: RouterProps): JSX.Element => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc('');
    }

    startNavigationProgress();
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);


  return (
    <>
      {progress && <NavigationProgress />}
      <Routes>{children}</Routes>
    </>
  );
};

export default RouterTransition;
