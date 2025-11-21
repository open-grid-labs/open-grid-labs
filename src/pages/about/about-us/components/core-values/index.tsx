import PageHeading2 from "../../../../../components/page-heading-2";
import StickyTextSection from "../../../../../components/sticky-text-section";

const coreValues = [
	{
		title: "Integrity",
		description:
			"We believe in the power of truth. Our commitment to ethical standards and transparency ensures that everything we produce is reliable, authentic, and credible.",
	},
	{
		title: "Innovation",
		description:
			"In a rapidly evolving digital world, we are constantly pushing the boundaries of what's possible. From leveraging new technologies to enhancing user experiences, innovation is embedded in our DNA.",
	},
	{
		title: "Excellence",
		description:
			"We strive for the highest standards in all our endeavors, whether it's developing cutting-edge products or delivering top-tier content. Every detail matters, and we are relentless in our pursuit of quality.",
	},
	{
		title: "Collaboration",
		description:
			"We foster a culture of teamwork and inclusivity, working together across functions to create solutions that are greater than the sum of their parts. At company, we believe in the power of diverse perspectives.",
	},
	{
		title: "Customer-Centricity",
		description:
			"Our products and services are designed with the end-user in mind. We listen to our customers, understand their needs, and deliver solutions that exceed expectations.",
	},
	{
		title: "Agility",
		description:
			"In an ever-changing industry, we are quick to adapt, staying ahead of trends while remaining responsive to the evolving needs of our clients and users.",
	},
];

export default function CoreValues() {
	return (
		<section
			id="about-us-core-value"
			className="w-full flex flex-col items-center relative justify-center text-center"
		>
			<StickyTextSection
				heading={
					<PageHeading2
						preTitle="Our Core"
						mainTitle="Values"
					/>
				}
				description="we understand that software is a multifaceted challenge that requires a holistic approach."
			>
				{coreValues.map((value, idx) => (
					<div key={idx}>
						<div className="flex flex-col gap-4">
							<h3 className="text-3xl w-full font-medium text-foreground">
								{value.title}
							</h3>
							<p className="text-muted-foreground font-normal text-lg">{value.description}</p>
						</div>
						{idx !== coreValues.length - 1 && <div className="w-full h-[1px] bg-border my-4"></div>}
					</div>
				))}
			</StickyTextSection>
		</section>
	);
}
