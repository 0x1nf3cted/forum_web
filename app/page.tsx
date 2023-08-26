"use client";

import NavbarComponent from "@/components/Navbar/NavbarComponent";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <NavbarComponent />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </NextUIProvider>
  );
}
