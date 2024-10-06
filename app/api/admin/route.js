import { NextResponse } from 'next/server';

export async function POST(req) {
    // Just returning a static response for the login API
    return NextResponse.json({ message: 'Login successful' });
}
