import React, { useState } from "react";

const YouTubePlayer = () => {
  const [videoId, setVideoId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const extractVideoId = (url) => {
    try {
      const parsed = new URL(
        url.includes("http") ? url : `https://www.youtube.com/watch?v=${url}`
      );
      if (
        parsed.hostname.includes("youtube.com") ||
        parsed.hostname.includes("youtu.be")
      ) {
        return parsed.searchParams.get("v") || parsed.pathname.substring(1);
      }
      return url.trim();
    } catch {
      return null;
    }
  };

  const handleChangeVideo = () => {
    setIsLoading(true);
    setError(null);
    const id = extractVideoId(inputValue);
    if (!id) {
      setError("Lien ou ID YouTube invalide.");
      setIsLoading(false);
      return;
    }
    setVideoId(id);
    setInputValue("");
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleChangeVideo();
  };

  return (
    <div className="flex flex-col items-center p-8 bg-linear-to-br from-purple-50 to-indigo-50 rounded-xl shadow-sm max-w-3xl mx-auto my-12 border border-purple-100">
      {}
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-indigo-700">
        Music Widget
      </h2>

      {}
      <div className="w-full max-w-2xl mb-6 bg-white/30 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-purple-200">
        {isLoading ? (
          <div className="flex items-center justify-center h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
          </div>
        ) : videoId ? (
          <iframe
            key={videoId}
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px] text-purple-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mb-4 text-purple-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <p className="text-center">Collez un lien YouTube pour commencer</p>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Lien YouTube ou ID (ex: dQw4w9WgXcQ)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-4 py-3 text-gray-800 bg-white/70 backdrop-blur-sm rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-300 transition-all"
          />
          {error && (
            <p className="absolute -bottom-5 text-xs text-red-500">{error}</p>
          )}
        </div>
        <button
          onClick={handleChangeVideo}
          disabled={isLoading || !inputValue.trim()}
          className={`px-6 py-3 rounded-lg font-medium text-white transition-all ${
            isLoading || !inputValue.trim()
              ? "bg-purple-300 cursor-not-allowed"
              : "bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md transform hover:scale-105"
          }`}
        >
          {isLoading ? "Chargement..." : "Lire"}
        </button>
      </div>

      {}
      <p className="mt-4 text-xs text-purple-600">
        Compatible avec les liens YouTube et les IDs de vidéo.
      </p>
    </div>
  );
};

export default YouTubePlayer;
