import {useEffect, useState, type FormEvent} from "react";
import {motion} from "motion/react";
import {ArrowRight, Sparkles, Server, Zap, FileText} from "lucide-react";
import {Link} from "react-router";
import {openCalendly} from "../../utils/calendly";
import {inView} from "../../utils/motion";

/* Placeholder ideas that cycle in the idea box */
const exampleIdeas = [
	"an app that matches dog owners for group walks",
	"a booking tool for home bakers",
	"AI that turns lecture notes into flashcards",
	"a marketplace for pre-loved camera gear",
	"a tiny CRM for freelance designers",
];

/* Honest, verifiable promises — shown under the hero */
const promises = [
	{value: "90", unit: "days", label: "Idea → MVP tested in market", bg: "bg-primary", rotate: "-2deg"},
	{value: "100", unit: "%", label: "Server uptime on our infra", bg: "bg-mint", rotate: "1.5deg"},
	{value: "$0", unit: "", label: "Hosting till your first customer", bg: "bg-accent", rotate: "-1deg"},
	{value: "1", unit: "/week", label: "Progress report, every week", bg: "bg-lilac", rotate: "2deg"},
];

const stickers = [
	{
		icon: Server,
		label: "Free servers",
		bg: "bg-accent",
		position: "right-[2%] top-[20%] sm:right-[4%] sm:top-[6%]",
		rotate: "6deg",
		delay: "0s"
	},
	{
		icon: Zap,
		label: "AI-powered",
		bg: "bg-lilac",
		position: "left-[6%] bottom-[16%]",
		rotate: "-5deg",
		delay: "1.2s"
	},
	{
		icon: FileText,
		label: "Weekly reports",
		bg: "bg-mint",
		position: "left-[36%] top-[-2%]",
		rotate: "-3deg",
		delay: "2.1s"
	},
];

const marqueeItems = [
	"Idea → MVP in 90 days",
	"Free servers till your first customer",
	"100% uptime",
	"Weekly reports",
	"Powered by AI & LLMs",
	"First customers, not just code",
];

function useCyclingPlaceholder(items: string[], interval = 3200) {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
		return () => clearInterval(id);
	}, [items.length, interval]);
	return items[index];
}

/* Hand-drawn underline swash */
function Swash({className = ""}: { className?: string }) {
	return (
		<svg viewBox="0 0 300 24" preserveAspectRatio="none" className={className} aria-hidden>
			<motion.path
				d="M4 16 C 60 4, 120 22, 180 10 S 270 6, 296 14"
				fill="none"
				stroke="currentColor"
				strokeWidth="7"
				strokeLinecap="round"
				initial={{pathLength: 0}}
				animate={{pathLength: 1}}
				transition={{duration: 0.9, delay: 0.7, ease: "easeInOut"}}
			/>
		</svg>
	);
}

