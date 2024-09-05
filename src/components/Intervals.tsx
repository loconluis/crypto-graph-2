import { useState } from "react";
import { useDispatch } from "react-redux";
import { stockIntervals } from "../../config";
import { setFilters } from "../redux/cryptoSlice";
import { FiltersOptions } from "../interfaces/options";

const Intervals = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);

  const handleActive = (el: Partial<FiltersOptions>, value: number) => {
    setActive(value);
    dispatch(setFilters(el));
  };

  return (
    <div className="flex flex-row justify-center mt-5 ">
      {stockIntervals.map((el, index) => (
        <div
          onClick={() => handleActive(el, index)}
          key={index}
          className={`px-5 border-l-2 cursor-pointer hover:bg-black hover:text-white dark:text-white dark:hover:bg-gray-100 dark:hover:text-black ${
            active == index
              ? "bg-black text-white dark:bg-white dark:text-black"
              : ""
          }`}
        >
          {el.label}
        </div>
      ))}
    </div>
  );
};

export default Intervals;
