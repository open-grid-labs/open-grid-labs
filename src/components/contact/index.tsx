import CalendlyWidget from "../calendly-widget/index.tsx";

export default function Contact() {
	return (
		<div className="w-full bg-foreground/2 rounded-2xl border border-border my-10 flex justify-center gap-10 items-center">
			<CalendlyWidget />
		</div>
	);
}
