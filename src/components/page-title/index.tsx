import { motion } from "motion/react";

type PageTitleProps = {
	label?: string;
	mainTitle?: string;
	subTitle?: string;
	description?: string;
};

const fadeUp = (delay = 0) => ({
	initial: {opacity: 0, y: 30},
	animate: {opacity: 1, y: 0},
	transition: {duration: 0.7, delay},
});

export default function PageTitle({label, mainTitle, subTitle, description}: PageTitleProps) {
	return (
		<section
			className="relative text-center px-4 py-24 md:py-32 flex flex-col items-center w-[90%] max-w-[1600px] mx-auto mt-24 mb-16 rounded-[40px] overflow-hidden bg-card pop-lg bg-grid-paper">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
			<div
				className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] pointer-events-none"/>

			<div className="relative flex flex-col items-center">
				{label && (
					<motion.div {...fadeUp()}
					            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card pop mb-6 rotate-[-1.5deg]">
						<span className="w-2 h-2 rounded-full bg-primary"/>
						<span className="text-xs font-bold tracking-widest uppercase">{label}</span>
					</motion.div>
				)}

				{(mainTitle || subTitle) && (
					<motion.h1 {...fadeUp(0.1)}
					           className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight uppercase leading-[1.1] break-words">
						{mainTitle && <span className="mr-4 block md:inline">{mainTitle}</span>}
						{subTitle && <span
							className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block mt-2 md:mt-0 md:inline">{subTitle}</span>}
					</motion.h1>
				)}

				{description && (
					<motion.p {...fadeUp(0.2)}
					          className="text-muted-foreground text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
						{description}
					</motion.p>
				)}
			</div>
		</section>
	);
}
