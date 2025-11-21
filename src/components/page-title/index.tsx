interface PageTitleProps {
	label?: string;
	mainTitle?: string;
	subTitle?: string;
	description?: string;
}

export default function PageTitle({
	label,
	mainTitle,
	subTitle,
	description,
}: PageTitleProps) {
	return (
		<div className="relative text-center px-4 py-8 flex flex-col items-center w-full gap-6 bg-primary rounded-xl shadow-lg">

			{label && (
				<span className="text-muted-foreground font-semibold tracking-wider uppercase">{label}</span>
			)}

			{mainTitle && (
				<h1 className="font-bold text-4xl md:text-6xl text-white tracking-tight mb-2 uppercase">
					{mainTitle}
				</h1>
			)}

			{subTitle && (
				<h2 className="text-lg md:text-2xl text-muted-foreground font-medium">{subTitle}</h2>
			)}

			{description && (
				<p className="text-gray-300 text-base md:text-lg mt-4 max-w-3xl">{description}</p>
			)}
		</div>
	);
}
