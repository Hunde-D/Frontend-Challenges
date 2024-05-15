import { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import BackBtn from "../../components/BackBtn";
import Button from "../../components/Button";
import { v4 as uuid } from "uuid";

const TipCalculator = () => {
  const [tipRate, setTipRate] = useState(0);
  const [invalid, setInvalid] = useState(false);
  const [bill, setBill] = useState({
    amount: null,
    noPeople: null,
  });
  const [perPerson, setPerPerson] = useState({
    bill: 0,
    tip: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBill((prevBill) => ({ ...prevBill, [name]: value }));
  };

  useEffect(() => {
    if (bill.noPeople === null)
      setBill((prevBill) => ({ ...prevBill, noPeople: 1 }));
    if (bill.noPeople && bill.noPeople !== 0) {
      let tipPercent = tipRate ? tipRate / 100 : 0;
      console.log("tip%", tipPercent);
      let tipPerPerson = (bill.amount * tipPercent) / bill.noPeople;
      console.log("tip/person", tipPerPerson);
      let billPerPerson = bill.amount / bill.noPeople + tipPerPerson;
      console.log("bill/person", billPerPerson);
      setPerPerson({
        bill: billPerPerson,
        tip: tipPerPerson,
      });
    }
  }, [bill, bill.amount, bill.noPeople, tipRate]);

  const tips = [5, 10, 15, 20, 25];
  const tipButton = tips.map((amount) => {
    return (
      <Button
        key={uuid()}
        className="-bg--very-dark-cyan rounded-md h-12 -text--White text-center"
        onClick={() => setTipRate(amount)}
      >
        {amount}
      </Button>
    );
  });

  return (
    <div className=" w-full h-screen -bg--Light-grayish-cyan flex flex-col justify-center items-center gap-4 py-4">
      <BackBtn
        to="/projects"
        className="flex fixed top-5 ml-2 place-self-start hover:text-sky-600"
      >
        <IoIosArrowRoundBack size={25} />
        <span className=" text-sm ml-1 mt-[1px]">Back</span>
      </BackBtn>
      <h1 className="">
        SPLI <br />
        <span>TTER</span>
      </h1>
      <div className=" flex flex-col max-sm:w-full sm:w-4/5 sm:flex-row xl:w-4/6 gap-10 -bg--White rounded-3xl p-7">
        <div className="flex flex-col flex-1 gap-2">
          <h2>Bill</h2>
          <div className="flex justify-between w-full h-8 -bg--Very-light-grayish-cyan mb-5">
            <p className="px-3">$</p>
            <input
              type="text"
              name="amount"
              value={bill.amount}
              onChange={handleChange}
              placeholder="0"
              className=" bg-transparent text-wrap w-fit -accent--very-dark-cyan  "
            />
          </div>
          <h2>Select Tip %</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-5">
            {tipButton}
            <Button className=" -bg--Very-light-grayish-cyan rounded-md h-12 -text--strong-cyan text-center">
              Custom
            </Button>
          </div>
          <h2>Number of People</h2>
          <div className="flex justify-between items-center  -bg--Very-light-grayish-cyan ">
            <p>G</p>
            <input
              type="number"
              placeholder="1"
              name="noPeople"
              value={bill.noPeople}
              onChange={handleChange}
              className={`bg-transparent  outline-none  ${
                invalid ? "outline-red-500" : ""
              }`}
            />
          </div>
        </div>
        <div className=" flex flex-col flex-1 -bg--very-dark-cyan rounded-xl px-10 py-5 pt-10 gap-9">
          <div className="flex justify-between -text--White">
            <h3>
              Tip Amount <br />
              <span className=" -text--Dark-grayish-cyan">/Person</span>
            </h3>
            <h3 className=" -text--strong-cyan">${perPerson.tip}</h3>
          </div>
          <div className="flex justify-between -text--White">
            <h3>
              Total <br />
              <span className=" -text--Dark-grayish-cyan">/Person</span>
            </h3>
            <h3 className=" -text--strong-cyan">${perPerson.bill}</h3>
          </div>
          <button className=" -bg--strong-cyan w-full mt-8">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
