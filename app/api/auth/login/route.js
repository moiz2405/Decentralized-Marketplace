import { NextResponse } from 'next/server';

export async function POST() {
    // Return a static response for the login API
    return NextResponse.json({ message: 'Login endpoint' });
}
