import React, { FC } from "react";
import { useSelector } from "react-redux";
import { happyMomentsSelector } from "./selectors";

const HappyTracker: FC = () => {
  // console.log("HappyTracker refreshed");
  const happyMoment = useSelector(happyMomentsSelector); // select ko selector ka function ka name milega

  return (
    <div className="bg-orange-400 px-4 py-2">
      {happyMoment.map((m) => (
        <div key={m.intensity}>
          <>
            Happiness Intensity:{m.intensity},  when:{m.when.toISOString()}
          </>
        </div>
      ))}
    </div>
  );
};

export default HappyTracker;
