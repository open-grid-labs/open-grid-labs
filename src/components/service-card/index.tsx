import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Indicator from "../ui/indicator";

type ServiceCardProps = {
	link: string;
	name: string;
	description?: string;
};

export default function ServiceCard({ link, name, description }: ServiceCardProps) {
	return (
		<Link
			to={link}
			className="flex-1"
		>
			<div className="relative w-full h-full bg-white rounded-2xl border border-border overflow-hidden p-6 flex flex-col justify-between gap-4 cursor-pointer transition hover:border-primary duration-200">
				<Indicator />

				<div className="flex items-center justify-between">
					<h3 className="text-xl font-bold">{name}</h3>
					<ArrowRight className="text-primary" size={24} />
				</div>

				{description && (
					<p className="text-muted-foreground line-clamp-3">
						{description}
					</p>
				)}
			</div>
		</Link>
	);
}
