import {motion} from "motion/react";
import {ArrowRight, Check, Gift} from "lucide-react";
import SEO from "../../components/seo";
import SectionHeading from "../../components/section-heading";
import {stages} from "../../data/journey";
import {openCalendly} from "../../utils/calendly";
import HomeNinetyDays from "../home/components/ninety-days";
import HomeAiSpeed from "../home/components/ai-speed";
import HomeServers from "../home/components/servers";
import HomeFaq from "../home/components/faq";
import {inView} from "../../utils/motion";

function StageCard({stage, index}: { stage: (typeof stages)[number]; index: number }) {
	const Icon = stage.icon;
	const flip = index % 2 === 1;

	return (
		<motion.article
			id={stage.id}
			{...inView(0, 40)}
			className={`scroll-mt-32 bg-card pop-lg rounded-[32px] overflow-hidden grid lg:grid-cols-[1fr_1.4fr] ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
		>
			<div
				className={`${stage.bg} text-candy p-8 md:p-10 flex flex-col justify-between gap-8 relative overflow-hidden border-b-2 lg:border-b-0 ${flip ? "lg:border-l-2" : "lg:border-r-2"} border-ink`}>
				<Icon className="absolute -right-8 -bottom-8 opacity-15" size={200}/>
				<div className="flex items-center justify-between relative">
					<span className="font-display font-extrabold text-6xl md:text-7xl leading-none">{stage.step}</span>
					<span
						className="bg-paper border-2 border-candy rounded-full px-3 py-1 text-sm font-bold">{stage.when}</span>
				</div>
				<div className="relative">
					<p className="font-hand text-2xl mb-1">{stage.nickname}</p>
					<h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight">{stage.title}</h2>
				</div>
			</div>

			<div className="p-8 md:p-10 flex flex-col gap-7">
				<p className="text-lg text-muted-foreground leading-relaxed">{stage.summary}</p>
				<div className="grid sm:grid-cols-2 gap-8">
					<div>
						<h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4">What we do</h3>
						<ul className="flex flex-col gap-3">
							{stage.weDo.map((item) => (
								<li key={item} className="flex items-start gap-3">
									<span
										className={`${stage.bg} mt-0.5 w-6 h-6 shrink-0 rounded-full border-2 border-ink flex items-center justify-center text-candy`}>
										<Check size={13} strokeWidth={3}/>
									</span>
									{item}
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
							<Gift size={14} className="text-primary"/> You get
						</h3>
						<ul className="flex flex-col gap-2.5">
							{stage.youGet.map((item) => (
								<li key={item}
								    className="bg-muted border-2 border-border rounded-xl px-4 py-2.5 font-semibold">
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.article>
	);
}

export default function HowItWorks() {
	return (
		<>
			<SEO
				title="How It Works - Idea to MVP to Scale"
				description="Our five-stop co-building journey: analyse your idea, build the budget, build the MVP in 90 days, land your first customers and scale. Free servers till your first customer, weekly reports, AI-powered engineering."
				canonical="/services"
				keywords="how to build an MVP, startup idea analysis, MVP budget, 90 day MVP, first customer acquisition, startup scaling, free MVP hosting"
			/>

			{/* Hero */}
			<section className="w-full bg-dots border-b-2 border-ink">
				<div
					className="w-[90%] max-w-[1400px] mx-auto pt-16 md:pt-24 pb-16 md:pb-20 flex flex-col items-center">
					<SectionHeading
						as="h1"
						kicker="How it works"
						title={<>One partner from <span className="text-primary">"what if…"</span> to <span
							className="bg-accent text-candy px-3 rounded-2xl inline-block rotate-[-1.5deg] pop">"we're live!"</span></>}
						subtitle="Five stops, one team. Start at the beginning, or join at whichever stop you've reached."
					/>

					{/* Jump links */}
					<nav aria-label="Journey stops" className="flex flex-wrap justify-center gap-3 mt-12">
						{stages.map((s) => {
							const Icon = s.icon;
							return (
								<a
									key={s.id}
									href={`#${s.id}`}
									className={`${s.bg} text-candy pop pop-hover rounded-full px-4 py-2 font-semibold text-sm inline-flex items-center gap-2`}
								>
									<Icon size={16}/> {s.step} · {s.title}
								</a>
							);
						})}
					</nav>
				</div>
			</section>

			{/* Stages */}
			<section className="w-[90%] max-w-[1400px] mx-auto py-4 md:py-8 flex flex-col gap-10 md:gap-14">
				{stages.map((stage, i) => (
					<StageCard key={stage.id} stage={stage} index={i}/>
				))}

				<div className="flex flex-col items-center gap-4 mt-6 text-center">
					<p className="font-hand text-3xl">Not sure which stop you're at?</p>
					<button
						onClick={() => openCalendly()}
						className="pop pop-hover bg-primary text-candy font-bold rounded-full h-14 px-8 inline-flex items-center gap-2 cursor-pointer"
					>
						Let's figure it out together <ArrowRight size={18}/>
					</button>
				</div>
			</section>

			<HomeNinetyDays/>
			<HomeAiSpeed/>
			<HomeServers/>
			<HomeFaq/>
		</>
	);
}
