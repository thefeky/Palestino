import { Outlet } from "react-router";

import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
