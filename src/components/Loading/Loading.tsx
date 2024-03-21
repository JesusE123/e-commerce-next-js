import React from "react";
import { ProgressBar } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <ProgressBar
        visible={true}
        height="80"
        width="80"
        barColor="#F4442E"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
