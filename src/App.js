import React, { useEffect, useState } from 'react';
import fetch from './libs/fetch'
import GIFView from './components/GIFView'
import FunkyHeader from './components/FunkyHeader'
import './App.css';

import { GIPHY_TRENDING_API, GIPHY_KEY } from './config'

function App() {

  const [gifs, setGifs] = useState([])

  const loadGifs = async () => {
    const data = await fetch(`${GIPHY_TRENDING_API}?api_key=${GIPHY_KEY}&limit=10&=offset=0`)
    console.log('data', data)
    setGifs(data.data)
  }

  useEffect(() => {
    loadGifs()
  }, [])

  const loadMore = (evt) => {

  }

  return (
    <div className="App">
      <FunkyHeader />

      {(gifs.length > 0) ? gifs.map((item, index) => {
        return <GIFView key={index} url={item.images.downsized.url} alt={item.title} width={item.images.width} height={item.images.height} />
      }) : ''}

      <button onClick={loadMore}>Load more</button>
    </div>
  );
}

export default App;
