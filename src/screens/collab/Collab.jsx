'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import CollabDesktop from './Collab.desktop';
import CollabMobile from './Collab.mobile';

export default function CollabPage() {
  const isMobile = useMediaQuery('(max-width: 1000px)');
  return isMobile ? <CollabMobile /> : <CollabDesktop />;
}
