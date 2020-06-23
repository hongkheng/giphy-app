import React from "react";

function FeedOption(props) {
  const { updateFeedLimit } = props;

  // Define a set of options
  const numFeedOption = [10, 25, 50, 75, 100];

  const handleOnClick = (opt) => (evt) => {
    updateFeedLimit(opt);
  };

  return (
    <div>
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

export default FeedOption;
