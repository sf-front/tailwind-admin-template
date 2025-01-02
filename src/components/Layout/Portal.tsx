import { toastStateInitValue, useToastState } from '@/recoil/toastState';
import Toast from '../Toast';

/*
  Component
*/
const Portal = () => {
  // recoil
  const [{ isOpen: toastIsOpen, title: toastTitle, autoHideDuration = 3000, variant }, setToastState] = useToastState();

  // handler
  const onClose = () => {
    setToastState(toastStateInitValue);
  };

  return <Toast isOpen={toastIsOpen} title={toastTitle} autoHideDuration={autoHideDuration} variant={variant} onClose={onClose} />;
};

export default Portal;
