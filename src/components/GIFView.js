import React from "react";
import styles from "./GIFView.module.css";

/**
 * GIF window to load a single gif
 * @param sourceSetMedium - for mobil, tablet
 * @param sourceSetLarge - for desktop
 * @param url - fallback url
 * @param alt - image description
 */
function GIFView(props) {
  const { url, alt, sourceSetMedium, sourceSetLarge } = props;
  return (
    <picture>
      <source srcSet={sourceSetLarge.url} media="(min-width: 681px)" />
      <source
        className={styles.responsive}
        srcSet={sourceSetMedium.url}
        media="(max-width: 680px)"
      />
      <img className={styles.responsive} srcSet={url} alt={alt} />
    </picture>
  );
}

export default GIFView;
