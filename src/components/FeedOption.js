import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedOption.module.css";

/**
 * Feed options
 * @param updateFeedLimit props
 */

function FeedOption(props) {
  const { updateFeedLimit } = props;

  // Define a set of options
  const numFeedOption = [10, 25, 50, 75, 100];

  const handleOnClick = (opt) => (evt) => {
    updateFeedLimit(opt);
  };

  return (
    <div className={styles.buttons}>
      {numFeedOption.length > 0
        ? numFeedOption.map((opt, ind) => {
            return (
              <button key={ind} onClick={handleOnClick(opt)}>
                {opt}
              </button>
            );
          })
        : ""}
    </div>
  );
}

FeedOption.propTypes = {
  /**
   * method to return current selected feed option to the
   * parent component
   */
  updateFeedLimit: PropTypes.func.isRequired,
};

export default FeedOption;
