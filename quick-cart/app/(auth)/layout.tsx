"use client";

import { ReactNode } from "react";
import Hero from "@/components/Hero";

interface AuthLayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <div className="flex flex-col items-center justify-center mt-10 px-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
