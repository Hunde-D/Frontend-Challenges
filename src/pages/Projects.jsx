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
  const handeleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  console.log(searchData.length);
  console.log(cardData.length);
  return (
    <div className="w-full h-full grid grid-cols-3 justify-items-center gap-12 px-14 py-10">
      <div className="col-span-3 flex max-w-64 border-2 border-slate-300/50 shadow-md  shadow-slate-200 rounded-2xl px-3 py-2 gap-2">
        <FaSearchengin size={30} />
        <input
          type="text"
          placeholder="find project..."
          value={search}
          onChange={handeleSearch}
          className=" outline-none h-full w-full px-1 py-1"
        />
      </div>
      {search && (
        <div className="flex flex-col col-span-3 w-52 h-40 bg-teal-200 divide-slate-200 rounded-b-md max-w-64 mb-10">
          {searchData.map((result, index) => {
            return (
              <div key={index}>
                <p>{result.title}</p>
                <img src={result.img} />
              </div>
            );
          })}
        </div>
      )}
      {cardData.map((data, index) => {
        return <Card key={index} card={data} />;
      })}
    </div>
  );
}
