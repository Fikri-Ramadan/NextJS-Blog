'use client'

import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading-container">
      <PuffLoader
        height="80"
        width="80"
        radius={1}
        color="#4066ff"
        aria-label="puff-loading"
      />
    </div>
  );
};

export default Loading;
