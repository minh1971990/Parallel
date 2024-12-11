import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { version, title, author, content } = req.body;

    if (!version || !title || !author || !content) {
      return res.status(400).json({ message: 'Invalid input' });
    }

    try {
      const client = await clientPromise;
      const db = client.db("Release_notes");
      const collection = db.collection("Notes");
      
      const releaseNote = {
        version,
        title,
        date: new Date(),
        author,
        content: {
          features: content.features || [],
          bugfixes: content.bugfixes || [],
          improvements: content.improvements || []
        }
      };

      const result = await collection.insertOne(releaseNote);
      res.status(201).json({ message: 'Release note created successfully', result });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'Failed to create release note' });
    }
  } else if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db("Release_notes");
      const collection = db.collection("Notes");
      
      const notes = await collection.find({})
        .sort({ date: -1 })
        .project({
          version: 1,
          title: 1,
          date: 1,
          author: 1,
          'content.features': 1,
          'content.bugfixes': 1,
          'content.improvements': 1
        })
        .toArray();
        
      res.status(200).json(notes);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Failed to fetch release notes' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
