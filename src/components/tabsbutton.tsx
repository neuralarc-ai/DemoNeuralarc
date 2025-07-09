"use client";
import React, { useState } from "react";
import TabBeta from "./tab-beta";
import TabWip from "./tab-wip";
import InternalApp from "./internalapp";
import Image from "next/image";

const TABS = [
  { label: "Beta" },
  { label: "Work In Progress" }
];

export default function TabsButton() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex flex-col items-center pt-8 relative min-h-screen">
      {/* All content above the background */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1
          style={{
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "56px",
            letterSpacing: "-0.04em",
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: "32px"
          }}
          className="sm:text-[64px] sm:leading-[112px] text-[40px] leading-[56px] font-semibold text-white text-center mb-8"
        >
          Built to match the speed of your vision
        </h1>
        <div
          style={{
            width: 320,
            height: 56,
            background: "#D6DAD1",
            borderRadius: 8,
            padding: 4,
            display: "flex",
            alignItems: "center",
            opacity: 1
          }}
          className="sm:w-[608px] sm:h-[96px] w-[320px] h-[56px] flex p-1 rounded-lg bg-[#D6DAD1]"
        >
          {TABS.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              style={{
                flex: 1,
                height: "100%",
                borderRadius: 6,
                background: activeTab === idx ? "#2B2521" : "transparent",
                color: activeTab === idx ? "#fff" : "#414141",
                fontWeight: 500,
                fontSize: "18px",
                transition: "background 0.2s, color 0.2s"
              }}
              className={`w-1/2 h-full rounded-md font-medium text-base sm:text-2xl transition-colors duration-200 ${activeTab === idx ? "bg-[#2B2521] text-white" : "text-[#414141]"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-white/15 rounded-2xl p-8 my-10 flex flex-col items-center shadow-md backdrop-blur-sm mx-4">
          <div className="w-full max-w-[1556px] flex flex-col items-center justify-center mx-auto text-center">
            <h2 className="font-semibold text-[2rem] sm:text-[44.33px] leading-[2.5rem] sm:leading-[58.03px] tracking-[-0.02em] text-white mb-2">
              NeuralArc’s AI Services
            </h2>
            <h3 className="font-semibold text-base sm:text-[17.92px] leading-6 sm:leading-[22.4px] tracking-[-0.008em] text-[#FFFFFFBD] mb-4">
              Custom Intelligence. Real Business Results.
            </h3>
            <p className="font-normal text-base sm:text-[17.73px] leading-[158%] tracking-[-0.01em] text-white break-words">
              Our AI services are designed to solve real-world problems fast. Whether you are streamlining operations, automating decisions, or reimagining customer experiences, we build lightweight, scalable AI solutions tailored to your business.
            </p>
          </div>
          {activeTab === 0 ? <TabBeta /> : <TabWip />}
        </div>
        {activeTab === 0 && (
          <div className="w-full mx-auto pb-6">
            <InternalApp />
          </div>
        )}
      </div>
    </div>
  );
}
