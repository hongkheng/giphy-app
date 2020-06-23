import React from "react";
import PropTypes from "prop-types";
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

GIFView.propTypes = {
  /**
   * Giphy images object which source is medium sized
   */
  sourceSetMedium: PropTypes.object,
  /**
   * Giphy images object which source is large sized
   */
  sourceSetLarge: PropTypes.object,
  /**
   * Fallback image url
   */
  url: PropTypes.string.isRequired,
  /**
   * Fallback image alt description
   */
  alt: PropTypes.string.isRequired,
};

export default GIFView;
