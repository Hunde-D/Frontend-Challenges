import { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import BackBtn from "../../components/BackBtn";
import Button from "../../components/Button";
import { v4 as uuid } from "uuid";

const TipCalculator = () => {
  const [tipRate, setTipRate] = useState(0);
  const [active, setActive] = useState(null);
  const [bill, setBill] = useState({
    amount: "",
    noPeople: "",
  });
  const [perPerson, setPerPerson] = useState({
    bill: 0,
    tip: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBill((prevBill) => ({ ...prevBill, [name]: value }));
  };

  const handleClick = (amount) => {
    setTipRate(amount);
    setActive(amount);
  };

  useEffect(() => {
    let tipPercent = tipRate ? tipRate / 100 : 0;
    let tipPerPerson = (
      (bill.amount * tipPercent) /
      (bill.noPeople !== "" ? bill.noPeople : 1)
    ).toFixed(2);

    let billPerPerson = (
      bill.amount / (bill.noPeople !== "" ? bill.noPeople : 1) +
      Number(tipPerPerson)
    ).toFixed(2);
    setPerPerson({
      bill: billPerPerson,
      tip: tipPerPerson,
    });
  }, [bill, bill.amount, bill.noPeople, tipRate]);

  const tips = [1, 2, 5, 10, 15];
  const tipButton = tips.map((amount) => {
    return (
      <Button
        key={uuid()}
        className={` rounded-md h-12 w-full -text--White text-center hover:-bg--strong-cyan ${
          active === amount ? "-bg--strong-cyan" : "-bg--very-dark-cyan"
        } `}
        onClick={() => handleClick(amount)}
      >
        {amount}%
      </Button>
    );
  });
  function handleReset() {
    setBill({
      amount: "",
      noPeople: "",
    });
    setPerPerson({
      bill: 0,
      tip: 0,
    });
    setTipRate(0);
    setActive(null);
  }

  return (
    <div className=" w-full h-screen max-sm:h-full -bg--Light-grayish-cyan flex flex-col justify-center items-center gap-4 py-4 font-mono font-bold text-xl -text--Dark-grayish-cyan">
      <BackBtn
        to="/projects"
        className="flex absolute top-5 ml-2 place-self-start hover:text-sky-600"
      >
        <IoIosArrowRoundBack size={25} />
        <span className=" text-sm ml-1 mt-[1px]">Back</span>
      </BackBtn>
      <h1 className=" -text--very-dark-cyan max-sm:m-3 max-sm:mt-6">
        SPLI <br />
        <span>TTER</span>
      </h1>
      <div className=" flex flex-col max-sm:w-full sm:w-4/5 sm:flex-row xl:w-4/6 gap-10 -bg--White rounded-3xl pl-10 pr-7 py-8">
        <div className="flex flex-col flex-1 gap-2 pt-2.5">
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
            <Button className=" -bg--Very-light-grayish-cyan rounded-md h-12 w-full -text--strong-cyan text-center">
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
              className="bg-transparent  outline-none "
            />
          </div>
        </div>
        <div className=" flex flex-col flex-1 -bg--very-dark-cyan rounded-xl px-10 py-5 pt-10 gap-9">
          <div className="flex justify-between -text--White">
            <h3>
              Tip Amount <br />
              <span className=" -text--Dark-grayish-cyan">/Person</span>
            </h3>
            <h3 className=" -text--strong-cyan text-5xl">${perPerson.tip}</h3>
          </div>
          <div className="flex justify-between -text--White">
            <h3>
              Total <br />
              <span className=" -text--Dark-grayish-cyan">/Person</span>
            </h3>
            <h3 className=" -text--strong-cyan text-5xl">${perPerson.bill}</h3>
          </div>
          <button
            className=" -bg--strong-cyan w-full mt-8"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
