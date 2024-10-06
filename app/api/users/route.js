import { NextResponse } from 'next/server';

export async function GET() {
    // Return a static response for fetching users
    return NextResponse.json([{ id: 1, name: 'Sample User' }]);
}

export async function POST() {
    // Return a static response for creating a user
    return NextResponse.json({ message: 'User created' });
}
