import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const shortenUrl = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/url/shorten',
        { originalUrl: url },
        { headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` } }
      );
      setShortenedUrl(response.data.shortUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Dashboard</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <button
            onClick={shortenUrl}
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Shorten URL
          </button>
        </div>
        {shortenedUrl && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-md">
            <p className="text-green-600">
              Shortened URL: 
              <a
                href={shortenedUrl}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {shortenedUrl}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
