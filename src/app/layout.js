import './globals.css';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata = {
  title: 'Minilemon Technology',
  description: 'Minilemon Technology Official Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
