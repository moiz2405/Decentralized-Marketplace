import { NextResponse } from 'next/server';
import { create } from 'ipfs-http-client';

const client = create('https://ipfs.infura.io:5001/api/v0');

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { imageFile, metadata } = data;

    // Upload image to IPFS
    const addedImage = await client.add(imageFile);
    const imageURL = `https://ipfs.infura.io/ipfs/${addedImage.path}`;

    // Upload metadata to IPFS
    const metadataWithImage = {
      ...metadata,
      image: imageURL,
    };
    const addedMetadata = await client.add(JSON.stringify(metadataWithImage));
    const metadataURL = `https://ipfs.infura.io/ipfs/${addedMetadata.path}`;

    return NextResponse.json({ metadataURL });
  } catch (error) {
    return NextResponse.json({ error: 'IPFS upload failed' });
  }
}
