import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
