import { useEffect } from 'react';

export const useOutsideClick = (
  ref,
  setIsOpen
) => {
  /**if clicked on outside of element*/
  const handleClickOutside = (event) => {
    if (ref.current && !(ref.current).contains(event.target)) {
      setIsOpen(false);
    }
  };
  /** add and event listener for mouse down */
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};