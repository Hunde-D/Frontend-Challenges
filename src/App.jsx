import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  useLocation,
} from "react-router-dom";

// components
import Layout from "./components/Layout";

//pages
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

//style
import "./App.css";

function LayoutWrapper() {
  const location = useLocation();

  return <Layout location={location} />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutWrapper />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:title" element={<ProjectDetail />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
