import PageTitle from "../../../components/page-title";
import SEO from "../../../components/seo";
import HomeFaq from "../../home/components/faq";
import About from "./components/about";
import AboutHistory from "./components/about-history";
import CoreValues from "./components/core-values";

export default function AboutUs() {
	return (
		<>
			<SEO
				title="About Us - Our Story, History & Values"
				description="OpenGridLabs is a young, AI-native startup co-building studio. We help founders go from idea to a market-tested MVP in 90 days, then land first customers and scale."
				canonical="/about/about-us"
				keywords="about OpenGridLabs, startup co-builder, MVP studio, AI-native development, technical co-founder"
			/>
			<PageTitle
				label="About Us"
				mainTitle="Discover"
				subTitle="OpenGridLabs"
				description="A young, AI-native studio that co-builds startups with founders — from the first idea check to the first customers, and beyond."
			/>

			<About/>
			<AboutHistory/>
			<CoreValues/>
			<HomeFaq/>
		</>
	)
}
