import React from "react";
import { Outlet } from "react-router";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
