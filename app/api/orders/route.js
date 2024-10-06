import { NextResponse } from 'next/server';

export async function POST() {
    // Return a static response for the order API
    return NextResponse.json({ message: 'Order endpoint' });
}

export async function GET() {
    // Return a static response for fetching orders
    return NextResponse.json([{ id: 1, item: 'Sample Order' }]);
}
