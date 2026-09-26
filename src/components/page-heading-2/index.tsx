import Indicator from "../ui/indicator";

export default function PageHeading2({preTitle, mainTitle}: { preTitle?: string; mainTitle: string }) {
	return (
		<div className="w-full flex flex-col gap-6">
			<Indicator />
			<div className="flex flex-col">
				{preTitle && <span
					className="text-sm md:text-base tracking-widest text-primary uppercase font-medium mb-2">{preTitle}</span>}
				<h1 className="font-display font-bold md:text-5xl text-4xl leading-tight">{mainTitle}</h1>
			</div>
		</div>
	);
}
