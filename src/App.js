import React, { useEffect, useState } from "react";
import fetch from "./libs/fetch";
import GIFView from "./components/GIFView";
import FunkyHeader from "./components/FunkyHeader";
import FeedOption from "./components/FeedOption";
import styles from "./App.module.css";

import { GIPHY_TRENDING_API, GIPHY_KEY } from "./config";

function App() {
  const [gifs, setGifs] = useState([]);
  // Set default gif load size to 10
  const [pageSize, setPageSize] = useState(10);
  // Initial offset
  const [offset, setOffset] = useState(0);
  // Set error
  const [errorMessage, setErrorMessage] = useState();

  const loadGifs = async (pageSize, offset) => {
    try {
      const data = await fetch(
        `${GIPHY_TRENDING_API}?api_key=${GIPHY_KEY}&limit=${pageSize}&offset=${offset}`
      );
      setGifs((prevData) => {
        return [...prevData, ...data.data];
      });
      setErrorMessage(undefined);
    } catch (error) {
      console.log("something bad happened", error);
      setErrorMessage("Something bad happened :(");
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
    // Reset the gifs array to empty
    setGifs([]);
  };

  return (
    <div className={styles.container}>
      <FunkyHeader />
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <React.Fragment>
          <FeedOption updateFeedLimit={setFeedLimit} />
          <div className={styles.feed}>
            {gifs.length > 0
              ? gifs.map((item, index) => {
                  return (
                    <GIFView
                      key={item.id}
                      sourceSetMedium={item.images.downsized_medium}
                      sourceSetLarge={item.images.downsized_large}
                      url={item.images.downsized.url}
                      alt={item.title}
                    />
                  );
                })
              : ""}
          </div>
          <button onClick={loadMore}>Load more</button>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
