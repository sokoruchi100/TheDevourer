import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import Header from "./Header";

function Chapter() {
  const { chapterId, chapterTitle } = useParams();
  const [chapterContent, setChapterContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadChapterContent = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `/TheDevourer/chapters/chapter${chapterId}.txt`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch chapter: ${response.status}`);
        }
        const text = await response.text();
        const formattedText = marked.parse(text);
        setChapterContent(formattedText);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadChapterContent();
  }, [chapterId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading the chapter: {error}</div>;

  return (
    <div className="h-full bg-primary">
      <Header></Header>
      <div className="container mx-auto px-4 py-8 text-tertiary font-text flex flex-col">
        <h1 className="text-5xl font-bold text-center mb-4">
          Chapter {chapterId}
        </h1>
        <div
          className="mt-4 text-lg w-3/6 text-justify self-center"
          dangerouslySetInnerHTML={{ __html: chapterContent }}
        ></div>
      </div>
    </div>
  );
}

export default Chapter;
