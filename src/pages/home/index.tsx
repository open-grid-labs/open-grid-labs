import Hero from "../../components/hero";
import SEO from "../../components/seo";
import HomeAiSpeed from "./components/ai-speed";
import HomeFaq from "./components/faq";
import HomeHonest from "./components/honest";
import HomeJourney from "./components/journey";
import HomeNinetyDays from "./components/ninety-days";
import HomeServers from "./components/servers";

export default function Home() {
	return (
		<>
			<SEO
				title="OpenGridLabs - We Co-Build Your Startup, Idea to MVP in 90 Days"
				description="OpenGridLabs co-builds startups: we analyse your idea, plan the budget, build your MVP in 90 days with AI-powered engineering, help you land first customers, and scale. Free servers till your first customer."
				canonical="/"
				keywords="startup co-builder, MVP development, idea to MVP, 90 day MVP, startup budget, first customers, free MVP hosting, AI LLM development, technical co-founder"
			/>
			<Hero />
			<HomeJourney/>
			<HomeNinetyDays/>
			<HomeAiSpeed/>
			<HomeServers/>
			<HomeHonest/>
			<HomeFaq />
		</>
	)
}
