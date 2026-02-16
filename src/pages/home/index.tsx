import Hero from "../../components/hero";
import SEO from "../../components/seo";
import HomeAbout from "./components/about";
import HomeFaq from "./components/faq";
import HomeMetric from "./components/metric";
import HomeServices from "./components/services";
import HomeTestimonials from "./components/testimonials";
import HomeWorkflow from "./components/workflow";

export default function Home() {
	return (
		<>
			<SEO
				title="OpenGridLabs - Software Development, AI & Design Agency"
				description="OpenGridLabs delivers innovative software development, AI/ML solutions, and design services. We build scalable web apps, mobile apps, cloud platforms, and intelligent systems for businesses worldwide."
				canonical="/"
				keywords="software development company, AI solutions, machine learning, web development, mobile app development, cloud solutions, UI/UX design, digital transformation, IT consulting"
			/>
			<Hero />
			<HomeAbout />
			<HomeServices />
			<HomeWorkflow />
			<HomeMetric />
			<HomeTestimonials />
			<HomeFaq />
		</>
	)
}