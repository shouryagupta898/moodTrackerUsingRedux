import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked, sadClearButton } from "./action";

const SadIncrementor: FC = () => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch(); //dispatch ko action ka {} ka name milega
  return (
    <div>
      <h2>Are You Sad?</h2>
      <input
        type="number"
        className="w-10 px-1 py-1 border border-black bg-cyan-300 rounded-md mr-2 "
        value={quantity}
        onChange={(e) => {
          setQuantity(+e.target.value);
          if (+e.target.value < 1) {
            setQuantity(0);
          }
        }}
      />

      <button
        className="border border-black bg-red-500 text-white px-2 py-1 rounded-md mt-2"
        onClick={() => {
          dispatch(sadButtonClicked(quantity, new Date()));
          setQuantity(0);
        }}
      >
        Yes
      </button>
      <button
        className="border border-black bg-red-500 text-white px-2 py-1 rounded-md mt-2 ml-2"
        onClick={() => {
          dispatch(sadClearButton());
        }}
      >
        clear
      </button>
    </div>
  );
};
export default SadIncrementor;
