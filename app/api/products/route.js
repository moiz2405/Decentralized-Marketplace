import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100, category: 'Electronics' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 200, category: 'Books' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 300, category: 'Clothing' },
  { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 400, category: 'Home & Kitchen' },
  { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 500, category: 'Beauty' },
  { id: 6, name: 'Product 6', description: 'Description of Product 6', price: 600, category: 'Sports' },
];

export async function GET() {
  return NextResponse.json(products);
}
