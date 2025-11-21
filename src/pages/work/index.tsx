import PageHeading from "../../components/page-heading";
import PageTitle from "../../components/page-title";
import { ProjectsGrid } from "./components/projects-grid";

const projects = [
	{
		title: "Project Alpha – Enterprise Management System",
		description:
			"Project Alpha is a robust IT solution for managing business operations, including workflow automation, reporting, and team collaboration for enhanced productivity.",
		href: "/work/project-alpha",
	},
	{
		title: "Project Beta – Cloud Integration Platform",
		description:
			"Project Beta provides seamless cloud services integration, enabling secure data transfer, scalable storage, and real-time synchronization across multiple applications.",
		href: "/work/project-beta",
	},
	{
		title: "Project Gamma – E-Learning Portal",
		description:
			"Project Gamma is a versatile educational platform offering online courses, interactive learning tools, and collaborative study environments for diverse audiences.",
		href: "/work/project-gamma",
	},
	{
		title: "Project Delta – Financial Analytics Dashboard",
		description:
			"Project Delta delivers advanced analytics and visualization tools for tracking financial data, generating reports, and providing actionable insights for decision-making.",
		href: "/work/project-delta",
	},
];


export default function Work() {
	return (
		<>
			<PageTitle
				label="Our Works"
				mainTitle="Featured"
				subTitle="Projects"
				description="Explore our diverse portfolio showcasing innovative, user-centric digital solutions crafted with creativity, precision, and modern technologies tailored to drive real business impact."
			/>

			<div>
				<PageHeading
					preTitle="Our"
					mainTitle="Creative"
					postTitle="Works"
				/>
				<ProjectsGrid projects={projects} />
			</div>
		</>
	)
}