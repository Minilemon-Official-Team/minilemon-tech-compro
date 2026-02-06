'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import ProductDesktop from './Product.desktop';
import ProductMobile from './Product.mobile';

export default function ProductPage() {
  const isMobile = useMediaQuery('(max-width: 1000px)');
  return isMobile ? <ProductMobile /> : <ProductDesktop />;
}
