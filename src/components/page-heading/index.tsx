import { CpuIcon, type LucideIcon } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";

type PageHeadingProps = {
	preTitle?: string;
	mainTitle: string;
	postTitle?: string;
	icon?: LucideIcon;
};

export default function PageHeading({preTitle, mainTitle, postTitle, icon: Icon = CpuIcon}: PageHeadingProps) {
	const {scrollYProgress} = useScroll();
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

	return (
		<div className="mx-auto text-center px-4 flex flex-col items-center gap-4 py-8">
			<h1 className="font-display font-extrabold uppercase tracking-tight flex flex-col md:flex-row items-center gap-3 md:gap-4 text-4xl md:text-7xl">
				{preTitle && <span
					className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{preTitle}</span>}
				<motion.span style={{rotate}}>
					<Icon className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]"/>
				</motion.span>
				<span>{mainTitle}</span>
			</h1>
			{postTitle &&
				<h2 className="font-semibold text-muted-foreground text-2xl md:text-3xl uppercase tracking-widest mt-2">{postTitle}</h2>}
		</div>
	);
}
