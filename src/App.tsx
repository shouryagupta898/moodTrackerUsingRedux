import React, { FC } from "react";
import HappyIncrementor from "./HappyIncrementor";
import HappyTracker from "./HappyTracker";
import SadIncrementor from "./SadIncrementor";
import SadTracker from "./SadTracker";

const App: FC = () => {
  return (
    <div className="flex space-x-4 justify-center mt-5">
      <div className="flex flex-col items-center space-y-4 border border-black p-4">
        <HappyTracker />
        <HappyIncrementor />
      </div>
      <div className="flex flex-col items-center space-y-4 border border-black p-4">
        <SadTracker />
        <SadIncrementor />
      </div>
    </div>
  );
};

export default App;
