// /app/page.js
import ProductList from '../components/product/ProductList';
import '../styles/globals.css';

export const metadata = {
  title: 'Marketplace',
  description: 'Welcome to the Marketplace',
};

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to the Marketplace</h1>
      {/* <ProductList /> */}
    </main>
  );
}
