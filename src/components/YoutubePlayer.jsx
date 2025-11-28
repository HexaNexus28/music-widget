// src/components/YouTubePlayer.jsx - Version simplifiée
import React, { useState } from "react";

const YouTubePlayer = () => {
  const [videoId, setVideoId] = useState("dQw4w9WgXcQ");

  const handleSearch = (e) => {
    e.preventDefault();
    const newVideoId = prompt("Entrez l'ID YouTube de la vidéo :");
    if (newVideoId) setVideoId(newVideoId);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-lg max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Lecteur YouTube</h2>

      <div className="w-full max-w-lg mb-4 bg-white rounded-lg overflow-hidden shadow-md">
        <iframe
          width="640"
          height="390"
          src={`https://www.youtube.com/embed/${videoId}?origin=https://www.youtube.com`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>

      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Changer de vidéo
      </button>
    </div>
  );
};

export default YouTubePlayer;
