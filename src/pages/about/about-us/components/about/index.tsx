import PageHeading2 from "../../../../../components/page-heading-2";

const paragraphs = [
	["We started OpenGridLabs to be the ", "technical co-founder", " that most first-time founders don't have — someone who helps turn an idea into a ", "real product with real users", "."],
	["We're a ", "young, AI-native studio", ". We harness the power of AI and LLMs alongside our engineers, which is how we can take an idea to a ", "market-tested MVP in 90 days", "."],
	["We'd rather ", "earn trust than claim it", ". That means weekly reports, a clear budget, free servers till your first customer, and ", "straight answers", ", even when the answer is \"rethink this idea\"."],
];

const About = () => (
	<section id="about-us-about"
	         className="w-full flex flex-col relative py-20 px-4 md:px-10 glass-panel rounded-3xl mt-12 overflow-hidden">
		<PageHeading2 mainTitle="About"/>
		<div className="w-[90%] max-w-[1600px]">
			{paragraphs.map((parts, idx) => (
				<p key={idx} className="md:text-3xl text-xl leading-relaxed mt-10">
					{parts.map((text, i) => (
						<span
							key={i}
							className={i % 2 ? "font-bold text-foreground drop-shadow-lg dark:shadow-[0_0_10px_rgba(255,255,255,0.3)]" : "font-medium text-muted-foreground"}
						>
							{text}
						</span>
					))}
				</p>
			))}
		</div>
	</section>
);

export default About;
