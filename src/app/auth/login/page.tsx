"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const router = useRouter();

  const handleChange = (idx: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newPin = [...pin];
    newPin[idx] = value;
    setPin(newPin);
    setError("");
    if (value && idx < 3) {
      (inputs[idx + 1].current as any)?.focus();
    }
    if (newPin.every((d) => d.length === 1)) {
      if (newPin.join("") === "1111") {
        localStorage.setItem("auth", "true");
        router.replace("/");
      } else {
        setError("Incorrect PIN");
        setPin(["", "", "", ""]);
        (inputs[0].current as any)?.focus();
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--background, #1E1E1E)" }}>
      <div className="bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center w-[90vw] max-w-[350px] border border-[#444444]/30 backdrop-blur-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#23201C] flex items-center justify-center text-xl font-semibold text-white mb-2">
            NP
          </div>
          <div className="text-2xl font-bold text-white mb-1">Neural Paths</div>
          <div className="text-[#CCCCCC] text-center text-base mb-4">Enter your 4-digit PIN to access the dashboard.</div>
        </div>
        <div className="flex gap-3 mb-6">
          {pin.map((digit, idx) => (
            <input
              key={idx}
              ref={inputs[idx]}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(idx, e.target.value)}
              className="w-12 h-12 rounded-lg bg-white/20 border border-[#C6AEA3] shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] text-center text-2xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#C6AEA3] backdrop-blur-md transition-all"
              style={{
                boxShadow: "0 4px 24px 0 rgba(198,174,163,0.10)",
                backdropFilter: "blur(8px)",
              }}
              autoFocus={idx === 0}
            />
          ))}
        </div>
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      </div>
    </div>
  );
}
