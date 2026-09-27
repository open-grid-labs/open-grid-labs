import type {MouseEvent, ReactNode} from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import PageHeading2 from "../../../../../components/page-heading-2";

const coreValues = [
	{
		title: "Integrity",
		description: "We believe in the power of truth. Our commitment to ethical standards and transparency ensures that everything we produce is reliable, authentic, and credible.",
		span: "md:col-span-2 md:row-span-2",
		accent: "from-primary to-accent",
		glow: "hsla(12,95%,60%,0.15)",
	},
	{
		title: "Innovation",
		description: "In a rapidly evolving digital world, we are constantly pushing the boundaries of what's possible.",
		accent: "from-lilac to-fuchsia-400",
		glow: "hsla(258,90%,75%,0.15)",
	},
	{
		title: "Excellence",
		description: "We strive for the highest standards. Every detail matters, and we are relentless in our pursuit of quality.",
		accent: "from-accent to-orange-400",
		glow: "hsla(35,100%,55%,0.15)",
	},
	{
		title: "Collaboration",
		description: "We foster a culture of teamwork, working together to create solutions greater than the sum of their parts.",
		accent: "from-emerald-400 to-teal-400",
		glow: "hsla(160,80%,50%,0.15)",
	},
	{
		title: "Customer-Centricity",
		description: "Designed with the end-user in mind. We listen to our customers and deliver solutions that exceed expectations.",
		accent: "from-rose-400 to-primary",
		glow: "hsla(350,90%,60%,0.15)",
	},
	{
		title: "Agility",
		description: "In an ever-changing industry, we are quick to adapt, staying ahead of trends while remaining responsive.",
		span: "md:col-span-2",
		accent: "from-primary to-accent",
		glow: "hsla(250,100%,60%,0.15)",
	},
];

const TiltCard = ({children, className = "", glow}: { children: ReactNode, className?: string, glow: string }) => {
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const rotateX = useTransform(useSpring(y, {stiffness: 300, damping: 30}), [0, 1], [8, -8]);
	const rotateY = useTransform(useSpring(x, {stiffness: 300, damping: 30}), [0, 1], [-8, 8]);

	function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
		const rect = e.currentTarget.getBoundingClientRect();
		x.set((e.clientX - rect.left) / rect.width);
		y.set((e.clientY - rect.top) / rect.height);
	}

	return (
		<motion.div
			onMouseMove={handleMouseMove}
			onMouseLeave={() => {
				x.set(0.5);
				y.set(0.5);
			}}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1000px" }}
			className={`group relative glass-panel rounded-3xl overflow-hidden ${className}`}
		>
			<div
				className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
				style={{ background: `radial-gradient(circle at center, ${glow}, transparent 70%)` }}
			/>
			<div className="w-full h-full p-8 md:p-10 flex flex-col justify-end" style={{ transform: "translateZ(30px)" }}>
				{children}
			</div>
		</motion.div>
	);
};

export default function CoreValues() {
	return (
		<section id="about-us-core-value"
		         className="w-[90%] max-w-[1600px] mx-auto flex flex-col items-center py-20 mt-10">
			<div className="text-center mb-16 relative">
				<div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
				<PageHeading2 preTitle="Our Core" mainTitle="Values"/>
				<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
					We understand that software is a multifaceted challenge that requires a holistic, values-driven approach.
				</p>
			</div>

			<div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
				{coreValues.map((value, idx) => (
					<TiltCard key={value.title} className={value.span} glow={value.glow}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 * idx, duration: 0.6 }}
							viewport={{ once: true, margin: "-50px" }}
							className="relative z-10 flex flex-col h-full"
						>
							<div className={`w-12 h-1 mb-6 rounded-full bg-gradient-to-r ${value.accent}`} />
							<div className="mt-auto">
								<h3 className="text-3xl font-display font-semibold text-foreground mb-4">
									{value.title}
								</h3>
								<p className="text-foreground/80 dark:text-foreground/60 font-light text-lg leading-relaxed group-hover:text-foreground/90 transition-colors">
									{value.description}
								</p>
							</div>
						</motion.div>
					</TiltCard>
				))}
			</div>
		</section>
	);
}
