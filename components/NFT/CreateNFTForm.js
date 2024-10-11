import { useState } from 'react';

const CreateNFTForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [attributes, setAttributes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const attributesArray = attributes.split(',').map(attr => {
            const [trait_type, value] = attr.split(':');
            return { trait_type: trait_type.trim(), value: value.trim() };
        });

        const response = await fetch('/api/nfts/create-nft', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                description,
                image,
                attributes: attributesArray,
            }),
        });

        const data = await response.json();
        console.log(data); // Display or handle the generated NFT metadata
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
            <input type="text" placeholder="Attributes (trait_type:value, ...)" value={attributes} onChange={(e) => setAttributes(e.target.value)} required />
            <button type="submit">Create NFT</button>
        </form>
    );
};

export default CreateNFTForm;
