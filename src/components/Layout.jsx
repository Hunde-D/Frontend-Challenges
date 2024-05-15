import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
// import Footer from "./Footer";

export default function Layout({ location }) {
  const { title } = useParams();
  return (
    <div className="  w-full h-full font-sans  text-black ">
      {(!location.pathname.startsWith("/projects/") && <Header />) ||
        (!title && <Header />)}

      <main className=" w-full h-full">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

/* 
      * useParams* 
      you are checking if a specific parameter is present in the URL.
      This is a more specific check, and it will only work if the parameter is
      defined in your route definition.  

      *useLocation* 
      you are checking if the current pathname starts with a specific string. This is a more
      general check, and it will work for any route. 
  */
