import { useLoaderData } from "react-router-dom";
import { cardData } from "../assets/design";
// import { challenges } from "../challenges";
// import TipCalculator from "../challenges/tip-calculator/TipCalculator";
import Tabs from "../challenges/tabs/Tabs";

export function loader({ params }) {
  return params.id;
}

export default function ProjectDetail() {
  const loaderData = useLoaderData();

  // const data = cardData.filter((card) => card.title === loaderData)[0];
  // console.log("project data : ", data);
  // const comp = data.title.replace(" ", "");
  // const renderComp = challenges[0];

  return (
    <div className="bg-red-50 w-full h-full ">
      {/* <p>this componet is {loaderData}</p> */}
      <Tabs />
      {/* <Outlet /> */}
    </div>
  );
}
