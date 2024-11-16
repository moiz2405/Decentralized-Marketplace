import Providers from './Providers'; // Import the Providers component
import NavbarWrapper from './NavbarWrapper'; // Navbar
import '../styles/globals.css';

export const metadata = {
  title: 'Decentralized Marketplace',
  description: 'A decentralized marketplace built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Providers>
          <NavbarWrapper />
          <div className="scrollable-container">
            <main className="main-content">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
