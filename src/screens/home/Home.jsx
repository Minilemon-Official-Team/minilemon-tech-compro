'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import HomeDesktop from './Home.desktop';
import HomeMobile from './Home.mobile';

export default function HomePage() {
  const isMobile = useMediaQuery('(max-width: 1000px)');
  return isMobile ? <HomeMobile /> : <HomeDesktop />;
}
