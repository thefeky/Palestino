import { Outlet } from "react-router";

import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

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
