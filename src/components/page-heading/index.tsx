import { CpuIcon, type LucideIcon } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";

interface PageHeadingProps {
	preTitle?: string;
	mainTitle: string;
	postTitle?: string;
	icon?: LucideIcon;
	hideIcon?: boolean;
	iconSize?: number;
}

export default function PageHeading({
	preTitle,
	mainTitle,
	postTitle,
	icon: Icon = CpuIcon,
	hideIcon = false,
	iconSize = 60,
}: PageHeadingProps) {
	const { scrollYProgress } = useScroll()

	const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

	return (
		<div className="relative mx-auto text-center px-4 flex flex-col items-center gap-3">

			<div className="flex flex-col items-center gap-3">
				<h1 className="font-bold text-foreground uppercase tracking-tight flex flex-col md:flex-row items-center gap-2 md:gap-3 text-3xl md:text-6xl text-center md:text-left">
					{preTitle && <span className="break-words">{preTitle}</span>}

					{!hideIcon && (
						<motion.span
							className="md:inline-block hidden"
							style={{ rotate }}
						>
							<Icon size={iconSize} className="text-foreground opacity-80" />
						</motion.span>
					)}

					{!hideIcon && (
						<motion.span
							className="inline-block md:hidden"
							style={{ rotate }}
						>
							<Icon size={Math.floor(iconSize / 2)} className="text-foreground opacity-80" />
						</motion.span>
					)}

					<span className="break-words">{mainTitle}</span>
				</h1>


				{postTitle && (
					<h2 className="font-semibold text-foreground text-2xl md:text-4xl uppercase opacity-90">
						{postTitle}
					</h2>
				)}
			</div>
		</div>
	);
}
