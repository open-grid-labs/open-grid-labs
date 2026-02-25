import PageTitle from "../../../components/page-title";
import SEO from "../../../components/seo";
import TeamSection from "./components/team-section";

export default function Team() {
	return (
		<>
			<SEO
				title="Our Team - Meet the Professionals"
				description="Meet the passionate and skilled professionals at OpenGridLabs. Our team of developers, designers, and AI experts drives innovation and delivers excellence in every project."
				canonical="/about/team"
				keywords="OpenGridLabs team, software developers, AI engineers, designers, tech professionals"
			/>
			<PageTitle
				label="Our Team"
				mainTitle="Meet"
				subTitle="The Team"
				description="Meet the passionate, skilled, and dedicated professionals driving innovation, delivering excellence, and shaping the future of technology at company."
			/>

			<TeamSection />
		</>
	)
}