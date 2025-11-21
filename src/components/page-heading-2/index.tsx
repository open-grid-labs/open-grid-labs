import Indicator from "../ui/indicator";

interface PageHeading2Props {
	preTitle?: string;
	mainTitle: string;
}

export default function PageHeading2({ preTitle, mainTitle }: PageHeading2Props) {
	return (
		<div className="w-full flex flex-col gap-5">
			<Indicator />

			<div className="flex flex-col">
				{preTitle && (
					<span className="text-sm md:text-base tracking-widest text-muted-foreground uppercase">
						{preTitle}
					</span>
				)}

				<h1 className="font-bold md:text-5xl text-4xl leading-tight text-foreground">
					{mainTitle}
				</h1>
			</div>
		</div>
	);
}
