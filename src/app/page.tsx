"use client";
import Image from "next/image";
import TabsButton from "../components/tabsbutton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("auth");
      setIsAuthenticated(auth === "true");
      if (auth !== "true") {
        router.replace("/auth/login");
      }
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    router.replace("/auth/login");
  };

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
        className="absolute left-1/2 top-0 -translate-x-1/2 z-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[1100px] md:h-[1100px] pointer-events-none select-none object-contain"
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
      <header className="w-full flex items-center justify-between pt-8 pl-8 pr-8 sm:pt-12 sm:pl-12 sm:pr-12 relative z-10">
        <Image
          src="/logo.png"
          alt="NeuralArc Logo"
          width={193}
          height={60}
          className="w-[140px] h-[44px] sm:w-[193px] sm:h-[60px] opacity-100"
          priority
        />
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="flex items-center justify-center p-2 rounded-lg hover:bg-white/10 transition relative group"
            aria-label="Logout"
            title="Logout"
            style={{ height: '44px' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-logout">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
            <span className="absolute left-1/2 top-full -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">Logout</span>
          </button>
        )}
      </header>
      {/* Spacing between header and tabs */}
      <div className="h-8 sm:h-12" />
      <TabsButton />
    </div>
  );
}
