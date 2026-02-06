'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import NavbarDesktop from './Navbar.desktop';
import NavbarMobile from './Navbar.mobile';

export default function Navbar() {
  const isMobile = useMediaQuery('(max-width: 1000px)');
  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
}
