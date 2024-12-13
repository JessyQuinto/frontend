import React, { useState } from "react";
import { analyzeURL } from "../services/apiService";

const URLAnalyzer: React.FC = () => {
  const [url, setURL] = useState<string>("");
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResults(null);

    try {
      const data = await analyzeURL(url);
      setResults(data);
    } catch (err) {
      console.error(err);
      setError("Error analyzing the URL");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Accessibility Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setURL(e.target.value)}
          placeholder="Enter URL"
          style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Analyze
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {results && (
        <div>
          <h2>Results</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default URLAnalyzer;