/* The playful "napkin → live product" illustration on the right */
function IdeaToMvpVisual() {
	return (
		<div className="relative w-[92%] sm:w-full max-w-[520px] aspect-square mx-auto select-none" aria-hidden>
			{/* Napkin sketch */}
			<motion.div
				initial={{opacity: 0, rotate: -14, y: 20}}
				animate={{opacity: 1, rotate: -8, y: 0}}
				transition={{duration: 0.6, delay: 0.3}}
				className="absolute left-0 top-[4%] w-[54%] aspect-square bg-card pop rounded-2xl p-5 bg-grid-paper"
			>
				<p className="font-hand text-2xl text-foreground/80 leading-none">my big idea!!</p>
				<svg viewBox="0 0 160 120" className="w-full mt-3 text-foreground/70">
					<rect x="10" y="8" width="140" height="100" rx="10" fill="none" stroke="currentColor"
					      strokeWidth="2.5" strokeDasharray="6 5"/>
					<circle cx="40" cy="40" r="14" fill="none" stroke="currentColor" strokeWidth="2.5"/>
					<path d="M64 34 h60 M64 48 h40 M24 78 h110 M24 92 h70" stroke="currentColor" strokeWidth="2.5"
					      strokeLinecap="round"/>
				</svg>
				<span className="absolute -bottom-4 right-4 font-hand text-xl text-primary rotate-[-4deg]">v0.0.1</span>
			</motion.div>

			{/* Dashed arrow */}
			<svg viewBox="0 0 120 80" className="absolute left-[40%] top-[38%] w-[26%] text-foreground/60">
				<motion.path
					d="M6 10 C 40 0, 80 20, 100 60"
					fill="none"
					stroke="currentColor"
					strokeWidth="3"
					strokeDasharray="7 6"
					strokeLinecap="round"
					initial={{pathLength: 0}}
					animate={{pathLength: 1}}
					transition={{duration: 0.8, delay: 0.9}}
				/>
				<path d="M88 58 L102 64 L104 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
				      strokeLinejoin="round"/>
			</svg>

			{/* Live MVP browser window */}
			<motion.div
				initial={{opacity: 0, rotate: 10, y: 30}}
				animate={{opacity: 1, rotate: 3, y: 0}}
				transition={{duration: 0.6, delay: 0.55}}
				className="absolute right-0 bottom-[2%] w-[70%] bg-card pop-lg rounded-2xl overflow-hidden"
			>
				<div className="flex items-center gap-1.5 px-4 py-2.5 border-b-2 border-ink bg-muted">
					<span className="w-3 h-3 rounded-full bg-primary border border-ink"/>
					<span className="w-3 h-3 rounded-full bg-accent border border-ink"/>
					<span className="w-3 h-3 rounded-full bg-mint border border-ink"/>
					<span className="ml-3 text-[11px] font-mono text-muted-foreground truncate">yourstartup.com</span>
				</div>
				<div className="p-5 flex flex-col gap-3">
					<div className="flex items-center justify-between">
						<div className="h-3 w-24 rounded-full bg-foreground/80"/>
						<span
							className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-mint text-candy border border-ink">
							<span className="w-1.5 h-1.5 rounded-full bg-candy animate-blink"/> Live
						</span>
					</div>
					<div className="h-2.5 w-[85%] rounded-full bg-foreground/15"/>
					<div className="h-2.5 w-[65%] rounded-full bg-foreground/15"/>
					<div className="grid grid-cols-3 gap-2 mt-2">
						<div className="h-14 rounded-lg bg-lilac border-2 border-ink"/>
						<div className="h-14 rounded-lg bg-accent border-2 border-ink"/>
						<div className="h-14 rounded-lg bg-sky border-2 border-ink"/>
					</div>
					<div className="h-9 w-32 rounded-full bg-primary border-2 border-ink mt-1"/>
				</div>
			</motion.div>

			{stickers.map(({icon: Icon, label, bg, position, rotate, delay}) => (
				<div key={label} className={`absolute animate-bob ${position}`}
				     style={{["--r" as string]: rotate, animationDelay: delay}}>
					<div
						className={`${bg} pop rounded-full px-4 py-2 text-sm font-bold text-candy flex items-center gap-2`}>
						<Icon size={16}/> {label}
					</div>
				</div>
			))}
		</div>
	);
}

