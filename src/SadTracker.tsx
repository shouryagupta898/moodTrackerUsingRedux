import React, { FC } from "react";
import { useSelector } from "react-redux";
import { sadMomentsSelector } from "./selectors";

const SadTracker: FC = () => {
  // console.log("SadTracker refreshed");

  const sadMoment = useSelector(sadMomentsSelector);
  return (
    <div className="bg-blue-500 px-4 py-2">
      {sadMoment.map((m) => (
        <div key={m.intensity}>
          <>
            Sadness Intensity:{m.intensity},  when:{m.when.toISOString()}
          </>
        </div>
      ))}
    </div>
  );
};

export default SadTracker;
