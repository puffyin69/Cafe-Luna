"use client";

import React from "react";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#2D0B10] px-4">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-6 text-lg">{error?.message || "An unexpected error occurred."}</p>
      <button
        onClick={() => reset()}
        className="bg-[#FE975C] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#FFD700] hover:text-[#2D0B10] transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
