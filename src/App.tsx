import { useState, useEffect } from 'react';
import StepOntoYourStage from './Step';
import CosmoIndiaLiteraryCouncil from './Home';
// Simple hash-based router
function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Route to component mapping
  if (currentPath === '/' || currentPath === '') {
    return <CosmoIndiaLiteraryCouncil/>
  } else if (currentPath === '/step') {
    return <StepOntoYourStage />;
  } else {
    return <CosmoIndiaLiteraryCouncil />; // Default fallback
  }
}


export default function App() {
  return <Router />;
}