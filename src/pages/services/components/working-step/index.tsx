import PageHeading from "../../../../components/page-heading";

type Step = {
	number: string;
	title: string;
	desc: string;
};

type WorkingStepProps = {
	steps: Step[];
};

export default function WorkingStep({ steps }: WorkingStepProps) {
	return (
		<section id="service-details-working-step" className="w-full flex flex-col items-center relative py-12">
			<PageHeading preTitle="How" mainTitle="We" postTitle="Do It?" />

			<div className="w-full max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-8 mt-12 px-8">
				{steps.map((step, idx) => (
					<div
						key={idx}
						className="relative border-l-4 border-primary rounded-xl p-8 flex flex-col gap-4"
					>
						<div className="absolute -left-8 top-8 w-16 h-16 flex items-center justify-center bg-primary text-secondary font-bold text-2xl rounded-full">
							{step.number}
						</div>
						<h2 className="font-bold text-2xl mt-4 ml-2">{step.title}</h2>
						<p className="text-muted-foreground text-lg ml-2">{step.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
