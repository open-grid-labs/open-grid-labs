import {motion} from "motion/react";
import {Eye, Flame, Handshake, Sparkles} from "lucide-react";
import SectionHeading from "../../../../components/section-heading";
import {inView} from "../../../../utils/motion";

const reasons = [
	{
		icon: Handshake,
		title: "You work with the builders",
		desc: "No account managers or hand-offs. The people on your calls are the people writing your code.",
		bg: "bg-primary",
		rotate: "-1.5deg",
	},
	{
		icon: Sparkles,
		title: "AI-native from day one",
		desc: "We never had old agency habits to unlearn. AI and LLMs have been part of how we work from the start.",
		bg: "bg-lilac",
		rotate: "1deg",
	},
	{
		icon: Eye,
		title: "Everything in the open",
		desc: "Weekly reports, a staging link you can click, and a budget you can see. Trust gets earned, not claimed.",
		bg: "bg-mint",
		rotate: "-0.5deg",
	},
	{
		icon: Flame,
		title: "We need you to win",
		desc: "A young studio lives on its founders' success stories. Yours would be one of the first we tell.",
		bg: "bg-accent",
		rotate: "1.5deg",
	},
];

export default function HomeHonest() {
	return (
		<section id="home-honest" className="w-[90%] max-w-[1400px] mx-auto py-8 md:py-12">
			<SectionHeading
				kicker="Straight talk"
				title={<>We're a new studio. <br className="hidden md:block"/><span className="text-primary">That's the good news.</span></>}
				subtitle="You won't find a wall of borrowed logos or made-up numbers here. What you get instead is below."
			/>

			<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
				{reasons.map((r, i) => {
					const Icon = r.icon;
					return (
						<motion.div
							key={r.title}
							{...inView(i * 0.08, 30)}
							whileHover={{rotate: 0, y: -6}}
							style={{rotate: r.rotate}}
							className="bg-card pop rounded-3xl p-7 flex flex-col gap-4"
						>
							<span
								className={`${r.bg} text-candy w-12 h-12 rounded-full border-2 border-ink flex items-center justify-center`}>
								<Icon size={22}/>
							</span>
							<h3 className="font-display font-bold text-xl leading-tight">{r.title}</h3>
							<p className="text-muted-foreground leading-relaxed">{r.desc}</p>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
