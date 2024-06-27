import { ComponentVariantType } from '@/types/components';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export interface ToastStateProps {
  isOpen: boolean;
  title: string;
  autoHideDuration?: number;
  variant?: ComponentVariantType;
}

export const toastStateInitValue = {
  isOpen: false,
  title: '',
};

const toastState = atom<ToastStateProps>({
  key: 'toastState',
  default: toastStateInitValue,
});

export const useToastState = () => useRecoilState(toastState);
export const useToastValue = () => useRecoilValue(toastState);
export const useToastSetState = () => useSetRecoilState(toastState);
