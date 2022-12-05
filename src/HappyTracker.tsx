import React, { FC } from "react";
import { useSelector } from "react-redux";
import { happyCountSelector } from "./selectors";

const HappyTracker: FC = () => {
    console.log("HappyTracker refreshed");
  const happyCount = useSelector(happyCountSelector); // select ko selector ka function ka name milega

  return (
    <div className="bg-orange-400 px-4 py-2">
      You were Happy {happyCount} times
    </div>
  );
};

export default HappyTracker;
