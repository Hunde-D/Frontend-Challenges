// import { Outlet } from "react-router-dom";
import Card from "../components/Card";
import { cardData } from "../assets/design";
import { FaSearchengin } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const newSearchData = cardData.filter((cards) => {
      return cards.title.includes(search);
    });
    setSearchData(newSearchData);
  }, [search]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  console.log(searchData.length);
  console.log(cardData.length);
  return (
    <div className="w-full h-full grid grid-cols-3 justify-items-center gap-12 px-14 py-10">
      <div className=" peer col-span-3 flex w-2/5 border-2 border-slate-300/50 shadow-md  shadow-slate-200 rounded-full px-3 py-2 gap-2 focus-within:w-4/6 transition-all">
        <FaSearchengin size={25} className=" text-slate-400" />
        <input
          type="text"
          placeholder="find project..."
          value={search}
          onChange={handleSearch}
          className=" outline-none h-full w-full px-1 py-1"
        />
      </div>
      <div className=" col-span-3 w-4/6  min-h-96 flex flex-col  justify-start  bg-slate-50 divide-slate-100 divide-y-2 shadow-sm rounded-md  -my-12 mb-5 empty:hidden empty:transition-all transition-all ">
        {search &&
          searchData.map((result, index) => {
            return (
              <div
                key={index}
                className="flex gap-3 w-full  px-20 py-2 justify-between items-center transition-all"
              >
                <p className="text-lg capitalize font-medium ">
                  {result.title}
                </p>
                <img src={result.img} className="w-28 h-full object-contain" />
              </div>
            );
          })}
      </div>

      {cardData.map((data, index) => {
        return <Card key={index} card={data} />;
      })}
    </div>
  );
}
