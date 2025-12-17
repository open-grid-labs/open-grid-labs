import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import PageHeading from "../../../../components/page-heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";


type Tool = {
	icon: IconDefinition | ReactNode;
	name: string;
};

type ToolsWeUseProps = {
	tools: Tool[];
};

export default function ToolsWeUse({ tools }: ToolsWeUseProps) {
	const isFA = (value: any): value is IconDefinition =>
		value &&
		typeof value === "object" &&
		"iconName" in value &&
		"prefix" in value;

	return (
		<section id="service-details-tools" className="w-full flex flex-col items-center py-12">
			<PageHeading preTitle="Tools" mainTitle="That" postTitle="We Use" />

			<div className="w-full max-w-6xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-8 mt-12">
				{tools.map((tool, i) => {
					return (
						<div key={i} className="group shadow-md relative border border-border rounded-3xl p-8 flex flex-col items-center justify-center transition duration-300 cursor-pointer">
							<div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								{
									isFA(tool.icon) ? (
										<FontAwesomeIcon icon={tool.icon} size={'3x'} className="text-primary group-hover:scale-110 transition-transform duration-300" />
									) : (
										tool.icon
									)
								}
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
