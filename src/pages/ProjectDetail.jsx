import { useLoaderData } from "react-router-dom";

export function loader({ params }) {
  return params.id;
}

export default function ProjectDetail() {
  const loaderData = useLoaderData();
  return (
    <div>
      <p>this is the ShowRoom route for project {loaderData}</p>
      {/* <Outlet /> */}
    </div>
  );
}
