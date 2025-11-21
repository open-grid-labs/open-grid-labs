import PageTitle from "../../../components/page-title";
import TeamSection from "./components/team-section";

export default function Team() {
	return (
		<>
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