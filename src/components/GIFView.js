import React from 'react'

/**
 * GIF window to load a single gif
 * @param url 
 * @param alt
 * @param width
 * @param height
 */
function GIFView(props) {
  const { url, alt, width, height } = props
  return (
    <div>
      <img src={url} alt={alt} width={width} height={height} />
    </div>
  )
}

export default GIFView
