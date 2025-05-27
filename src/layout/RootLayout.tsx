import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";

const RootLayout = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1200,
          style: {
            fontSize: "18px",
            padding: "14px 20px",
            minWidth: "280px",
          },
        }}
      />
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
