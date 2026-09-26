import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import PageHeading from "../../../../components/page-heading/index.tsx";
import ButtonLink from "../../../../components/ui/button-link.tsx";
import Button from "../../../../components/ui/button.tsx";
import { Code2, Brain, Palette, ArrowUpRight, Cloud } from "lucide-react";

declare global {
  interface Window {
    Calendly: { initPopupWidget: (options: { url: string }) => void };
  }
}

// ── Service Data ──────────────────────────────────────────────
const categories = [
  {
    id: "validation-mvp",
    label: "Validation & MVP",
    icon: Brain,
    color: "from-blue-500 to-cyan-400",
    glowColor: "hsla(210, 100%, 50%, 0.15)",
    accentClass: "text-blue-600 dark:text-blue-400",
    borderAccent: "border-blue-600/30 dark:border-blue-400/30",
    bgAccent: "bg-blue-600/10 dark:bg-blue-400/10",
    heading: "Validation & MVP",
    tagline: "Idea to launch in weeks.",
    description: "We help early-stage founders validate product hypotheses, design high-fidelity interactive prototypes, and build scalable MVPs to acquire early users and secure funding.",
    link: "/services/product-engineering",
    cta: "Build Your MVP",
    capabilities: [
      { name: "Product Scoping", detail: "Define the core value proposition" },
      { name: "UX/UI Prototyping", detail: "Interactive screens before coding" },
      { name: "Rapid MVP Engineering", detail: "Production-ready launch in weeks" },
      { name: "Investor Demos", detail: "Pitch-ready software & deck assets" },
      { name: "Fractional CTO", detail: "Technical roadmap & tech-stack choices" },
    ],
  },
  {
    id: "scale-growth",
    label: "Scale & Growth",
    icon: Cloud,
    color: "from-violet-500 to-fuchsia-400",
    glowColor: "hsla(280, 100%, 60%, 0.15)",
    accentClass: "text-violet-600 dark:text-violet-400",
    borderAccent: "border-violet-600/30 dark:border-violet-400/30",
    bgAccent: "bg-violet-600/10 dark:bg-violet-400/10",
    heading: "Scale & Growth",
    tagline: "Unconstrained technical scaling.",
    description: "For startups with traction, we scale the codebase. We optimize performance, build advanced backend architectures, and automate cloud systems to support rapid user acquisition.",
    link: "/services/cloud-platform",
    cta: "Scale Your Product",
    capabilities: [
      { name: "Performance Optimization", detail: "Eliminate page latency & bottlenecks" },
      { name: "Cloud Auto-Scaling", detail: "Robust AWS/GCP server configurations" },
      { name: "API & Integration Scale", detail: "Fast, secure REST & GraphQL endpoints" },
      { name: "Database Tuning", detail: "Accelerate query & indexing times" },
      { name: "Continuous Delivery", detail: "Rigorous CI/CD pipelines & quality check" },
    ],
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    icon: Code2,
    color: "from-orange-500 to-amber-400",
    glowColor: "hsla(30, 100%, 50%, 0.15)",
    accentClass: "text-orange-600 dark:text-orange-400",
    borderAccent: "border-orange-600/30 dark:border-orange-400/30",
    bgAccent: "bg-orange-600/10 dark:bg-orange-400/10",
    heading: "AI & Automation",
    tagline: "Automate operations. Embed AI.",
    description: "Embed intelligence to lower startup operational costs. We build custom LLM workflows, conversational bots, and automated process pipelines that give you an unfair advantage.",
    link: "/services/ai-data",
    cta: "Explore AI Solutions",
    capabilities: [
      { name: "Custom LLM Agents", detail: "Intelligent conversational interfaces" },
      { name: "Workflow Automation", detail: "Reduce operational overhead by 80%" },
      { name: "Predictive Analytics", detail: "Custom models for churn & sales trend" },
      { name: "Vector Databases", detail: "Semantic search & memory setup" },
      { name: "MLOps & Deployments", detail: "Train & host cost-effective models" },
    ],
  },
  {
    id: "growth-design",
    label: "Growth Design",
    icon: Palette,
    color: "from-emerald-400 to-teal-400",
    glowColor: "hsla(160, 80%, 50%, 0.15)",
    accentClass: "text-emerald-600 dark:text-emerald-400",
    borderAccent: "border-emerald-600/30 dark:border-emerald-400/30",
    bgAccent: "bg-emerald-600/10 dark:bg-emerald-400/10",
    heading: "Growth Design",
    tagline: "Interfaces designed to convert.",
    description: "A product is only as good as its activation rate. We design premium design systems and onboarding flows that maximize visitor conversion and active user retention.",
    link: "/services/digital-experience",
    cta: "Optimize Conversion",
    capabilities: [
      { name: "Brand & Identity Systems", detail: "Vibrant, memorable visual presence" },
      { name: "User Onboarding Design", detail: "Frictionless sign-ups & product tour" },
      { name: "Design Systems", detail: "Reusable component kits in Figma & code" },
      { name: "Conversion Audits", detail: "A/B testing & page layout optimization" },
      { name: "Interactive Micro-Animations", detail: "Delightful animations that engage" },
    ],
  },
];

