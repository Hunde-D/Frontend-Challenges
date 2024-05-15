import { useParams } from "react-router-dom";
import { TipCalculator, Tabs } from "../challenges";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const componentMap = {
  TipCalculator: TipCalculator,
  Tabs: Tabs,
  // ...
};

export default function ProjectDetail() {
  const { title } = useParams();
  console.log("this is title:", title);

  const ComponentToRender =
    componentMap[title] || (() => <div>Invalid ID</div>);

  return (
    <div className=" w-full h-full">
      {/* <IoChevronBackCircleOutline size={25} className="" /> */}
      <ComponentToRender />
    </div>
  );
}
