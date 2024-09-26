// pages/api/submit.js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  if (!client.isConnected()) await client.connect();
  return client.db('databaseName'); // Replace 'databaseName' with your actual database name
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('tickets'); // Replace 'tickets' with your actual collection name
      const response = await collection.insertOne(req.body);
      res.status(201).json({ message: 'Data saved to MongoDB', data: response.ops[0] });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
