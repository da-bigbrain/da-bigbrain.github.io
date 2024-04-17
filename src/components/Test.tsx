"use client";
import React, { useState, useEffect } from "react";
import * as dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

type ContentTypefulResponse = {
  items: Array<{
    fields: {
      title: string;
    };
  }>;
};

const YourComponent = () => {
  const [data, setData] = useState<ContentTypefulResponse | null>(null);
  useEffect(() => {
    const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
    const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = (await response.json()) as ContentTypefulResponse;
        setData(json);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  if (!data || data.items.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render the title of the first item */}
      <h1>{data.items[0].fields.title}</h1>
    </div>
  );
};

export default YourComponent;
