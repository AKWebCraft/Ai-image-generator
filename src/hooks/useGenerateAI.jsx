import { useState } from "react";

const useGenerateAI = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const response = await fetch("/api/generate-ai-art", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }

      const data = await response.json();
      setImageUrl(data.image_url);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setPrompt("");
    }
  };

  return {
    prompt,
    setPrompt,
    imageUrl,
    setImageUrl,
    setLoading,
    loading,
    error,
    handleGenerate,
  };
};

export default useGenerateAI;
