import PageHeading2 from "../../../../components/page-heading-2/index.tsx";
import PageHeading from "../../../../components/page-heading/index.tsx";
import ButtonLink from "../../../../components/ui/button-link.tsx";
import StickyTextSection from "../../../../components/sticky-text-section/index.tsx";


const softwareServices = [
	["01", "Web Applications", "Build responsive websites tailored to business goals and user needs."],
	["02", "Mobile Applications", "Develop cross-platform apps for Android and iOS with seamless user experience."],
	["03", "Backend Dev", "Create scalable, secure server-side systems and API integrations."],
	["04", "Cloud Tools", "Deploy reliable cloud solutions for storage, hosting, and infrastructure management."],
	["05", "Security Setup", "Implement security measures to protect data, apps, and digital operations."]
]

const designServices = [
	["01", "UI Design", "Design clean, visually engaging interfaces that drive intuitive user interaction."],
	["02", "UX Design", "Enhance user satisfaction through thoughtful, research-based design."],
	["03", "Web Design", "Craft modern, responsive websites optimized for performance and usability."],
	["04", "App UI", "Design mobile interfaces that look great and work flawlessly across devices."],
	["05", "Visual Branding", "Create visual identity including logos, color schemes, and brand consistency."]
]

const intelligentServices = [
	["01", "AI Chatbots", "Automate customer support with smart, conversational AI chat interfaces."],
	["02", "ML Models", "Train machine learning models for data analysis, classification, and prediction."],
	["03", "Predictive AI", "Use AI to forecast trends, behaviors, and business outcomes."],
	["04", "Cloud AI", "Implement AI solutions that interpret visual data like face, object recognition."],
	["05", "NLP Tools", "Build systems that understand and process human language in real time."]
]
type StickyServicesSectionProps = {
	title: string
	to: string
	services: string[][]
}

function StickyServicesSection({
	title,
	to,
	services
}: StickyServicesSectionProps) {
	return (
		<StickyTextSection
			heading={
				<div className="flex flex-col gap-6">
					<PageHeading2 mainTitle={title} />

					<ButtonLink to={to} className="w-fit">
						View Services
					</ButtonLink>
				</div>
			}
		>
			{services.map(([num, name, desc]) => (
				<div key={num} className="flex flex-col gap-6 pb-10 border-b border-border/40">
					<h2 className="text-6xl md:text-7xl font-extrabold text-muted-foreground">
						{num}
					</h2>

					<div className="flex flex-col md:flex-row md:gap-8 gap-4">
						<h3 className="text-3xl font-semibold text-foreground md:w-1/3 leading-tight">
							{name}
						</h3>

						<p className="text-lg text-muted-foreground md:w-2/3 leading-relaxed">
							{desc}
						</p>
					</div>
				</div>
			))}
		</StickyTextSection>
	)
}

export default function HomeServices() {
	return (
		<section
			id="home-services"
			className="w-full flex flex-col items-center gap-16"
		>
			<PageHeading
				preTitle="What"
				mainTitle="We Do"
				postTitle="In Our Agency"
			/>

			<div className="flex flex-col gap-20 w-full">
				<StickyServicesSection
					title="Software"
					to="/services/software"
					services={softwareServices}
				/>

				<StickyServicesSection
					title="Intelligent"
					to="/services/intelligent"
					services={intelligentServices}
				/>

				<StickyServicesSection
					title="Design"
					to="/services/design"
					services={designServices}
				/>
			</div>
		</section>
	);
}
