import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';

export interface SectionProps {
  children?: React.ReactNode;
  intersectionCallback: () => void;
  id: string;
}

const Section: React.FC<SectionProps> = ({children, intersectionCallback, id}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [ entry ] = entries;
      if (entry.isIntersecting) intersectionCallback();
    }, {threshold: 0.3});
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    }
  }, []);

  return (
    <Box component={'section'} id={id} sx={{ minHeight: '100vh', height: 'auto' , position: 'relative', overflowY: 'auto' }} ref={sectionRef}>
      {children}
    </Box>
  )
};

export default Section
