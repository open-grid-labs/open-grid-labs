import type { ReactNode } from "react";
import PageHeading2 from "../../../../components/page-heading-2";
import { Monitor } from "lucide-react";

const ServiceSectionLayout = ({ children }: { children: ReactNode }) => {
	return (
		<section
			id="service-details-we-serve"
			className="w-full flex flex-col gap-6 relative max"
		>
			{children}
		</section>
	);
};

const ServiceHero = ({ title, description }: { title: Record<string, string>, description: string }) => {
	return (
		<div className="col-span-1 w-full flex flex-col gap-6">
			<div className="w-full flex flex-col md:gap-7 gap-6">
				<PageHeading2
					preTitle={title.part1}
					mainTitle={title.part2}
				/>
			</div>

			<p className="text-muted-foreground text-2xl leading-relaxed">
				{description}
			</p>
		</div>
	);
};

const ServiceDiagram = () => {
	return (
		<div className="col-span-1 w-full flex md:justify-end justify-center">
			<div className="relative h-[340px] justify-center flex w-[400px] items-center">
				<Monitor size={200} />
			</div>
		</div>
	);
};


const ServiceCategory = ({ title, items }: { title: string, items: string[] }) => {
	const [part1, part2] = title.split(' ');

	return (
		<div className="w-full flex flex-col gap-8">
			<h1 className="text-4xl md:text-5xl font-extrabold tracking-wide flex flex-wrap">
				<span className="text-primary">{part1}</span>
				<span className="text-muted-foreground ml-2">{part2}</span>
			</h1>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
				{items.map((item, index) => (
					<div
						key={index}
						className="p-6 rounded-xl bg-secondary"
					>
						<h3 className="text-xl md:text-2xl font-semibold">
							{item}
						</h3>
					</div>
				))}
			</div>
		</div>
	);
};


type ServiceDetailsWeServeProps = {
	description: string
	services: Record<string, string[]>
}


const ServiceDetailsWeServe = ({ description, services }: ServiceDetailsWeServeProps) => {
	return (
		<ServiceSectionLayout>
			<div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6 relative">
				<ServiceHero
					title={{ part1: "What Do", part2: "We Serve?" }}
					description={description}
				/>
				<ServiceDiagram />
			</div>

			<div className="w-full mt-10 flex flex-col gap-16">
				{
					Object.keys(services).map((k, i) => (
						<ServiceCategory
							key={i}
							title={k}
							items={services[k]}
						/>
					))
				}
			</div>
		</ServiceSectionLayout>
	);
};

export default ServiceDetailsWeServe;