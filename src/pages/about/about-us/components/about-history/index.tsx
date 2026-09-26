import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Activity, Megaphone, TrendingUp, Zap } from "lucide-react";
import PageHeading from "../../../../../components/page-heading";

const timelineData = [
	{
		year: "2022",
		description: "Built microscopic scanner software and cloud platforms for medical devices.",
		icon: Activity,
		glow: "hsla(12,95%,60%,0.2)",
	},
	{
		year: "2023",
		description: "Developed 'AirTrader' trading simulator and an advanced Tread Pattern Monitoring System for automotive manufacturing.",
		icon: TrendingUp,
		glow: "hsla(258,90%,75%,0.2)",
	},
	{
		year: "2024",
		description: "Launched sophisticated Crypto Analytical Tools, a High-Frequency Option Trader, and the 'Champspace' Learn & Earn platform.",
		icon: Zap,
		glow: "hsla(35,100%,55%,0.2)",
	},
	{
		year: "2025",
		description: "Released 'Adnow', a unified advertising management platform consolidating Meta, Google, and Amazon campaigns.",
		icon: Megaphone,
		glow: "hsla(160,80%,50%,0.2)",
	},
];

const spineFill = "absolute top-0 w-full bg-gradient-to-b from-primary via-accent to-transparent";

export default function AboutHistory() {
	const containerRef = useRef<HTMLDivElement>(null);
	const {scrollYProgress} = useScroll({target: containerRef, offset: ["start end", "end start"]});
	const spineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

	return (
		<section
			id="about-us-history"
			ref={containerRef}
			className="w-full flex flex-col items-center justify-center text-center relative py-32 overflow-hidden bg-background perspective-[1500px]"
		>
			<PageHeading preTitle="Our" mainTitle="Evolution" postTitle="& History"/>

			<div className="relative w-[90%] max-w-[1600px] mt-32 text-left">
				<div
					className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/50 dark:bg-foreground/5"
					style={{transform: "translateZ(-50px)"}}>
					<motion.div className={spineFill}
					            style={{height: spineHeight, boxShadow: "0 0 20px 2px rgba(249,98,59,0.5)"}}/>
				</div>
				<div className="md:hidden absolute left-8 top-0 bottom-0 w-[2px] bg-white/50 dark:bg-foreground/5">
					<motion.div className={spineFill} style={{height: spineHeight}}/>
				</div>

				<div className="flex flex-col gap-24 relative">
					{timelineData.map(({year, description, icon: Icon, glow}, idx) => {
						const isLeft = idx % 2 === 0;
						return (
							<motion.div
								key={year}
								initial={{opacity: 0, x: isLeft ? -100 : 100, rotateY: isLeft ? 15 : -15}}
								whileInView={{opacity: 1, x: 0, rotateY: 0}}
								viewport={{once: true, margin: "-100px"}}
								transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
								className={`relative flex items-center w-full ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
								style={{transformStyle: "preserve-3d"}}
							>
								<div
									className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
									<motion.div
										className="w-16 h-16 rounded-full border border-black/10 dark:border-transparent flex items-center justify-center"
										style={{background: `linear-gradient(135deg, ${glow}, transparent)`}}
										whileInView={{scale: [0.8, 1.2, 1]}}
										transition={{duration: 0.5}}
										viewport={{once: true}}
									>
										<Icon size={24} className="text-foreground drop-shadow-md"/>
									</motion.div>
								</div>

								<div
									className={`w-full md:w-[calc(50%-60px)] pl-24 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
									<div className="group relative p-8 md:p-10 glass-panel rounded-3xl">
										<span
											className="text-transparent bg-clip-text font-display font-black text-5xl md:text-7xl tracking-tighter drop-shadow-2xl opacity-40 group-hover:opacity-100 transition-opacity"
											style={{backgroundImage: `linear-gradient(135deg, #fff, ${glow})`}}>
											{year}
										</span>
										<p className="mt-6 text-lg text-foreground/70 dark:text-foreground/50 leading-relaxed group-hover:text-foreground/90 transition-colors font-light">
											{description}
										</p>
										<div
											className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-3xl"/>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
