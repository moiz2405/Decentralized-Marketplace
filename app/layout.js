// app/layout.js

import NavbarWrapper from './NavbarWrapper'; // Use the Navbar wrapper component
import { WalletProvider } from '../context/WalletContext'; // Import the WalletProvider
import '../styles/globals.css';

export const metadata = {
  title: 'Decentralized Marketplace',
  description: 'A decentralized marketplace built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarWrapper /> {/* Use the NavbarWrapper to include the Navbar */}
        <WalletProvider> {/* Wrap children with WalletProvider */}
          <main className="main-content"> {/* Apply padding to avoid overlap */}
            {children}
          </main>
        </WalletProvider>
      </body>
    </html>
  );
}
