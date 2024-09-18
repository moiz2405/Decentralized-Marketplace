import ProductDetail from '../../../components/product/ProductDetail';

export default function ProductDetailPage({ params }) {
  const { id } = params;

  return (
    <main>
      <h1>Product Details</h1>
      <ProductDetail productId={id} />
    </main>
  );
}
