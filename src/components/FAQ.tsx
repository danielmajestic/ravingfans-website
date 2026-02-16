"use client";

import { useState } from "react";

const faqs = [
  {
    q: "You're just one guy. Can you really handle our business?",
    a: "Meet the team. I'm the strategist — the one with 27 years of pattern recognition who will personally own your engagement. Behind me is an execution team of AI agents I've personally trained on my frameworks and methodology. They work 24/7 with zero downtime, zero human error, and zero ego. You're getting the strategic depth of a senior consultant with the execution capacity of a full agency. And I cap my clients at 3-5 specifically so each one gets everything I have.",
  },
  {
    q: "We've been burned by agencies before.",
    a: "I hear this constantly — and I understand the skepticism. Here's the difference: I own your P&L like it's mine. Ask Brad at TrueHope — I'm more committed to their profitability than some of their own team. I don't deliver reports and disappear. I embed in your business, understand your numbers, and make decisions based on what drives profit, not what looks good in a deck.",
  },
  {
    q: "$10K/month is a lot.",
    a: "What's one additional $50K revenue stream worth? You're not paying for a marketing expense — you're investing in exponential growth. And because I only take 3-5 clients, every engagement gets my full strategic attention. A full-time hire at my level is $154K+ base plus commission. You get me, my AI team, and 27 years of pattern recognition for a fraction of that. No benefits, no PTO, no ramp-up time.",
  },
  {
    q: "Why not just hire someone full-time?",
    a: "A full-time marketing director with my experience commands $154K+ base salary. Add benefits, office space, equipment, and the 6 months it takes them to learn your business. With RavingFans.ai, you get 27 years of pattern recognition from day one, an execution team that ships in days not months, and flexibility to scale up or down based on results. No payroll overhead. No HR headaches.",
  },
  {
    q: "Can you handle our industry?",
    a: "I've sold everything online except the things you shouldn't sell online. 4,000+ offers across supplements, CPG, regulated products, software, services, and more. I've navigated FDA compliance, Amazon's ever-shifting rules, and ad platform policies that change overnight. When other marketers say \"that's too hard,\" I say \"that's where I live.\"",
  },
  {
    q: "AI can't replace real marketers.",
    a: "Agreed. That's why I'm here. AI doesn't replace 27 years of experience — it amplifies it. My team is trained on my frameworks, my methodology, and my standards. They don't guess. They execute what I've proven works, faster and more precisely than any human team could. The strategy is mine. The execution is superhuman.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-xl bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-dark text-sm sm:text-base pr-4">
              &ldquo;{faq.q}&rdquo;
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`faq-content px-6 ${openIndex === i ? "open" : ""}`}
          >
            <p className="text-sm text-medium leading-relaxed pb-5">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
