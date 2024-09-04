import { useState } from "react";
import { useDispatch } from "react-redux";
import { stockIntervals } from "../../config";
import { setFilters } from "../redux/slice";
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
          className={`px-5 border-l-2 cursor-pointer hover:bg-black hover:text-white ${
            active == index ? "border-b-2" : ""
          }`}
        >
          {el.label}
        </div>
      ))}
    </div>
  );
};

export default Intervals;
