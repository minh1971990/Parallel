import { useEffect, useState } from 'react';

interface ReleaseNote {
  _id: string;
  version: string;
  title: string;
  date: string;
  author: string;
  content: {
    features: string[];
    bugfixes: string[];
    improvements: string[];
  };
}

export default function ReleaseNotes() {
  const [notes, setNotes] = useState<ReleaseNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const cached = localStorage.getItem('releaseNotes');
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 5 * 60 * 1000) {
            setNotes(data);
            setLoading(false);
            return;
          }
        }

        const response = await fetch('/api/release-notes', {
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });

        if (!response.ok) throw new Error('Failed to fetch release notes');
        const data = await response.json();
        
        localStorage.setItem('releaseNotes', JSON.stringify({
          data,
          timestamp: Date.now()
        }));

        setNotes(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching release notes:', error);
        setError('Failed to load release notes');
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const toggleNote = (noteId: string) => {
    setExpandedNoteId(expandedNoteId === noteId ? null : noteId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#66FCF1]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1F2833] py-12" id="release-notes">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-[#66FCF1] mb-8 text-center font-montserrat tracking-wider">
          RELEASE NOTES
        </h1>
        <div className="space-y-4 max-w-4xl mx-auto">
          {notes.map((note) => (
            <div key={note._id} className="card bg-[#0B0C10] border-2 border-[#66FCF1]/10 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleNote(note._id)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-[#1F2833] transition-colors duration-150"
              >
                <div className="flex items-center space-x-4">
                  <h2 className="text-xl font-semibold text-[#C5C6C7] font-montserrat">{note.title}</h2>
                  <span className="text-sm bg-[#45A29E] text-[#0B0C10] px-3 py-1 rounded-full font-montserrat">
                    {note.version}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 text-[#66FCF1] ${
                    expandedNoteId === note._id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {expandedNoteId === note._id && (
                <div className="p-6 border-t border-[#66FCF1]/10 bg-[#0B0C10]">
                  <div className="text-sm text-[#C5C6C7] mb-6 font-montserrat">
                    <span>{note.author} • </span>
                    <span>{new Date(note.date).toLocaleDateString()}</span>
                  </div>
                  
                  {note.content.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-medium mb-3 text-[#66FCF1] font-montserrat">New Features:</h3>
                      <ul className="space-y-2">
                        {note.content.features.map((feature, index) => (
                          <li key={index} className="text-[#C5C6C7] flex items-start">
                            <span className="text-[#45A29E] mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {note.content.bugfixes.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-medium mb-3 text-[#66FCF1] font-montserrat">Bug Fixes:</h3>
                      <ul className="space-y-2">
                        {note.content.bugfixes.map((bugfix, index) => (
                          <li key={index} className="text-[#C5C6C7] flex items-start">
                            <span className="text-[#45A29E] mr-2">•</span>
                            {bugfix}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {note.content.improvements.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-medium mb-3 text-[#66FCF1] font-montserrat">Improvements:</h3>
                      <ul className="space-y-2">
                        {note.content.improvements.map((improvement, index) => (
                          <li key={index} className="text-[#C5C6C7] flex items-start">
                            <span className="text-[#45A29E] mr-2">•</span>
                            {improvement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap');

        .card {
          background: rgba(11, 12, 16, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
}