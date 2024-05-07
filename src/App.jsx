import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// components
import Layout from "./components/Layout";

//pages
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

//loaders
import { loader as projectID } from "./pages/ProjectDetail";

//style
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route
        path="projects/:id"
        element={<ProjectDetail />}
        loader={projectID}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