const Hero = () => {
	const [idea, setIdea] = useState("");
	const placeholder = useCyclingPlaceholder(exampleIdeas);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		openCalendly(idea);
	};

	return (
		<div>
			<section
				id="home-hero"
				aria-label="Hero – Co-build your startup"
				className="relative w-full overflow-hidden bg-dots"
			>
				{/* Soft colour blobs */}
				<div
					className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-accent/30 blur-[110px] pointer-events-none"/>
				<div
					className="absolute top-1/3 -right-32 w-[460px] h-[460px] rounded-full bg-lilac/40 blur-[120px] pointer-events-none"/>
				<div
					className="absolute -bottom-40 left-1/3 w-[380px] h-[380px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"/>

				<div
					className="relative z-10 w-[90%] max-w-[1400px] mx-auto pt-12 md:pt-16 pb-16 grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-10 items-center">
					{/* ── Copy ── */}
					<div className="flex flex-col items-start">
						<motion.div
							initial={{opacity: 0, y: -12}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.5}}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card pop text-sm font-semibold mb-8 rotate-[-1.5deg]"
						>
							<Sparkles size={16} className="text-primary"/>
							We co-build startups. From napkin to product.
						</motion.div>

						<h1 className="font-display font-extrabold tracking-tight leading-[0.98] text-[2.9rem] sm:text-6xl lg:text-7xl xl:text-[5.4rem] mb-7">
							<motion.span
								className="block"
								initial={{opacity: 0, y: 30}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.6, delay: 0.1}}
							>
								Got an idea?
							</motion.span>
							<motion.span
								className="block"
								initial={{opacity: 0, y: 30}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.6, delay: 0.25}}
							>
								Let's make it{" "}
								<span className="relative inline-block">
									<span className="relative z-10">real</span>
									<Swash className="absolute left-0 -bottom-1 w-full h-4 text-primary"/>
								</span>
							</motion.span>
							<motion.span
								className="block"
								initial={{opacity: 0, y: 30}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.6, delay: 0.4}}
							>
								in{" "}
								<span className="inline-block bg-accent text-candy px-3 rounded-2xl pop rotate-[-2deg]">
									90 days.
								</span>
							</motion.span>
						</h1>

						<motion.p
							initial={{opacity: 0, y: 16}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: 0.55}}
							className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-9"
						>
							We analyse your idea, map the budget, build the MVP, help you land your first customers
							— and stick around to scale it. <strong className="text-foreground font-semibold">Servers
							are on us till your first customer.</strong>
						</motion.p>

						{/* Idea box */}
						<motion.form
							onSubmit={handleSubmit}
							initial={{opacity: 0, y: 16}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: 0.7}}
							className="w-full max-w-xl bg-card pop-lg rounded-3xl p-2 flex flex-col sm:flex-row gap-2"
						>
							<label htmlFor="hero-idea" className="sr-only">Describe your startup idea</label>
							<div className="flex-1 flex items-center gap-2 px-4">
								<span className="font-hand text-xl text-primary shrink-0">My idea is</span>
								<input
									id="hero-idea"
									value={idea}
									onChange={(e) => setIdea(e.target.value)}
									placeholder={placeholder}
									className="w-full bg-transparent py-3 outline-none text-foreground placeholder:text-muted-foreground/70 text-base"
								/>
							</div>
							<button
								type="submit"
								className="pop pop-hover bg-primary text-primary-foreground font-semibold rounded-2xl px-6 py-3.5 inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
							>
								Let's talk <ArrowRight size={18}/>
							</button>
						</motion.form>

						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							transition={{duration: 0.5, delay: 0.85}}
							className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm text-muted-foreground"
						>
							<span>Free 30-min call · no pitch deck needed</span>
							<Link to="/services"
							      className="font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors">
								See how it works →
							</Link>
						</motion.div>
					</div>

					{/* ── Visual ── */}
					<IdeaToMvpVisual/>
				</div>

				{/* ── Promises ── */}
				<div className="relative z-10 w-[90%] max-w-[1400px] mx-auto pb-16">
					<p className="font-hand text-2xl md:text-3xl text-center mb-8 text-foreground/80">
						No logo wall. No made-up numbers. Just what we promise — and deliver.
					</p>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
						{promises.map((p, i) => (
							<motion.div
								key={p.label}
								{...inView(i * 0.08)}
								whileHover={{rotate: 0, scale: 1.03}}
								style={{rotate: p.rotate}}
								className={`${p.bg} pop rounded-3xl p-5 md:p-7 text-candy`}
							>
								<div className="font-display font-extrabold text-4xl md:text-6xl leading-none">
									{p.value}
									<span className="text-xl md:text-2xl font-bold ml-1">{p.unit}</span>
								</div>
								<p className="mt-3 text-sm md:text-base font-semibold leading-snug">{p.label}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ── Marquee ── */}
			<div
				className="w-full bg-candy text-paper border-y-2 border-ink overflow-hidden py-4 -rotate-1 scale-[1.02]">
				<div className="flex w-max animate-marquee">
					{[...marqueeItems, ...marqueeItems].map((item, i) => (
						<span key={i}
						      className="flex items-center font-display font-bold text-xl md:text-2xl px-6 whitespace-nowrap">
							{item}
							<span className="ml-12 text-accent">✦</span>
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Hero;
