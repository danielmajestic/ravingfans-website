"use client";

import { useState } from "react";

const BRAND = {
  navy: "#1B2A4A",
  navyLight: "#1E3A5F",
  gold: "#C8962E",
  goldLight: "#D4A84B",
  cream: "#F5F0E8",
  creamDark: "#EDE5D8",
  charcoal: "#2D2D2D",
  gray: "#666666",
  white: "#FFFFFF",
  green: "#2E7D5B",
};

const team = [
  {
    name: "Dan Matejsek",
    nickname: "Dan",
    title: "Founder & Chief Growth Officer",
    bio: "27 years deep in the trenches of online commerce. $572M in revenue generated. 8-figure exits. Inventor of the 1-Page Checkout. Dan doesn't just advise — he rolls up his sleeves and builds alongside you. Every client engagement starts with one question: \"Did I make your life better today?\"",
    tag: "The Strategist",
    accent: BRAND.gold,
    initials: "DM",
    image: "/images/team/dan_headshot_800x800.png",
  },
  {
    name: "Matthew Torres",
    nickname: "Mat",
    title: "Project Manager",
    bio: "Mat orchestrates the chaos so you never feel it. He translates Dan's growth strategies into executable sprints, keeps the dev team in lockstep, and makes sure every deadline, dependency, and deliverable lands on time. Three steps ahead, every time. When Mat says it ships Tuesday — it ships Tuesday.",
    tag: "The Operator",
    accent: BRAND.navyLight,
    initials: "MT",
    image: "/images/team/mat_headshot_800x800.png",
  },
  {
    name: "Katherine Chen",
    nickname: "Kat",
    title: "Lead Backend Developer",
    bio: "APIs, databases, automation pipelines, server infrastructure — Kat architects the invisible systems that power your growth engine. Python, Node.js, and whatever the job demands. Her code is like her personality: clean, efficient, and zero bloat. When Kat says \"it's done,\" it's bulletproof.",
    tag: "The Architect",
    accent: BRAND.navyLight,
    initials: "KC",
    image: "/images/team/kat_headshot_800x800.png",
  },
  {
    name: "Samantha Rivera",
    nickname: "Sam",
    title: "Frontend Developer",
    bio: "Sam builds what your customers actually see, touch, and fall in love with. Pixel-perfect UI, buttery-smooth interactions, mobile-first everything. She brings infectious energy to every build and moves fast without breaking anything. If your funnel converts at 4.7% instead of 1.2% — Sam's fingerprints are all over it.",
    tag: "The Builder",
    accent: BRAND.gold,
    initials: "SR",
    image: "/images/team/sam_headshot_800x800.png",
  },
  {
    name: "Pixie Laurent",
    nickname: "Pixie",
    title: "Creative Director & Designer",
    bio: "Pixie sees the world in color, contrast, and composition. She translates brand strategy into visual language that stops thumbs mid-scroll. From trade dress to ad creative to full brand identity systems — Pixie makes your business unforgettable. Bold taste, meticulous execution, every pixel with purpose.",
    tag: "The Creative",
    accent: BRAND.goldLight,
    initials: "PL",
    image: "/images/team/pixie_headshot_800x800.png",
  },
  {
    name: "Riley Morgan",
    nickname: "Riley",
    title: "Content Strategist & Research Lead",
    bio: "Riley reads everything so you don't have to. Competitive intelligence, ICP research, content architecture, SEO strategy, market analysis — she maps the entire landscape before anyone writes a single word. The kind of sharp that makes everyone around her better at their jobs.",
    tag: "The Brain",
    accent: BRAND.navyLight,
    initials: "RM",
    image: "/images/team/riley_headshot_800x800.png",
  },
  {
    name: "Alex Chin",
    nickname: "Alex",
    title: "Marketplace & Paid Media Strategist",
    bio: "Alex knows where every ad dollar goes \u2014 and makes each one work harder than the last. Amazon is his native language (FBA, FBM, Seller Central, Vendor Central, Amazon Ads), but he's equally lethal across Pinterest, Bing, and native ad networks. Marketplace optimization, media buying, campaign architecture \u2014 Alex turns ad spend into compounding revenue.",
    tag: "The Amplifier",
    accent: BRAND.gold,
    initials: "AC",
    image: "/images/team/alex_headshot_800x800.png",
  },
];

