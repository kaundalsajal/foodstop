import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import React from "react";

function Page() {
  return (
    <main className="panel h-screen overflow-hidden">
      <NavBar/>
      <Hero/>
    </main>
  );
}

export default Page;
