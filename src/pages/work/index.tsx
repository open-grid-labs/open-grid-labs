import {useEffect, useRef, useState, type CSSProperties, type ReactNode} from "react";
import { Link } from "react-router";
import {motion, useInView} from "motion/react";
import SEO from "../../components/seo";
import {Rocket, ArrowRight, Lightbulb, Code2, Zap, TrendingUp, Shield, Clock, Server} from "lucide-react";

const JOURNEY_PHASES = [
	{
		phase: "01",
		title: "Discovery",
		subtitle: "Idea → Blueprint",
		description:
			"Deep-dive into the founders' vision for software supply chain security. We ran 40+ user interviews, mapped the competitive DevSecOps landscape, and distilled a razor-sharp MVP scope in just 3 weeks.",
		icon: Lightbulb,
		color: "hsl(12,95%,60%)",
		duration: "3 Weeks",
		highlights: ["User Research", "Market Analysis", "MVP Scope"],
	},
	{
		phase: "02",
		title: "Build",
		subtitle: "Blueprint → Product",
		description:
			"A crack squad of engineers built the core engine: deep dependency-tree scanning, taint-analysis-based detection, autonomous remediation workflows, and multi-tenant isolation.",
		icon: Code2,
		color: "hsl(170,100%,45%)",
		duration: "8 Months",
		highlights: ["Dependency Scan", "Taint Analysis", "Auto-Remediation"],
	},
	{
		phase: "03",
		title: "Launch",
		subtitle: "Product → Market",
		description:
			"Deployed on Kubernetes across AWS and OCI, integrated with major git providers, automated compliance evidence collection, and successfully onboarding early design partners.",
		icon: Zap,
		color: "hsl(258,90%,75%)",
		duration: "3 Months",
		highlights: ["Cloud Security", "Git Integration", "SOC 2 Readiness"],
	},
	{
		phase: "04",
		title: "Scale",
		subtitle: "Market → Dominance",
		description:
			"Expanded the platform into Cloud and API security posture management, finalized FedRAMP High/IL7 compliance readiness, and transitioned to a fully scaling enterprise suite.",
		icon: TrendingUp,
		color: "hsl(40,100%,55%)",
		duration: "Ongoing",
		highlights: ["CSPM / ASPM", "FedRAMP High", "Enterprise Scale"],
	},
];

const IMPACT_STATS = [
	{value: "-85%", label: "MTTR Reduction", icon: Clock, color: "hsl(12,95%,60%)"},
	{ value: "90%", label: "False Positives Cut", icon: Shield, color: "hsl(170,100%,45%)" },
	{value: "Full", label: "Transitive Scan", icon: Zap, color: "hsl(258,90%,75%)"},
	{ value: "IL7", label: "Compliance Ready", icon: Shield, color: "hsl(40,100%,55%)" },
];

const TECH_STACK = [
	{ name: "React", color: "hsl(193,95%,68%)" },
	{ name: "TypeScript", color: "hsl(211,60%,48%)" },
	{ name: "Node.js", color: "hsl(120,40%,55%)" },
	{ name: "Go", color: "hsl(193,60%,50%)" },
	{ name: "Python", color: "hsl(207,51%,46%)" },
	{ name: "PostgreSQL", color: "hsl(210,80%,55%)" },
	{ name: "OpenSearch", color: "hsl(28,100%,53%)" },
	{ name: "Redis", color: "hsl(0,68%,42%)" },
	{name: "Kubernetes", color: "hsl(12,95%,60%)"},
	{ name: "AWS", color: "hsl(28,100%,53%)" },
	{ name: "OCI", color: "hsl(0,0%,40%)" },
	{ name: "Docker", color: "hsl(207,100%,48%)" },
];

const ORBIT_RADII = [180, 250, 320];

const CASE_META = [
	{label: "Client", value: "Safeguard.sh"},
	{label: "Duration", value: "18 Months"},
	{label: "Team Size", value: "8 Engineers"},
];

