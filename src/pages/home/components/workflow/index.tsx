import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import PageHeading from "../../../../components/page-heading";

const steps = [
	{ id: 1, title: "Requirement", desc: "Understanding your exact needs." },
	{ id: 2, title: "Planning", desc: "Structuring the best approach." },
	{ id: 3, title: "Prototype", desc: "Turning ideas into visuals." },
	{ id: 4, title: "Development", desc: "Building with precision." },
	{ id: 5, title: "Launch", desc: "Shipping with confidence." },
];

export default function HomeWorkflow() {
	return (
		<section
			id="home-workflow"
			className="w-full flex flex-col items-center text-center px-5"
		>
			<PageHeading
				mainTitle="Our Workflow"
				hideIcon
			/>

			<motion.div
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 50 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="relative w-full max-w-5xl mt-16 flex flex-col md:flex-row justify-between items-center"
			>
				<svg className="hidden md:block absolute left-0 w-full h-3 top-5">
					<motion.line
						x1="10%"
						y1="50%"
						x2="90%"
						y2="50%"
						stroke="#808080"
						strokeWidth="3"
						strokeDasharray="8 8"
						animate={{ strokeDashoffset: [0, -16] }}
						transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
					/>
				</svg>

				<svg className="block md:hidden absolute top-0 h-full w-3 z-0">
					<motion.line
						x1="50%"
						y1="0"
						x2="50%"
						y2="90%"
						stroke="#808080"
						strokeWidth="3"
						strokeDasharray="8 8"
						animate={{ strokeDashoffset: [0, -16] }}
						transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
					/>
				</svg>

				<div className="grid md:grid-cols-5 grid-cols-1 gap-10 w-full relative z-10">
					{steps.map((s, _) => (
						<div
							key={s.id}
							className="flex flex-col items-center text-center"
						>
							<div
								className="size-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-md"
							>
								<CheckCircle2 className="size-7" />
							</div>
							<h2 className="mt-4 font-semibold text-lg text-foreground">{s.title}</h2>
							<p className="mt-2 text-sm text-muted-foreground max-w-[180px]">{s.desc}</p>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
