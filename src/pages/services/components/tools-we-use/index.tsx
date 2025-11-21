import type { LucideIcon } from "lucide-react";
import PageHeading from "../../../../components/page-heading";

type Tool = {
	icon: LucideIcon;
	name: string;
};

type ToolsWeUseProps = {
	tools: Tool[];
};

export default function ToolsWeUse({ tools }: ToolsWeUseProps) {
	return (
		<section id="service-details-tools" className="w-full flex flex-col items-center py-12">
			<PageHeading preTitle="Tools" mainTitle="That" postTitle="We Use" />

			<div className="w-full max-w-6xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-8 mt-12">
				{tools.map((tool, i) => {
					const Icon = tool.icon;
					return (
						<div key={i} className="group shadow-md relative border border-border rounded-3xl p-8 flex flex-col items-center justify-center transition duration-300 cursor-pointer">
							<div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<Icon size={48} className="text-primary group-hover:scale-110 transition-transform duration-300" />
							</div>
							<span className="text-lg font-semibold">
								{tool.name}
							</span>
						</div>
					);
				})}
			</div>
		</section>
	);
}
