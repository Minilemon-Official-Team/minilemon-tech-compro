'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import FooterDesktop from './Footer.desktop';
import FooterMobile from './Footer.mobile';

export default function Footer() {
  const isMobile = useMediaQuery('(max-width: 1000px)');
  return isMobile ? <FooterMobile /> : <FooterDesktop />;
}
