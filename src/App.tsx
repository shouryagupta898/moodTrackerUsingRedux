import React, { FC } from "react";
import Button from "./Button";
import HappyIncrementor from "./HappyIncrementor";
import HappyTracker from "./HappyTracker";
import SadIncrementor from "./SadIncrementor";
import SadTracker from "./SadTracker";

const App: FC = () => {
  return (
    <div className="flex flex-col border border-black max-w-5xl mx-auto items-center space-y-4 mt-4 pb-4 px-4">
      <div className="flex flex-col border border-black mt-4 w-full p-2">
        <HappyTracker />
        <HappyIncrementor />
      </div>
      <div className="flex flex-col border border-black w-full p-2 ">
        <SadTracker />
        <SadIncrementor />
      </div>
      {/* <Button className="bg-cyan-900" onClick={() => console.log("hello")}>hello</Button> */}
    </div>
  );
};

export default App;
