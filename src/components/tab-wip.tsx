"use client";

const cards = [
  {
    bg: "#C5C9BE",
    title: "Ava",
    description:
      "Ava instantly analyses medical reports with AI insights and tracks your health progress over time.",
    url: "https://ava-ai-livid.vercel.app/",
  },
  {
    bg: "#D2CBC7",
    title: "Retail",
    description:
      "An AI tool for retailers to manage inventory, personalise shopping, and boost sales with smart insights.",
    url: "https://retail.neuralarc.ai/",
  },
  {
    bg: "#E0C8C9",
    title: "HR Policy AI",
    description:
      "An AI system that rapidly analyzes HR policy documents, ensuring compliance and recommending strategic improvements.",
    url: "https://hragent.neuralarc.ai/",
  },
];

const cards2 = [
  {
    bg: "#DAD5BE",
    title: "LoanSense AI:",
    description:
      "An AI-powered loan agent that swiftly analyzes commercial loan applications, ensuring accurate risk assessment and accelerating approval decisions.",
    url: "https://loanagent.neuralarc.ai/",
  },
  {
    bg: "#BEC4C9",
    title: "FraudGuard AI ",
    description:
      "Experience next-generation fraud prevention in action: Our multi-agent AI system intelligently detects and responds to suspicious activities in realistic scenarios, safeguarding banking assets.",
    url: "https://fraudagent.neuralarc.ai/",
  },
];

export default function TabWorkInProgress() {
  return (
    <div>
      <div className="w-full flex flex-col gap-8 mt-12 sm:flex-row sm:gap-8 items-center justify-center mx-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative flex flex-col justify-between rounded-[12px] h-full"
            style={{
              background: card.bg,
              width: "100%",
              maxWidth: 505.77,
              padding: 22,
              opacity: 1,
              borderRadius: 12,
            }}
          >
            <div className="w-full h-full rounded-[12px] p-6 sm:p-8" style={{background: '#FFFFFF9E', backdropFilter: 'blur(8px)'}}>
              <h4 className="font-medium text-[2rem] leading-[43.52px] tracking-[-0.02em] text-black mb-2">
                {card.title}
              </h4>
              <div className="font-normal text-[19.34px] leading-[25.79px] text-[#4A4A4A] mb-8">
                {card.description}
              </div>
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-8 py-3 bg-[#2F2C28] text-white rounded-lg font-medium text-lg shadow-[0_4px_0_0_#C6AEA3] border-b-[3px] border-b-[#C6AEA3] hover:-translate-y-1 transition-all flex items-center gap-2 w-fit"
              >
                Try Now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-4 mt-8 sm:flex-row sm:gap-8 items-center justify-center mx-4">
        {cards2.map((card) => (
          <div
            key={card.title}
            className="relative flex flex-col justify-between rounded-[12px] h-full flex-1 min-w-0"
            style={{
              background: card.bg,
              padding: 22,
              opacity: 1,
              borderRadius: 12,
            }}
          >
            <div className="w-full h-full rounded-[12px] p-6 sm:p-8" style={{background: '#FFFFFF9E', backdropFilter: 'blur(8px)'}}>
              <h4 className="font-medium text-[2rem] leading-[43.52px] tracking-[-0.02em] text-black mb-2">
                {card.title}
              </h4>
              <div className="font-normal text-[19.34px] leading-[25.79px] text-[#4A4A4A] mb-8">
                {card.description}
              </div>
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-8 py-3 bg-[#2F2C28] text-white rounded-lg font-medium text-lg shadow-[0_4px_0_0_#C6AEA3] border-b-[3px] border-b-[#C6AEA3] hover:-translate-y-1 transition-all flex items-center gap-2 w-fit"
              >
                Try Now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24v0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