const FLOATING_PANELS = [
	{pos: {top: "5%", left: "10%"}, val: "-85%", lbl: "MTTR", delay: "0s"},
	{pos: {top: "5%", right: "5%"}, val: "90%", lbl: "Accuracy", delay: "1s"},
	{pos: {bottom: "15%", left: "5%"}, val: "FedRAMP", lbl: "Ready", delay: "2s"},
	{pos: {bottom: "10%", right: "10%"}, val: "IL7", lbl: "Compliant", delay: "0.5s"},
];

const HERO_CORNERS = [
	"top-8 left-8 border-l-2 border-t-2 rounded-tl-lg",
	"top-8 right-8 border-r-2 border-t-2 rounded-tr-lg",
	"bottom-8 left-8 border-l-2 border-b-2 rounded-bl-lg",
	"bottom-8 right-8 border-r-2 border-b-2 rounded-br-lg",
];

const PARTICLES = Array.from({length: 30}, () => ({
	size: 2 + Math.random() * 3,
	left: Math.random() * 100,
	top: Math.random() * 100,
	duration: 4 + Math.random() * 6,
	delay: Math.random() * 5,
}));

const WRAP = "w-[90%] max-w-[1600px] mx-auto";
const CORAL = (a: number) => `rgba(249,98,59,${a})`;

/** Hairline that fades in towards `to`. */
const fade = (to: "left" | "right", a = 0.6): CSSProperties => ({
	background: `linear-gradient(to ${to}, transparent, ${CORAL(a)})`,
});

