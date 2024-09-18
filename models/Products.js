import connectToDatabase from '../../lib/db';
import Product from '../../models/Product';

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      try {
        const products = await Product.find();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
      }
      break;
    case 'POST':
      try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
