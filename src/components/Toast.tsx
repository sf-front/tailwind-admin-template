import { ComponentVariantType } from '@/types/components';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/*
  Interface
*/
export interface ToastProps {
  isOpen: boolean;
  title: string;
  autoHideDuration: number;
  className?: string;
  variant?: ComponentVariantType;
  onClose: () => void;
}

/*
  Style
*/
const fadeInUp = `
  @keyframes fadeInUp {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .animate-fadeInUp {
    animation: fadeInUp 0.2s ease-out;
  }
`;

const fadeOutDown = `
  @keyframes fadeOutDown {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .animate-fadeOutDown {
    animation: fadeOutDown 0.2s ease-out;
  }
`;

const Toast = ({ isOpen: isOpenTrigger, title, autoHideDuration, className, variant = 'primary', onClose }: ToastProps) => {
  // useState
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);

  // style
  const baseStyles = `fixed top-24 right-12  w-80`;
  const animateStyles = isOpen ? 'animate-fadeInUp' : 'animate-fadeOutDown';
  const containerClasses = classNames(baseStyles, animateStyles, className);

  const variantStyles = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    dark: 'bg-boxdark',
    gray: 'bg-form-strokedark',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
  };

  const messageBoxStyles = 'p-3 rounded-lg max-w-full mx-auto flex items-center justify-center w-full';
  const messageBoxClasses = classNames(messageBoxStyles, variantStyles[variant]);

  // useEffect
  useEffect(() => {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      document.body.appendChild(toastContainer);
    }
  }, []);

  useEffect(() => {
    if (isOpenTrigger) {
      setIsOpen(true);

      setTimeout(() => {
        setIsOpen(false);
        onClose();
      }, autoHideDuration);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenTrigger]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);

      return;
    }

    setTimeout(() => {
      setIsVisible(false);
    }, 180);
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  const toastElement = (
    <div className={containerClasses}>
      <style>{fadeInUp}</style>
      <style>{fadeOutDown}</style>
      <div className={messageBoxClasses}>
        <p className="text-white font-medium text-center">{title}</p>
      </div>
    </div>
  );

  const toastContainer = document.getElementById('toast-container');

  return toastContainer ? ReactDOM.createPortal(toastElement, toastContainer) : null;
};

export default Toast;
