import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'tuterio - Interactive Tutorial Builder',
  description: 'Create interactive, embeddable tutorials that convert and retain students.',
  keywords: 'tuterio, fitness tutorials, interactive learning, content creation, tutorial builder, fitness trainer platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-fluent-darkBg1 text-fluent-darkText1 min-h-screen`}>
        {children}
      </body>
    </html>
  );
} 