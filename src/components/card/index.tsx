import type { ReactNode } from "react";
import Indicator from "../ui/indicator";

export default function Card({title, children}: { title: string; children: ReactNode }) {
	return (
		<div className="bg-card pop rounded-2xl p-6 w-full flex flex-col gap-4">
			<Indicator/>
			<h2 className="text-2xl md:text-3xl font-display font-bold line-clamp-3">{title}</h2>
			<div className="text-base md:text-lg text-muted-foreground">{children}</div>
		</div>
	);
}
