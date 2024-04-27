import { Inter, Amarante, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const amarante = Amarante({ weight: '400', subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
