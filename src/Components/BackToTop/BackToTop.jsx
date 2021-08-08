import React, { useState, useEffect } from 'react';
import { TopSelected } from '../../Assets/topSelected';
import { TopUnSelected } from '../../Assets/topUnSelected';
import {BackToTopButton} from './BackToTop.style';

export const BackToTop = (props) => {
  let [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BackToTopButton isScrolled={isScrolled}>
      { isScrolled ? (<TopSelected onIconClick={handleClick} />) : (<TopUnSelected />) }
    </BackToTopButton>
  );
};
