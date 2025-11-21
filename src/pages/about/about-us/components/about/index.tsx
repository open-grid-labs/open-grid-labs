import PageHeading2 from "../../../../../components/page-heading-2";

const aboutData = [
	{
		parts: [
			{ text: "We are dedicated to " },
			{ text: "innovating digital solutions", bold: true },
			{ text: " that help businesses achieve " },
			{ text: "efficiency, growth, and impact", bold: true },
			{ text: " through modern technology and smart strategies." },
		],
	},
	{
		parts: [
			{ text: "Our team of " },
			{ text: "skilled professionals", bold: true },
			{ text: " works closely with clients to deliver " },
			{ text: "scalable, reliable, and future-ready products", bold: true },
			{ text: " that meet evolving business challenges and opportunities." },
		],
	},
	{
		parts: [
			{ text: "We focus on " },
			{ text: "user-centric design, cutting-edge development", bold: true },
			{ text: ", and " },
			{ text: "continuous innovation", bold: true },
			{ text: " to create solutions that empower organizations in a rapidly changing digital world." },
		],
	},
];

type AboutText = {
	parts: { text: string; bold?: boolean }[];
};

const AboutParagraph = ({ parts }: AboutText) => {
	return (
		<p className="md:text-2xl text-lg leading-relaxed mt-8">
			{parts.map((part, idx) => (
				<span
					key={idx}
					className={part.bold ? "font-extrabold text-primary" : "font-medium text-muted-foreground"}
				>
					{part.text}
				</span>
			))}
		</p>
	);
};

const About = () => {
	return (
		<section
			id="about-us-about"
			className="w-full flex flex-col relative"
		>
			<PageHeading2 mainTitle="About" />
			{aboutData.map((para, idx) => (
				<AboutParagraph key={idx} parts={para.parts} />
			))}
		</section>
	);
};

export default About;