export default function HomeServices() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = categories[activeIdx];

  const handleBookCall = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/opengridlabs/30min?hide_landing_page_details=1&hide_gdpr_banner=1",
      });
    }
  };

  return (
    <section
      id="home-services"
      className="w-full flex flex-col items-center relative py-24 overflow-hidden"
    >
      {/* Ambient glow that shifts with active category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id + "-glow"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none -z-10"
        >
          <div
            className="absolute top-[30%] left-[20%] w-[600px] h-[600px] rounded-full blur-[200px]"
            style={{ background: active.glowColor }}
          />
          <div
            className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full blur-[150px]"
            style={{ background: active.glowColor }}
          />
        </motion.div>
      </AnimatePresence>

      <PageHeading
        preTitle="Core"
        mainTitle="Capabilities"
        postTitle="& Expertise"
      />

      <div className="w-[90%] max-w-[1600px] mx-auto mt-16">
        {/* ── Tab Selectors ─────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat, idx) => {
            const isActive = idx === activeIdx;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveIdx(idx)}
                className={`
                  relative flex items-center gap-3 px-6 py-3.5 rounded-full
                  font-medium text-sm md:text-base
                  transition-all duration-500 cursor-pointer
                  border backdrop-blur-md
                  ${
                    isActive
                      ? `${cat.borderAccent} ${cat.bgAccent} text-foreground shadow-lg`
                      : "border-black/10 dark:border-transparent bg-white/50 dark:bg-foreground/5 text-foreground/70 dark:text-foreground/50 hover:text-foreground/80 hover:border-black/20 dark:border-transparent"
                  }
                `}
              >
                <Icon size={18} className={isActive ? cat.accentClass : ""} />
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="services-tab-indicator"
                    className={`absolute inset-0 rounded-full border ${cat.borderAccent} pointer-events-none`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Content Panel ─────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 glass-panel rounded-[40px] border border-black/5 dark:border-transparent overflow-hidden shadow-lg dark:shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              
              {/* ── Left: Hero Content ──────────────────────── */}
              <div className="lg:col-span-5 p-10 md:p-14 lg:p-16 flex flex-col justify-between relative">
                {/* Top accent line */}
                <div className={`absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent`} />
                
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className={`font-mono text-xs tracking-[0.3em] uppercase mb-6 ${active.accentClass}`}
                  >
                    {active.tagline}
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground tracking-tight leading-[1.1] mb-8"
                  >
                    {active.heading.split(" ").map((word, i) => (
                      <span key={i}>
                        {i === 0 ? (
                          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${active.color}`}>
                            {word}
                          </span>
                        ) : (
                          <> {word}</>
                        )}
                      </span>
                    ))}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="text-lg text-foreground/80 dark:text-foreground/60 font-light leading-relaxed mb-12"
                  >
                    {active.description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  {active.id === "validation-mvp" ? (
                    <Button onClick={handleBookCall} className="w-fit">
                      {active.cta}
                    </Button>
                  ) : (
                    <ButtonLink to={active.link} className="w-fit">
                      {active.cta}
                    </ButtonLink>
                  )}
                </motion.div>
              </div>

              {/* ── Right: Capabilities List ────────────────── */}
              <div className="lg:col-span-7 p-10 md:p-14 lg:p-16 lg:border-l border-t lg:border-t-0 border-black/5 dark:border-transparent bg-foreground/[0.02] relative">
                <div className="space-y-0">
                  {active.capabilities.map((cap, i) => (
                    <motion.div
                      key={cap.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.08,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group/row flex items-center justify-between py-6 border-b border-black/5 dark:border-transparent last:border-b-0 cursor-default"
                    >
                      <div className="flex items-center gap-6">
                        {/* Animated index number */}
                        <span className={`font-mono text-sm ${active.accentClass} opacity-40 group-hover/row:opacity-100 transition-opacity w-8`}>
                          0{i + 1}
                        </span>
                        
                        <div>
                          <h4 className={`text-xl md:text-2xl font-semibold text-foreground transition-all duration-300 group-hover/row:bg-clip-text group-hover/row:text-transparent group-hover/row:bg-gradient-to-r ${active.color}`}>
                            {cap.name}
                          </h4>
                          <p className="text-sm text-foreground/80 dark:text-foreground/60 dark:text-foreground/40 group-hover/row:text-foreground/80 dark:text-foreground/60 transition-colors mt-1">
                            {cap.detail}
                          </p>
                        </div>
                      </div>

                      {/* Hover arrow */}
                      <div className="opacity-0 group-hover/row:opacity-100 transition-all duration-300 translate-x-2 group-hover/row:translate-x-0">
                        <ArrowUpRight size={20} className={active.accentClass} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
