import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((hashName) => {
    if (hashName === "blog") {
      return window.scrollTo(0, 0);
    }
    let parentRect = document.body.getBoundingClientRect();
    let element = document.getElementById(hashName);
    if (element) {
      let rect = element.getBoundingClientRect();
      let offset = rect.top - parentRect.top - 20;
      window.scrollTo(0, offset);
    }
  }, []);

  return scrollTo;
};