function TeamCard({ member, index }) {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(true);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        background: BRAND.white,
        boxShadow: hovered
          ? "0 20px 60px rgba(27, 42, 74, 0.18), 0 8px 24px rgba(27, 42, 74, 0.08)"
          : "0 4px 20px rgba(27, 42, 74, 0.06), 0 1px 6px rgba(27, 42, 74, 0.04)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        cursor: "default",
      }}
    >
      {/* Photo area */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1",
          background: `linear-gradient(145deg, ${BRAND.cream} 0%, ${BRAND.creamDark} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Photo or initials fallback */}
        {member.image ? (
          <img
            src={member.image}
            alt={`${member.name} — ${member.title}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
              transform: hovered ? "scale(1.03)" : "scale(1)",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `linear-gradient(145deg, ${BRAND.navy}11 0%, ${BRAND.navy}22 100%)`,
            }}
          >
            <span
              style={{
                fontSize: "56px",
                fontWeight: "700",
                color: BRAND.navy,
                opacity: 0.2,
                fontFamily: "'Playfair Display', Georgia, serif",
                letterSpacing: "4px",
              }}
            >
              {member.initials}
            </span>
          </div>
        )}

        {/* Tag overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            background: hovered ? BRAND.navy : `${BRAND.navy}E6`,
            color: BRAND.gold,
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            fontFamily: "'Inter', system-ui, sans-serif",
            transition: "all 0.3s ease",
            backdropFilter: "blur(8px)",
          }}
        >
          {member.tag}
        </div>
      </div>

      {/* Content area */}
      <div style={{ padding: "24px 24px 28px" }}>
        {/* Name */}
        <h3
          style={{
            margin: "0 0 2px",
            fontSize: "20px",
            fontWeight: "700",
            color: BRAND.charcoal,
            fontFamily: "'Playfair Display', Georgia, serif",
            lineHeight: "1.3",
          }}
        >
          {member.name}
        </h3>

        {/* Nickname if different from display */}
        {member.nickname !== member.name.split(" ")[0] && (
          <div
            style={{
              fontSize: "13px",
              color: BRAND.gray,
              fontFamily: "'Inter', system-ui, sans-serif",
              marginBottom: "4px",
            }}
          >
            Goes by {member.nickname}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: "13px",
            fontWeight: "600",
            color: BRAND.gold,
            fontFamily: "'Inter', system-ui, sans-serif",
            letterSpacing: "0.3px",
            marginBottom: "14px",
          }}
        >
          {member.title}
        </div>

        {/* Accent bar */}
        <div
          style={{
            width: hovered ? "60px" : "32px",
            height: "3px",
            background: `linear-gradient(90deg, ${BRAND.gold}, ${BRAND.goldLight})`,
            borderRadius: "2px",
            marginBottom: "14px",
            transition: "width 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        />

        {/* Bio */}
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            lineHeight: "1.65",
            color: BRAND.gray,
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export default function RavingFansTeam() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, ${BRAND.white} 40%, ${BRAND.cream} 100%)`,
        padding: "80px 24px",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* Section header */}
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto 64px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: BRAND.gold,
            marginBottom: "16px",
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          The Team Behind Your Growth
        </div>

        <h2
          style={{
            margin: "0 0 20px",
            fontSize: "42px",
            fontWeight: "700",
            color: BRAND.navy,
            fontFamily: "'Playfair Display', Georgia, serif",
            lineHeight: "1.15",
          }}
        >
          Meet the People Who Turn{" "}
          <span
            style={{
              color: BRAND.gold,
              fontStyle: "italic",
            }}
          >
            Customers
          </span>{" "}
          Into{" "}
          <span
            style={{
              color: BRAND.gold,
              fontStyle: "italic",
            }}
          >
            Raving Fans
          </span>
        </h2>

        <p
          style={{
            margin: 0,
            fontSize: "17px",
            lineHeight: "1.7",
            color: BRAND.gray,
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          A tight crew of specialists — not a bloated agency. Every team member
          is trained on Dan's 27 years of frameworks and methodology.
          When we say we're all-in on your P&L, we mean it.
        </p>

        {/* Transparency note */}
        <div
          style={{
            marginTop: "24px",
            padding: "14px 20px",
            background: `${BRAND.navy}08`,
            borderRadius: "10px",
            borderLeft: `3px solid ${BRAND.gold}`,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              lineHeight: "1.6",
              color: BRAND.gray,
              fontStyle: "italic",
            }}
          >
            Our execution team is powered by AI agents custom-trained on Dan's
            frameworks and methodology — operating under his direct oversight with
            the same standards he's applied across $572M in online revenue.
          </p>
        </div>
      </div>

      {/* Team grid — Dan featured prominently, then 5 team members */}
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
        }}
      >
        {/* Dan — featured card, larger */}
        <div
          style={{
            maxWidth: "520px",
            margin: "0 auto 48px",
          }}
        >
          <TeamCard member={team[0]} index={0} />
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${BRAND.gold}66)`,
            }}
          />
          <div
            style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: BRAND.gold,
              opacity: 0.7,
            }}
          >
            The Crew
          </div>
          <div
            style={{
              width: "60px",
              height: "1px",
              background: `linear-gradient(90deg, ${BRAND.gold}66, transparent)`,
            }}
          />
        </div>

        {/* 5-person grid — responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {team.slice(1).map((member, i) => (
            <TeamCard key={member.nickname} member={member} index={i + 1} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          maxWidth: "560px",
          margin: "72px auto 0",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            color: BRAND.navy,
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            marginBottom: "24px",
            lineHeight: "1.6",
          }}
        >
          "We only take 3–5 clients at a time.
          <br />
          Because depth beats breadth. Every time."
        </p>
        <a
          href="/call"
          style={{
            display: "inline-block",
            padding: "16px 40px",
            background: `linear-gradient(135deg, ${BRAND.navy} 0%, ${BRAND.navyLight} 100%)`,
            color: BRAND.gold,
            fontSize: "14px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            boxShadow: `0 4px 16px ${BRAND.navy}33`,
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          Book a Strategy Call
        </a>
      </div>
    </div>
  );
}
