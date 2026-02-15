"use client";

import { useState } from "react";

const faqs = [
  {
    q: "You're just one guy with some AI tools. How can you deliver what a full agency can't?",
    a: "That's exactly the point. Traditional agencies have 15 people touching your account — and none of them are the person who sold you. I'm the strategist, and my AI team executes the strategy I architect. No handoffs. No telephone games. No junior account manager learning on your dime. You get 27 years of direct marketing experience applied directly to your business, with an execution team that works 24/7 and never drops the ball.",
  },
  {
    q: "We've been burned by agencies before. Why should this be any different?",
    a: "Because most agencies sell activity, not outcomes. They'll show you impressive dashboards full of impressions and clicks, but when you look at your bank account, nothing changed. I don't measure success in vanity metrics. I measure it in customer acquisition cost, lifetime value, and revenue. If the numbers don't move, I haven't done my job. And unlike agencies with 18-month contracts, I have to earn your business every single month.",
  },
  {
    q: "$10K a month is a lot. How do I know I'll see a return?",
    a: "It is a lot — if it doesn't work. But let's do the math. If your average customer is worth $200 over their lifetime, you need 50 new customers per month to break even. Most of our clients see that within the first 60 days, and it compounds from there. This isn't an expense. It's an investment in a machine that generates customers while you sleep. The question isn't whether you can afford it — it's whether you can afford not to have it.",
  },
  {
    q: "Why not just hire a full-time marketing person?",
    a: "A good marketing director costs $120K-$180K per year plus benefits — and they're still just one person who needs a team to execute. They take vacations. They have sick days. They need training. And if they leave, they take all their knowledge with them. For less than half that cost, you get a strategist with 27 years of experience backed by an AI execution team that works around the clock and never forgets a detail.",
  },
  {
    q: "Can you handle our specific industry? We're not a typical CPG brand.",
    a: "I've worked across health supplements, specialty food, pet products, beauty, and more. The specific product changes. The principles of turning customers into raving fans don't. During our strategy call, I'll tell you honestly whether I think I can move the needle for your specific situation. If I can't, I'll tell you that too.",
  },
  {
    q: "AI can't replace real marketing expertise. This feels like hype.",
    a: "You're right — AI alone can't replace expertise. That's why the AI isn't making the decisions. I am. I've spent 27 years building the frameworks and methodologies that drive results. The AI executes those frameworks at a speed and consistency no human team can match. Think of it this way: AI is the engine, but I'm the one who built the car and knows where to drive it. The combination is what makes this different from everything else out there.",
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
