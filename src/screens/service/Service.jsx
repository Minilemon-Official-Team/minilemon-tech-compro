'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import ServiceDesktop from './Service.desktop';
import ServiceMobile from './Service.mobile';

export default function ServicePage() {
  const isMobile = useMediaQuery('(max-width: 1000px)');
  return isMobile ? <ServiceMobile /> : <ServiceDesktop />;
}
