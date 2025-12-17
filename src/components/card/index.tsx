import type { ReactNode } from "react";
import Indicator from "../ui/indicator";


type CardProps = {
	title: string;
	children: ReactNode;
}

export default function Card({
	title,
	children
}: CardProps) {
	return (
		<div
			className="relative bg-foreground/5 border border-border rounded-2xl p-6 w-full flex flex-col justify-between gap-6 overflow-hidden"
		>
			<div className="absolute -top-6 -right-6 w-20 h-20 bg-foreground/10 rounded-full rotate-12 z-0"></div>

			<div className="relative z-10 flex flex-col gap-4">
				<Indicator />

				<h2 className="text-2xl md:text-3xl text-foreground font-semibold font-switzer line-clamp-3">
					{title}
				</h2>

				<p className="text-base md:text-lg text-muted-foreground">
					{children}
				</p>
			</div>
		</div>
	)
}