/** Scroll-reveal slide-up style. */
const rise = (on: boolean, delay = 0, y = 30): CSSProperties => ({
	opacity: on ? 1 : 0,
	transform: on ? "translateY(0)" : `translateY(${y}px)`,
	transition: `opacity 0.6s ease ${delay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
});

/** On-mount slide-up for motion elements. */
const enter = (delay: number, y = 30) => ({
	initial: {opacity: 0, y},
	animate: {opacity: 1, y: 0},
	transition: {duration: 0.7, delay},
});

function useReveal<T extends Element>(amount: number) {
	const ref = useRef<T>(null);
	return [ref, useInView(ref, {once: true, amount})] as const;
}

function Glow({className, alpha, style}: { className: string; alpha: number; style?: CSSProperties }) {
	return (
		<div
			className={`absolute rounded-full pointer-events-none ${className}`}
			style={{background: `radial-gradient(circle, ${CORAL(alpha)}, transparent 70%)`, ...style}}
		/>
	);
}

function SectionHeader({eyebrow, sub, children}: { eyebrow: string; sub?: string; children: ReactNode }) {
	return (
		<div className="text-center mb-16">
			<div className="flex items-center justify-center gap-3 mb-4">
				<div className="h-px w-12" style={fade("right")}/>
				<span className="text-xs font-bold tracking-[0.35em] uppercase text-primary/80">{eyebrow}</span>
				<div className="h-px w-12" style={fade("left")}/>
			</div>
			<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">{children}</h2>
			{sub && <p className="mt-4 text-foreground/40 max-w-md mx-auto text-sm">{sub}</p>}
		</div>
	);
}

function StartupHero() {
	const heroRef = useRef<HTMLElement>(null);
	const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

	useEffect(() => {
		const onMove = (e: MouseEvent) => {
			if (!heroRef.current) return;
			const rect = heroRef.current.getBoundingClientRect();
			setMousePos({x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height});
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);

	const titleSize = {fontSize: "clamp(3rem, 10vw, 9rem)"};

	return (
		<section
			ref={heroRef}
			className={`relative ${WRAP} overflow-hidden flex flex-col items-center justify-center mt-2 mb-8 min-h-[85vh]`}
		>
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage: `linear-gradient(${CORAL(0.08)} 1px, transparent 1px), linear-gradient(90deg, ${CORAL(0.08)} 1px, transparent 1px)`,
					backgroundSize: "50px 50px",
					transform: "perspective(600px) rotateX(60deg) translateY(50%)",
					transformOrigin: "bottom center",
					maskImage: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)",
				}}
			/>
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				{PARTICLES.map((p, i) => (
					<div
						key={i}
						className="absolute rounded-full"
						style={{
							width: p.size,
							height: p.size,
							left: `${p.left}%`,
							top: `${p.top}%`,
							background: CORAL(0.5),
							animation: `float-3d ${p.duration}s ease-in-out infinite`,
							animationDelay: `${p.delay}s`,
						}}
					/>
				))}
			</div>
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background: `radial-gradient(ellipse 60% 45% at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${CORAL(0.14)} 0%, transparent 60%)`,
				}}
			/>
			<div
				className="absolute top-0 left-0 right-0 h-px pointer-events-none"
				style={{background: `linear-gradient(90deg, transparent, ${CORAL(0.7)}, transparent)`}}
			/>
			{HERO_CORNERS.map((c) => (
				<div key={c} className={`absolute w-16 h-16 opacity-25 border-primary/60 pointer-events-none ${c}`}/>
			))}
			<Glow
				className="top-[10%] right-[8%] w-[200px] h-[200px] blur-[30px]"
				alpha={0.15}
				style={{animation: "float-3d 8s ease-in-out infinite"}}
			/>
			<Glow
				className="bottom-[15%] left-[5%] w-[150px] h-[150px] blur-[25px]"
				alpha={0.12}
				style={{animation: "float-3d 10s ease-in-out 2s infinite"}}
			/>
			<div
				className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-16"
				style={{
					transform: `perspective(1200px) rotateX(${(mousePos.y - 0.5) * -3}deg) rotateY(${(mousePos.x - 0.5) * 3}deg)`,
					transition: "transform 0.1s ease-out",
				}}
			>
				<motion.div className="flex items-center gap-2 mb-8" {...enter(0, 20)}>
					<div className="h-px w-10" style={fade("right", 0.8)}/>
					<span className="text-xs font-bold tracking-[0.35em] uppercase px-4 py-1.5 rounded-full text-primary bg-primary/10 border border-primary/25 flex items-center gap-2">
						<Rocket className="w-3.5 h-3.5" />
						Startup Co-Builder
					</span>
					<div className="h-px w-10" style={fade("left", 0.8)}/>
				</motion.div>
				<motion.h1
					className="font-bold uppercase tracking-tight leading-none text-foreground"
					style={titleSize}
					{...enter(0.1)}
				>
					Building
				</motion.h1>
				<motion.h2
					className="font-bold uppercase tracking-tight leading-none mt-1 text-primary"
					style={titleSize}
					{...enter(0.2)}
				>
					Startups.
				</motion.h2>
				<motion.p
					className="mt-8 text-base md:text-xl font-light leading-relaxed max-w-2xl text-foreground/50"
					{...enter(0.35, 20)}
				>
					We don't just write code — we{" "}
					<span className="text-foreground/85 font-medium">co-build startups</span>{" "}
					from zero to product-market fit. One founder's vision. Our engineering firepower.{" "}
					<span className="text-foreground/85 font-medium">Real outcomes.</span>
				</motion.p>
				<motion.div
					className="mt-10 h-px w-[clamp(120px,30vw,300px)]"
					style={{background: `linear-gradient(90deg, transparent, ${CORAL(0.5)}, transparent)`}}
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{duration: 0.6, delay: 0.45}}
				/>
			</div>
			<motion.div className="relative z-10 w-full border-t border-foreground/5 backdrop-blur-md" {...enter(0.5)}>
				<div className={`${WRAP} grid grid-cols-2 md:grid-cols-4`}>
					{IMPACT_STATS.map((stat, i) => (
						<div
							key={stat.label}
							className={`flex flex-col items-center justify-center py-7 cursor-default ${i < IMPACT_STATS.length - 1 ? "border-r border-foreground/5" : ""}`}
						>
							<span
								className="text-3xl md:text-4xl font-bold tracking-tight text-primary">{stat.value}</span>
							<span className="text-xs font-semibold tracking-[0.2em] uppercase mt-1 text-foreground/35">
								{stat.label}
							</span>
						</div>
					))}
				</div>
			</motion.div>
			<div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-b from-transparent to-background" />
		</section>
	);
}

function CaseStudyShowcase() {
	const [cardRef, isVisible] = useReveal<HTMLDivElement>(0.15);
	const [isHovered, setIsHovered] = useState(false);
	const [tilt, setTilt] = useState({ x: 0, y: 0 });
	const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		setTilt({
			x: ((y - rect.height / 2) / (rect.height / 2)) * -6,
			y: ((x - rect.width / 2) / (rect.width / 2)) * 6,
		});
		setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
	};

	return (
		<section className={`${WRAP} py-16`}>
			<SectionHeader eyebrow="Featured Case Study">
				From <span className="text-primary">Napkin Sketch</span> to <span className="text-primary">Security Platform</span>
			</SectionHeader>
			<div style={{ perspective: "1500px" }}>
				<Link to="/work/safeguard" className="block no-underline">
					<div
						ref={cardRef}
						onMouseMove={handleMouseMove}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => {
							setIsHovered(false);
							setTilt({ x: 0, y: 0 });
						}}
						className="relative rounded-[32px] overflow-hidden cursor-pointer group min-h-[500px]"
						style={{
							transform: isHovered ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.01)` : "none",
							transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
							opacity: isVisible ? 1 : 0,
						}}
					>
						<div
							className="absolute inset-0 backdrop-blur-[24px]"
							style={{
								backgroundColor: "var(--glass-bg)",
								backgroundImage: isHovered
									? `radial-gradient(ellipse at ${glowPos.x}% ${glowPos.y}%, ${CORAL(0.08)} 0%, transparent 60%)`
									: "none",
							}}
						/>
						<div
							className="absolute inset-0 rounded-[32px] pointer-events-none border-[1.5px] border-primary/15 group-hover:border-primary transition-colors duration-400"/>
						<Glow
							className="-top-[60px] -right-[60px] w-[280px] h-[280px] blur-[30px] transition-transform duration-500 group-hover:scale-120"
							alpha={0.15}
						/>
						<Glow
							className="-bottom-[40px] -left-[40px] w-[200px] h-[200px] blur-[25px] transition-transform duration-500 group-hover:scale-130"
							alpha={0.12}
						/>
						<div className="relative z-10 flex flex-col lg:flex-row gap-8 p-8 md:p-12 lg:p-16">
							<div className="flex-1 flex flex-col justify-center">
								<div className="flex items-center gap-3 mb-6">
									<span
										className="text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full text-primary bg-primary/10 border border-primary/25">
										Cybersecurity · DevSecOps
									</span>
									<span
										className="text-xs font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full text-[var(--color-secondary)] bg-[rgba(0,44,70,0.08)] border border-[rgba(0,44,70,0.2)]">
										Enterprise SaaS
									</span>
								</div>
								<h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-2 text-foreground transition-[text-shadow] duration-300 group-hover:[text-shadow:0_0_40px_rgba(249,98,59,0.3)]">
									Safeguard.sh
								</h3>
								<p className="text-lg md:text-xl font-light leading-relaxed mb-6 italic text-primary">
									Software Supply Chain Security, From Zero to Platform
								</p>
								<p className="text-base md:text-lg leading-relaxed text-foreground/55 mb-8 max-w-xl">
									A comprehensive software supply chain security platform built from the ground up — helping enterprises find, fix, and prevent vulnerabilities before they ever reach production.
								</p>
								<div className="flex flex-wrap gap-6 mb-8">
									{CASE_META.map((item) => (
										<div key={item.label}>
											<span className="text-xs uppercase tracking-[0.2em] text-foreground/30 block mb-1">
												{item.label}
											</span>
											<span className="text-sm font-semibold text-foreground/80">{item.value}</span>
										</div>
									))}
								</div>
								<div
									className="flex items-center gap-3 text-primary opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
									<span className="text-sm font-bold tracking-wide">Read the full case study</span>
									<ArrowRight className="w-4 h-4"/>
								</div>
							</div>
							<div className="flex-1 flex items-center justify-center lg:justify-end">
								<div className="relative w-[min(380px,100%)] h-[380px]" style={{perspective: "800px"}}>
									<div
										className="absolute inset-0 rounded-full border border-foreground/5"
										style={{animation: "spin-y-slow 30s linear infinite"}}
									/>
									<div
										className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
										style={{
											background: `radial-gradient(circle, ${CORAL(0.4)}, ${CORAL(0.1)}, transparent)`,
											boxShadow: `0 0 60px ${CORAL(0.3)}`,
											animation: "pulse-glow 4s ease-in-out infinite",
										}}
									/>
									{FLOATING_PANELS.map((panel) => (
										<div
											key={panel.lbl}
											className="absolute px-4 py-3 rounded-2xl backdrop-blur-md border border-glass-border bg-glass shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
											style={{
												...panel.pos,
												animation: `float-3d 5s ease-in-out ${panel.delay} infinite`
											}}
										>
											<div className="text-lg font-bold text-primary">{panel.val}</div>
											<div className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-semibold">
												{panel.lbl}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
}

function JourneyTimeline() {
	const [activePhase, setActivePhase] = useState(0);
	const [sectionRef, isVisible] = useReveal<HTMLElement>(0.1);
	const phase = JOURNEY_PHASES[activePhase];
	const PhaseIcon = phase.icon;

	return (
		<section ref={sectionRef} className={`${WRAP} py-20`}>
			<SectionHeader eyebrow="The Journey">
				How We <span className="text-primary">Built It</span>
			</SectionHeader>
			<div className="relative mb-12">
				<div className="absolute top-1/2 left-0 right-0 h-px bg-foreground/5 -translate-y-1/2 hidden md:block" />
				<div
					className="absolute top-1/2 left-0 h-px -translate-y-1/2 hidden md:block bg-primary"
					style={{
						width: `${((activePhase + 1) / JOURNEY_PHASES.length) * 100}%`,
						transition: "width 0.5s cubic-bezier(0.16,1,0.3,1)",
						boxShadow: `0 0 20px ${CORAL(0.4)}`,
					}}
				/>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
					{JOURNEY_PHASES.map((p, i) => {
						const Icon = p.icon;
						const isActive = i === activePhase;
						return (
							<button
								key={p.phase}
								onClick={() => setActivePhase(i)}
								className="flex flex-col items-center gap-3 py-4 cursor-pointer bg-transparent border-none"
								style={rise(isVisible, i * 0.1, 20)}
							>
								<div
									className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 backdrop-blur-[12px]"
									style={{
										background: isActive ? `${p.color}20` : "var(--glass-bg)",
										border: `1.5px solid ${isActive ? `${p.color}50` : "var(--glass-border)"}`,
										boxShadow: isActive ? `0 0 30px ${p.color}30` : "none",
									}}
								>
									<Icon
										className="w-6 h-6 transition-colors duration-300"
										style={{color: isActive ? p.color : "var(--color-foreground)"}}
									/>
								</div>
								<div className="text-center">
									<div
										className="text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-300"
										style={{color: isActive ? p.color : "var(--color-muted-foreground)"}}
									>
										Phase {p.phase}
									</div>
									<div
										className={`text-sm font-bold mt-0.5 transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground"}`}
									>
										{p.title}
									</div>
								</div>
							</button>
						);
					})}
				</div>
			</div>
			<div
				className="relative rounded-[28px] overflow-hidden backdrop-blur-[20px] bg-glass"
				style={{border: `1px solid ${phase.color}20`}}
			>
				<div
					className="absolute top-0 left-0 right-0 h-px"
					style={{background: `linear-gradient(90deg, transparent, ${phase.color}80, transparent)`}}
				/>
				<div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row gap-8">
					<div className="flex-1">
						<div className="flex items-center gap-4 mb-6">
							<div
								className="w-16 h-16 rounded-2xl flex items-center justify-center"
								style={{
									background: `${phase.color}15`,
									border: `1px solid ${phase.color}30`,
									boxShadow: `0 0 40px ${phase.color}20`,
								}}
							>
								<PhaseIcon className="w-8 h-8" style={{color: phase.color}}/>
							</div>
							<div>
								<span className="text-xs font-bold tracking-[0.3em] uppercase"
								      style={{color: phase.color}}>
									Phase {phase.phase} &middot; {phase.duration}
								</span>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1">{phase.title}</h3>
								<p className="text-sm text-foreground/50">{phase.subtitle}</p>
							</div>
						</div>
						<p className="text-base md:text-lg leading-relaxed text-foreground/60 mb-8 max-w-xl">
							{phase.description}
						</p>
						<div className="flex flex-wrap gap-3">
							{phase.highlights.map((h) => (
								<span
									key={h}
									className="px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase"
									style={{
										color: phase.color,
										background: `${phase.color}10`,
										border: `1px solid ${phase.color}25`,
									}}
								>
									{h}
								</span>
							))}
						</div>
					</div>
					<div className="flex-shrink-0 flex-col items-center gap-4 py-4 hidden lg:flex">
						{JOURNEY_PHASES.map((p, dot) => (
							<div
								key={p.phase}
								className="w-2 h-2 rounded-full transition-all duration-300"
								style={{
									background: dot <= activePhase ? phase.color : "var(--color-border)",
									boxShadow: dot <= activePhase ? `0 0 12px ${phase.color}50` : "none",
								}}
							/>
						))}
						<div className="flex-1 w-px"
						     style={{background: `linear-gradient(to bottom, ${phase.color}30, transparent)`}}/>
					</div>
				</div>
			</div>
		</section>
	);
}

function ImpactDashboard() {
	const [sectionRef, isVisible] = useReveal<HTMLElement>(0.2);

	return (
		<section ref={sectionRef} className={`${WRAP} py-20`}>
			<SectionHeader eyebrow="The Impact">
				Results That <span className="text-primary">Speak</span>
			</SectionHeader>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{IMPACT_STATS.map((stat, i) => {
					const Icon = stat.icon;
					return (
						<div
							key={stat.label}
							className="relative rounded-[24px] overflow-hidden group cursor-default"
							style={rise(isVisible, i * 0.1)}
						>
							<div
								className="absolute inset-0 rounded-[24px] backdrop-blur-[16px] bg-glass border border-glass-border"/>
							<div
								className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-primary"
								style={{background: `radial-gradient(circle at 50% 50%, ${CORAL(0.1)}, transparent 70%)`}}
							/>
							<div
								className="absolute top-0 left-[20%] right-[20%] h-px pointer-events-none group-hover:left-[10%] group-hover:right-[10%] transition-all duration-500"
								style={{background: `linear-gradient(90deg, transparent, ${CORAL(0.8)}, transparent)`}}
							/>
							<div className="relative z-10 p-8 flex flex-col items-center text-center">
								<div
									className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
									style={{background: `${stat.color}12`, border: `1px solid ${stat.color}25`}}
								>
									<Icon className="w-6 h-6" style={{ color: stat.color }} />
								</div>
								<span
									className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-primary">{stat.value}</span>
								<span
									className="text-xs font-bold tracking-[0.25em] uppercase text-foreground/35">{stat.label}</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

function TechStackOrbit() {
	const [sectionRef, isVisible] = useReveal<HTMLElement>(0.15);

	return (
		<section ref={sectionRef} className={`${WRAP} py-20`}>
			<SectionHeader
				eyebrow="Arsenal"
				sub="The cutting-edge technologies that powered Safeguard.sh from prototype to production."
			>
				Tech <span className="text-primary">Stack</span>
			</SectionHeader>
			<div
				className="relative mx-auto flex items-center justify-center w-[min(600px,90vw)] h-[min(600px,90vw)] transition-opacity duration-800"
				style={{opacity: isVisible ? 1 : 0}}
			>
				{ORBIT_RADII.map((radius, ri) => (
					<div
						key={radius}
						className="absolute rounded-full"
						style={{
							width: radius * 2,
							height: radius * 2,
							top: `calc(50% - ${radius}px)`,
							left: `calc(50% - ${radius}px)`,
							border: `1px solid ${CORAL(0.08 + ri * 0.03)}`,
						}}
					/>
				))}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
					<div
						className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
						style={{
							background: `radial-gradient(circle, ${CORAL(0.2)}, transparent)`,
							boxShadow: `0 0 50px ${CORAL(0.2)}`,
							animation: "pulse-glow 4s ease-in-out infinite",
						}}
					>
						<Server className="w-8 h-8 text-primary" />
					</div>
					<span className="text-xs font-bold tracking-[0.3em] uppercase text-foreground/40">Safeguard</span>
				</div>
				{TECH_STACK.map((tech, i) => {
					const angle = (i / TECH_STACK.length) * 2 * Math.PI;
					const radius = ORBIT_RADII[i % 3];
					const delay = 0.3 + i * 0.08;
					return (
						<div
							key={tech.name}
							className="absolute group cursor-default z-10"
							style={{
								top: `calc(50% + ${Math.sin(angle) * radius}px - 32px)`,
								left: `calc(50% + ${Math.cos(angle) * radius}px - 32px)`,
								opacity: isVisible ? 1 : 0,
								transform: isVisible ? "scale(1)" : "scale(0)",
								transition: `opacity 0.5s ease ${delay}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
							}}
						>
							<div
								className="w-16 h-16 rounded-full flex items-center justify-center text-xs font-extrabold tracking-wide uppercase transition-all duration-300 group-hover:scale-125 bg-glass backdrop-blur-[12px]"
								style={{
									border: `2px solid ${tech.color}`,
									color: tech.color,
									boxShadow: `0 8px 32px -8px rgba(0,0,0,0.12), 0 0 15px ${tech.color}25`,
								}}
								title={tech.name}
							>
								{tech.name.slice(0, 3)}
							</div>
							<div
								className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-glass border border-glass-border backdrop-blur-[8px]"
								style={{color: tech.color}}
							>
								{tech.name}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

function StartupCTA() {
	const [sectionRef, isVisible] = useReveal<HTMLElement>(0.2);

	return (
		<section ref={sectionRef} className={`${WRAP} py-20 mb-16`}>
			<div className="relative rounded-[32px] overflow-hidden" style={rise(isVisible)}>
				<div
					className="absolute inset-0 rounded-[32px] bg-primary/8 border border-primary/15 backdrop-blur-[24px]"/>
				<Glow className="-top-[80px] -left-[80px] w-[300px] h-[300px] blur-[40px]" alpha={0.15}/>
				<Glow className="-bottom-[60px] -right-[60px] w-[250px] h-[250px] blur-[35px]" alpha={0.12}/>
				<div className="relative z-10 p-12 md:p-20 text-center">
					<div
						className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-8 bg-primary/12 border border-primary/25 shadow-[0_0_40px_rgba(249,98,59,0.2)]">
						<Rocket className="w-8 h-8 text-primary" />
					</div>
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
						Ready to Build <span className="text-primary">Your Startup?</span>
					</h2>
					<p className="text-foreground/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
						Whether you're a first-time founder with a napkin sketch or a Series A company
						ready to scale — we're the engineering partner you've been looking for.
					</p>
					<Link
						to="/contact-us"
						className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold tracking-wide uppercase no-underline transition-all duration-300 group hover:scale-105 bg-primary text-white shadow-[0_8px_40px_rgba(249,98,59,0.4),0_0_0_1px_rgba(249,98,59,0.2)]"
					>
						Let's Talk
						<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</section>
	);
}

export default function Work() {
	return (
		<>
			<SEO
				title="Our Work - Building Startups from Zero to Scale"
				description="See how OpenGridLabs co-builds startups from idea to product-market fit. Explore our featured case study: Safeguard.sh — Software Supply Chain Security, From Zero to Platform."
				canonical="/work"
				keywords="startup builder, case study, startup co-builder, MVP development, SaaS platform, Cybersecurity, DevSecOps, supply chain security, FedRAMP, SOC 2"
			/>
			<StartupHero />
			<CaseStudyShowcase />
			<JourneyTimeline />
			<ImpactDashboard />
			<TechStackOrbit />
			<StartupCTA />
		</>
	);
}
