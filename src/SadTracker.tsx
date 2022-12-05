import React, { FC } from "react";
import { useSelector } from "react-redux";
import { sadCountSelector } from "./selectors";

const SadTracker: FC = () => {
    console.log("SadTracker refreshed");

  const sadCount = useSelector(sadCountSelector);
  return (
    <div className="bg-blue-500 px-4 py-2">You were Sad {sadCount} times</div>
  );
};

export default SadTracker;
