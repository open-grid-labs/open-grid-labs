import { Quote } from "lucide-react";

const founderData = {
	name: "Name",
	role: "role",
	description: "description.",
	company: "company",
	location: "location",
	position: "position",
	linkedin: "https://www.linkedin.com",
	image: {
		mobile: "/assets/founder.png",
		desktop: "/assets/founder.png",
	},
};

export default function FounderSection() {
	return (
		<section
			id="about-us-founder"
			className="relative my-20 bg-foreground/2 border border-border rounded-2xl overflow-hidden"
		>
			<Quote
				className="absolute -top-6 md:left-10 left-5 rotate-180 opacity-20"
				size={80}
				fill="true"
			/>

			<div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 p-6 md:p-12">
				<div className="flex-1 flex flex-col gap-6">
					<p className="text-xl md:text-3xl font-semibold leading-relaxed text-foreground">
						{founderData.name} serves as the {founderData.position} at {founderData.company}, headquartered in {founderData.location}.
					</p>

					<div className="flex flex-col md:flex-row md:items-start md:gap-12 gap-6">
						<div className="flex-1 flex flex-col gap-4">
							<h3 className="text-xl md:text-2xl font-semibold text-foreground">{founderData.name}</h3>
							<p className="text-base md:text-lg text-muted-foreground max-w-lg">
								{founderData.role} at {founderData.company}. {founderData.description}
							</p>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={founderData.linkedin}
								className="mt-2 inline-flex items-center gap-2"
							>
								<img
									alt="LinkedIn"
									loading="lazy"
									width="24"
									height="24"
									src="/assets/linkedin.svg"
									className="object-contain"
								/>
								<span className="text-muted-foreground text-sm">LinkedIn</span>
							</a>
						</div>

						<div className="flex-shrink-0 lg:hidden w-36 md:w-48">
							<img
								alt={founderData.name}
								loading="lazy"
								className="rounded-2xl object-cover w-full h-full"
								src={founderData.image.mobile}
							/>
						</div>
					</div>
				</div>

				<div className="hidden lg:flex flex-shrink-0 w-72 md:w-96">
					<img
						alt={founderData.name}
						loading="lazy"
						className="rounded-2xl object-cover w-full h-full"
						src={founderData.image.desktop}
					/>
				</div>
			</div>

			<div className="absolute -bottom-20 -right-20 w-48 h-48 bg-foreground/10 rounded-full rotate-12 hidden md:block"></div>
		</section>
	);
}
