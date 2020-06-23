import React, { useEffect, useState } from "react";
import fetch from "./libs/fetch";
import GIFView from "./components/GIFView";
import FunkyHeader from "./components/FunkyHeader";
import FeedOption from "./components/FeedOption";
import "./App.css";

import { GIPHY_TRENDING_API, GIPHY_KEY } from "./config";

function App() {
  const [gifs, setGifs] = useState([]);
  // Set default gif load size to 10
  const [pageSize, setPageSize] = useState(10);
  // Initial offset
  const [offset, setOffset] = useState(0);

  const loadGifs = async (pageSize, offset) => {
    try {
      const data = await fetch(
        `${GIPHY_TRENDING_API}?api_key=${GIPHY_KEY}&limit=${pageSize}&offset=${offset}`
      );
      setGifs((prevData) => {
        return [...prevData, ...data.data];
      });
    } catch (error) {
      console.log("something bad happened", error);
    }
  };

  useEffect(() => {
    loadGifs(pageSize, offset);
  }, [offset, pageSize]);

  const loadMore = (evt) => {
    setOffset((prevOffset) => {
      return prevOffset + 1 * pageSize;
    });
  };

  const setFeedLimit = (limit) => {
    setPageSize(limit);
    // When a new page size load is set, reset the offset to 0
    setOffset(0);
  };

  return (
    <div className="App">
      <FunkyHeader />
      <FeedOption updateFeedLimit={setFeedLimit} />
      {gifs.length > 0
        ? gifs.map((item, index) => {
            return (
              <GIFView
                key={item.id}
                url={item.images.downsized.url}
                alt={item.title}
                width={item.images.width}
                height={item.images.height}
              />
            );
          })
        : ""}

      <button onClick={loadMore}>Load more</button>
    </div>
  );
}

export default App;
