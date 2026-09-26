import type {ReactNode} from "react";
import {motion} from "motion/react";
import {inView} from "../../utils/motion";

type SectionHeadingProps = {
	kicker?: string;
	title: ReactNode;
	subtitle?: ReactNode;
	align?: "center" | "left";
	as?: "h1" | "h2";
};

export default function SectionHeading({kicker, title, subtitle, align = "center", as = "h2"}: SectionHeadingProps) {
	const Title = as;
	const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

	return (
		<motion.div
			{...inView()}
			className={`flex flex-col gap-5 max-w-3xl ${alignment}`}
		>
			{kicker && (
				<span
					className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card pop text-xs font-bold uppercase tracking-[0.2em] rotate-[-1.5deg]">
					<span className="w-2 h-2 rounded-full bg-primary"/>
					{kicker}
				</span>
			)}
			<Title className="font-display font-extrabold tracking-tight leading-[1.02] text-4xl md:text-6xl">
				{title}
			</Title>
			{subtitle &&
				<p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">{subtitle}</p>}
		</motion.div>
	);
}
