import {useState} from "react";
import {motion, AnimatePresence} from "motion/react";
import {Check, Gift, Rocket} from "lucide-react";
import {stages} from "../../../../data/journey";
import SectionHeading from "../../../../components/section-heading";

export default function HomeJourney() {
	const [activeIdx, setActiveIdx] = useState(0);
	const active = stages[activeIdx];
	const Icon = active.icon;
	const progress = (activeIdx / (stages.length - 1)) * 100;

	return (
		<section id="home-journey" className="w-[90%] max-w-[1400px] mx-auto py-8 md:py-12">
			<SectionHeading
				kicker="What we do"
				title={<>Five stops from <span className="text-primary">idea</span> to <span
					className="bg-mint text-candy px-2 rounded-xl">scale</span>.</>}
				subtitle="Hop on at any stop. Most founders start at the first one — the cheapest place to find out if an idea is worth building."
			/>

			{/* ── Track ── */}
			<div className="relative mt-16 md:mt-20 mb-10">
				{/* Base line */}
				<div
					className="absolute left-[10%] right-[10%] top-7 md:top-9 h-2 rounded-full bg-muted border-2 border-ink"/>
				{/* Progress fill */}
				<motion.div
					className="absolute left-[10%] top-7 md:top-9 h-2 rounded-full bg-primary border-2 border-ink origin-left"
					animate={{width: `${progress * 0.8}%`}}
					transition={{type: "spring", stiffness: 120, damping: 20}}
				/>
				{/* Rocket rider */}
				<motion.div
					className="absolute -top-7 md:-top-6 -translate-x-1/2 hidden sm:block"
					animate={{left: `${10 + progress * 0.8}%`}}
					transition={{type: "spring", stiffness: 120, damping: 20}}
				>
					<Rocket className="text-primary rotate-45" size={26}/>
				</motion.div>

				<div className="relative grid grid-cols-5">
					{stages.map((s, i) => {
						const StageIcon = s.icon;
						const isActive = i === activeIdx;
						const isDone = i < activeIdx;
						return (
							<button
								key={s.id}
								onClick={() => setActiveIdx(i)}
								className="flex flex-col items-center gap-3 cursor-pointer group"
								aria-pressed={isActive}
							>
								<motion.span
									animate={{scale: isActive ? 1.12 : 1, rotate: isActive ? -6 : 0}}
									transition={{type: "spring", stiffness: 300, damping: 18}}
									className={`w-14 h-14 md:w-[72px] md:h-[72px] rounded-2xl pop flex items-center justify-center text-candy ${
										isActive || isDone ? s.bg : "bg-card"
									} group-hover:-translate-y-1 transition-transform`}
								>
									<StageIcon size={26} className={isActive || isDone ? "" : "text-foreground"}/>
								</motion.span>
								<span className="font-mono text-xs text-muted-foreground">{s.step}</span>
								<span
									className={`hidden md:block text-sm lg:text-base font-display font-bold text-center leading-tight max-w-[150px] ${
										isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
									}`}
								>
									{s.title}
								</span>
							</button>
						);
					})}
				</div>
			</div>

			{/* ── Stage panel ── */}
			<AnimatePresence mode="wait">
				<motion.div
					key={active.id}
					initial={{opacity: 0, y: 24, rotate: -0.6}}
					animate={{opacity: 1, y: 0, rotate: 0}}
					exit={{opacity: 0, y: -16}}
					transition={{duration: 0.35, ease: [0.22, 1, 0.36, 1]}}
					className="bg-card pop-lg rounded-[32px] overflow-hidden grid lg:grid-cols-[1.1fr_1fr]"
				>
					<div className="p-8 md:p-12 flex flex-col gap-6">
						<div className="flex flex-wrap items-center gap-3">
							<span
								className={`${active.bg} text-candy pop rounded-full px-4 py-1.5 text-sm font-bold inline-flex items-center gap-2`}>
								<Icon size={16}/> Stop {active.step}
							</span>
							<span className="font-hand text-2xl text-muted-foreground">{active.nickname}</span>
							<span className="ml-auto text-sm font-mono text-muted-foreground">{active.when}</span>
						</div>
						<h3 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">{active.title}</h3>
						<p className="text-lg text-muted-foreground leading-relaxed">{active.summary}</p>

						<ul className="grid sm:grid-cols-2 gap-3 mt-2">
							{active.weDo.map((item) => (
								<li key={item} className="flex items-start gap-3">
									<span
										className={`${active.bg} mt-0.5 w-6 h-6 shrink-0 rounded-full border-2 border-ink flex items-center justify-center text-candy`}>
										<Check size={14} strokeWidth={3}/>
									</span>
									<span className="font-medium">{item}</span>
								</li>
							))}
						</ul>
					</div>

					<div
						className={`${active.bg} border-t-2 lg:border-t-0 lg:border-l-2 border-ink p-8 md:p-12 text-candy flex flex-col gap-5 relative overflow-hidden`}>
						<div className="absolute -right-10 -bottom-10 opacity-15">
							<Icon size={220}/>
						</div>
						<div className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm">
							<Gift size={18}/> You walk away with
						</div>
						<ul className="flex flex-col gap-3 relative z-10">
							{active.youGet.map((item, i) => (
								<motion.li
									key={item}
									initial={{opacity: 0, x: 16}}
									animate={{opacity: 1, x: 0}}
									transition={{delay: 0.1 + i * 0.08}}
									className="bg-paper border-2 border-candy rounded-2xl px-5 py-4 font-display font-bold text-lg shadow-[3px_3px_0_0_hsl(260,25%,12%)]"
									style={{rotate: `${i % 2 === 0 ? -1 : 1}deg`}}
								>
									{item}
								</motion.li>
							))}
						</ul>
						<div className="mt-auto flex gap-3 relative z-10">
							<button
								onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
								disabled={activeIdx === 0}
								className="px-4 py-2 rounded-full border-2 border-candy font-semibold disabled:opacity-40 cursor-pointer disabled:cursor-default hover:bg-black/5"
							>
								← Back
							</button>
							<button
								onClick={() => setActiveIdx((i) => Math.min(stages.length - 1, i + 1))}
								disabled={activeIdx === stages.length - 1}
								className="px-4 py-2 rounded-full border-2 border-candy bg-candy text-paper font-semibold disabled:opacity-40 cursor-pointer disabled:cursor-default"
							>
								Next stop →
							</button>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</section>
	);
}
