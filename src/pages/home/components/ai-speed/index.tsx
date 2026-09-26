import {useEffect, useRef, useState} from "react";
import {motion, useInView} from "motion/react";
import {Search, Code2, ShieldCheck, FileText, Bot, User} from "lucide-react";
import SectionHeading from "../../../../components/section-heading";
import {inView} from "../../../../utils/motion";

const uses = [
	{
		icon: Search,
		title: "Research in hours, not weeks",
		desc: "LLMs help us scan competitors, markets and interview notes fast. A human checks every finding before it reaches you.",
		bg: "bg-lilac",
	},
	{
		icon: Code2,
		title: "Pair-programming with AI agents",
		desc: "Our engineers hand off boilerplate, tests and refactors to AI coding agents, and spend their own time on the parts that make your product different.",
		bg: "bg-primary",
	},
	{
		icon: ShieldCheck,
		title: "Every change reviewed twice",
		desc: "AI review catches the small stuff early. A senior engineer still signs off on every change.",
		bg: "bg-mint",
	},
	{
		icon: FileText,
		title: "Reports from real project data",
		desc: "Weekly reports are drafted from real commits, tickets and analytics, then written up by us in plain English.",
		bg: "bg-accent",
	},
];

const terminalLines = [
	{text: '$ ai-agent "add team invites to the dashboard"', className: "text-paper"},
	{text: "● Reading the codebase…", className: "text-paper/60"},
	{text: "● Plan: API route → email template → UI modal → tests", className: "text-lilac"},
	{text: "● Writing code…  ✓", className: "text-paper/80"},
	{text: "● Running test suite…  all passing ✓", className: "text-mint"},
	{text: "→ Pull request opened for human review", className: "text-accent"},
];

function Terminal() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, {once: true, margin: "-100px"});
	const [visible, setVisible] = useState(0);

	useEffect(() => {
		if (!inView) return;
		if (visible >= terminalLines.length) return;
		const id = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 300 : 750);
		return () => clearTimeout(id);
	}, [inView, visible]);

	return (
		<div ref={ref} className="relative">
			<div className="bg-candy pop-lg rounded-3xl overflow-hidden rotate-[1.5deg]">
				<div className="flex items-center gap-1.5 px-5 py-3 border-b-2 border-paper/10">
					<span className="w-3 h-3 rounded-full bg-primary"/>
					<span className="w-3 h-3 rounded-full bg-accent"/>
					<span className="w-3 h-3 rounded-full bg-mint"/>
					<span className="ml-3 text-xs font-mono text-paper/50">~/your-startup</span>
				</div>
				<div className="p-6 md:p-8 font-mono text-[13px] md:text-sm leading-7 min-h-[260px]">
					{terminalLines.slice(0, visible).map((l, i) => (
						<motion.div key={i} initial={{opacity: 0, x: -6}} animate={{opacity: 1, x: 0}}
						            className={l.className}>
							{l.text}
						</motion.div>
					))}
					{visible < terminalLines.length &&
						<span className="inline-block w-2.5 h-5 bg-paper/80 animate-blink align-middle"/>}
				</div>
			</div>
			<p className="font-hand text-xl text-muted-foreground mt-5 text-right">illustrative session — the real ones
				are just as boring (in a good way)</p>
		</div>
	);
}

export default function HomeAiSpeed() {
	return (
		<section id="home-ai" className="w-[90%] max-w-[1400px] mx-auto py-8 md:py-12">
			<div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
				<div>
					<SectionHeading
						align="left"
						kicker="Our unfair advantage"
						title={<>We harness <span
							className="bg-lilac text-candy px-3 rounded-2xl inline-block rotate-[-1.5deg] pop">AI & LLMs</span>.
							That's how 90 days is enough.</>}
						subtitle="We put the latest AI models and LLMs to work throughout the build, from research to code to reports. AI handles the repetitive work so our team can spend its time on your product and your users."
					/>

					{/* Who does what */}
					<div className="grid grid-cols-2 gap-4 mt-10">
						<div className="bg-card pop rounded-2xl p-5">
							<div className="flex items-center gap-2 font-bold mb-2"><Bot size={18}
							                                                             className="text-primary"/> AI
								does
							</div>
							<p className="text-sm text-muted-foreground">Boilerplate, first drafts, test cases, research
								digests, code review passes.</p>
						</div>
						<div className="bg-card pop rounded-2xl p-5">
							<div className="flex items-center gap-2 font-bold mb-2"><User size={18}
							                                                              className="text-primary"/> Humans
								do
							</div>
							<p className="text-sm text-muted-foreground">Product decisions, architecture, final review,
								and every conversation with you.</p>
						</div>
					</div>
				</div>

				<Terminal/>
			</div>

			<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 md:mt-20">
				{uses.map((u, i) => {
					const Icon = u.icon;
					return (
						<motion.div
							key={u.title}
							{...inView(i * 0.08)}
							className="bg-card pop pop-hover rounded-3xl p-6 flex flex-col gap-4"
						>
							<span
								className={`${u.bg} text-candy w-12 h-12 rounded-2xl border-2 border-ink flex items-center justify-center`}>
								<Icon size={22}/>
							</span>
							<h3 className="font-display font-bold text-xl leading-tight">{u.title}</h3>
							<p className="text-muted-foreground text-[15px] leading-relaxed">{u.desc}</p>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
