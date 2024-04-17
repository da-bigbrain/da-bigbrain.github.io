"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Asset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
    };
  };
}

interface EntryFields {
  title: string;
  img: Asset;
  category?: string;
  shortDescription?: string;
  viewDetails?: string;
}

interface ContentTypefulResponse {
  items: Array<{
    fields: EntryFields;
  }>;
  includes: {
    Asset: Asset[];
  };
}

const Portfolio: React.FC = () => {
  const [showCard, setShowCard] = useState<string>("all");
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
        const json: ContentTypefulResponse = await response.json();
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

  let portfolioCards = data.items.map((item, index) => {
    const asset = data.includes.Asset.find(
      (asset) => asset.sys.id === item.fields.img.sys.id
    );

    if (!asset) return null;

    const fullImageUrl = asset.fields.file.url.startsWith("http")
      ? asset.fields.file.url
      : `https:${asset.fields.file.url}`;

    return (
      <PortfolioCard
        key={index}
        ImageHref={fullImageUrl}
        category={item.fields.category || "Unknown"}
        title={item.fields.title}
        shortDescription={item.fields.shortDescription || ""}
        button="View Details"
        buttonHref={item.fields.viewDetails || "#"}
        showCard={showCard}
      />
    );
  });

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  return (
    // JSX content
    <>
      <section
        id="Project"
        className="pt-10 pb-12 lg:pt-[20px] lg:pb-[90px] dark:bg-dark min-lg:h-screen"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                {/* <span className="text-primary mb-2 block text-lg font-semibold">
                Portfolio
              </span> */}
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6 mx-3">
                  Here are my few recent projects.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`border-2r rounded-full p-3 text-base shadow focus:outline-none cursor-pointer ${
                      showCard === "all"
                        ? "activeClasses bg-white text-black dark:bg-gray-300 dark:text-black"
                        : "inactiveClasses bg-black text-white  dark:bg-gray-700 dark:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("Robotics")}
                    className={`border-2r rounded-full p-3 text-base shadow focus:outline-none cursor-pointer ${
                      showCard === "Robotics"
                        ? "activeClasses bg-white text-black dark:bg-gray-300 dark:text-black"
                        : "inactiveClasses bg-black text-white  dark:bg-gray-700 dark:text-white"
                    }`}
                  >
                    Robotics
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("IoT-Hardware")}
                    className={`border-2r rounded-full p-3 text-base shadow focus:outline-none cursor-pointer 
                    ${
                      showCard === "IoT-Hardware"
                        ? "activeClasses bg-white text-black dark:bg-gray-300 dark:text-black"
                        : "inactiveClasses bg-black text-white  dark:bg-gray-700 dark:text-white"
                    }`}
                  >
                    IoT-Hardware
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap">{portfolioCards}</div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

interface PortfolioCardProps {
  showCard: string;
  category: string;
  ImageHref: string;
  title: string;
  shortDescription: string;
  button: string;
  buttonHref: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  showCard,
  category,
  ImageHref,
  title,
  shortDescription,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category ? "block" : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px] border-2">
            <Image
              src={ImageHref}
              width={500}
              height={500}
              alt={"Photo"}
            ></Image>
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark border-2 border-gray-50">
            <span className="mb-2 block text-sm font-medium">
              {shortDescription}
            </span>
            <h3 className="text-dark mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              target="_blank"
              className="text-body-color dark:text-dark-6 hover:border-gray-900 hover:bg-gray-300 inline-block rounded-full border-2  dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-gray-900"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
