import Container from '@/components/Layout/Container';
import Portal from '@/components/Layout/Portal';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Container>
        <Component {...pageProps} />
      </Container>
      <Portal></Portal>
    </RecoilRoot>
  );
}
