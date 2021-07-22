import { useEffect } from 'react';

export const useDisableBodyScroll = (open) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('y-disable');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('y-disable');
    }
  }, [open]);
};

// source https://stackoverflow.com/questions/54989513/react-prevent-scroll-when-modal-is-open