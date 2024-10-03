import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, details } = req.body;

    if (!email || !details) {
      return res.status(400).json({ message: 'Invalid input' });
    }

    try {
      const client = await clientPromise;
      const db = client.db("form_submissions");
      const collection = db.collection("submissions");

      // Insert the form data into MongoDB
      const result = await collection.insertOne({ email, details, createdAt: new Date() });

      res.status(201).json({ message: 'Form submitted successfully', result });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'Failed to submit form' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
