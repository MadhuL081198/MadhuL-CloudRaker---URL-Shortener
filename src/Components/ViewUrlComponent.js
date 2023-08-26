import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewUrlComponent = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrlAndSetUrl = async () => {
      const result = await axios.get('http://localhost:3333/all');
      setUrls(result.data);
    };
    fetchUrlAndSetUrl();
  }, [urls]);

  return (
    <div className="w-full md:w-3/4 lg:w-5/6 mx-auto">
      <table className="w-full bg-white shadow-md rounded">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">Original Url</th>
            <th className="py-2 px-4">Short Url</th>
            <th className="py-2 px-4">Click Count</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, idx) => (
            <tr key={idx} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">{url.origUrl}</td>
              <td className="py-2 px-4">
                <a href={`${url.shortUrl}`} className="text-blue-500 hover:underline">
                  {url.shortUrl}
                </a>
              </td>
              <td className="py-2 px-4">{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUrlComponent;
