"use client";
import Image from "next/image";
import TabsButton from "../components/tabsbutton";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("auth") !== "true") {
      router.replace("/auth/login");
    }
  }, [router]);

  return (
    <div className="w-full flex flex-col justify-center relative min-h-screen overflow-hidden max-w-[1920px] mx-auto px-4 ">
      {/* Top left background image */}
      <Image
        src="/bg-2.png"
        alt="Background graphic top left"
        width={400}
        height={400}
        className="absolute top-0 left-30 z-0 w-[180px] h-[120px] sm:w-[320px] sm:h-[220px] md:w-[280px] md:h-[200px] pointer-events-none select-none"
        priority
      />
      {/* Top right background image */}
      <Image
        src="/bg-3.png"
        alt="Background graphic top right"
        width={400}
        height={400}
        className="absolute top-0 right-0 z-0 w-[340px] h-[280px] sm:w-[320px] sm:h-[220px] md:w-[340px] md:h-[250px] pointer-events-none select-none"
        priority
      />
      {/* Left background image (bg-4.png) */}
      <Image
        src="/bg-4.png"
        alt="Background graphic left"
        width={600}
        height={900}
        className="absolute left-0 top-1/6 -translate-y-1/4 z-0 w-[250px] h-[350px] sm:w-[350px] sm:h-[500px] md:w-[300px] md:h-[650px] pointer-events-none select-none"
        priority
      />
      {/* Center background image (bg-1.png) */}
      <Image
        src="/bg-1.png"
        alt="Background graphic center"
        width={700}
        height={700}
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/3 z-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[1100px] md:h-[1800px] pointer-events-none select-none"
        priority
      />
      {/* Right background image (bg-5.png) */}
      <Image
        src="/bg-5.png"
        alt="Background graphic right"
        width={400}
        height={600}
        className="absolute right-0 top-1/2  translate-y-1/10 z-0 w-[180px] h-[250px] sm:w-[250px] sm:h-[350px] md:w-[360px] md:h-[520px] pointer-events-none select-none"
        priority
      />
      {/* Header with logo */}
      <header className="w-full flex items-start pt-8 pl-8 sm:pt-12 sm:pl-12 relative z-10">
        <Image
          src="/logo.png"
          alt="NeuralArc Logo"
          width={193}
          height={60}
          className="w-[140px] h-[44px] sm:w-[193px] sm:h-[60px] opacity-100"
          priority
        />
      </header>
      {/* Spacing between header and tabs */}
      <div className="h-8 sm:h-12" />
      <TabsButton />
    </div>
  );
}
