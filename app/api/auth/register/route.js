import { NextResponse } from 'next/server';

export async function POST() {
    // Return a static response for the registration API
    return NextResponse.json({ message: 'Registration endpoint' });
}
