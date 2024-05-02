import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="w-screen h-screen font-sans bg-[#0b1120] text-white bg">
      <Header />
      <main className="w-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
