import { useState } from "react";

const TipCalculator = () => {
  const [noPeople, setNoPeople] = useState("");
  const [invalid, setInvalid] = useState(false);

  const handleChange = (e) => {
    if (e.target.value === "0") setInvalid(true);
    setNoPeople(e.target.value);
  };

  const invalidInput = invalid ? "border-red-500" : "";
  return (
    <div className=" w-full -bg--Light-grayish-cyan flex flex-col justify-center items-center gap-4 py-4">
      <h1 className="">
        SPLI<span>TTER</span>
      </h1>
      <div className=" flex flex-col max-sm:w-full  sm:flex-row gap-10 -bg--White rounded-3xl p-5">
        <div className="flex flex-col">
          <h2>Bill</h2>
          <div className="flex justify-between -bg--Very-light-grayish-cyan">
            <p>$</p>
            <p>0</p>
          </div>
          <h2>Select Tip %</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className=" -bg--very-dark-cyan rounded-md h-12 -text--White text-center">
              5
            </div>
            <div className=" -bg--very-dark-cyan rounded-md h-12 -text--White text-center">
              10
            </div>
            <div className=" -bg--very-dark-cyan rounded-md h-12 -text--White text-center">
              15
            </div>
            <div className=" -bg--very-dark-cyan rounded-md h-12 -text--White text-center">
              20
            </div>
            <div className=" -bg--very-dark-cyan rounded-md h-12 -text--White text-center">
              25
            </div>
            <div className=" -bg--Very-light-grayish-cyan rounded-md h-12 -text--strong-cyan text-center">
              Custom
            </div>
          </div>
          <h2>Number of People</h2>
          <div className="flex justify-between items-center  -bg--Very-light-grayish-cyan ">
            <p>G</p>
            <input
              type="number"
              placeholder="0"
              value={noPeople}
              onChange={handleChange}
              className={`bg-transparent  outline-none  ${
                invalid ? "outline-red-500" : ""
              }`}
            />
          </div>
        </div>
        <div className=" -bg--very-dark-cyan rounded-xl p-5">
          <div>tip $</div>
          <div>total $</div>
          <button className=" -bg--strong-cyan w-full">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
