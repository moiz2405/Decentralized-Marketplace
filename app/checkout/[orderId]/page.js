// /app/checkout/[orderId]/page.js
// import Checkout from '../../../components/checkout/Checkout';

export default function CheckoutPage({ params }) {
  const { orderId } = params;
  return (
    <main>
      <h1>Checkout</h1>
      {/* <Checkout orderId={orderId} /> */}
    </main>
  );
}
