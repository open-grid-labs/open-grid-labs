import Hero from "../../components/hero";
import HomeAbout from "./components/about";
import HomeFaq from "./components/faq";
import HomeMetric from "./components/metric";
import HomeServices from "./components/services";
import HomeTestimonials from "./components/testimonials";
import HomeWorkflow from "./components/workflow";

export default function Home() {
	return (
		<>
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