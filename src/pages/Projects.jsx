// import { Outlet } from "react-router-dom";
import Card from "../components/Card";
import { cardData } from "../constants";

export default function Projects() {
  return (
    <div className="w-full h-full grid grid-cols-3 justify-items-center gap-12 px-14 py-10">
      {cardData.map((data, index) => {
        return <Card key={index} card={data} />;
      })}
    </div>
  );
}
