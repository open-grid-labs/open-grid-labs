import { Box, Figma, GitBranch, MessageSquare, Slack } from "lucide-react";
import PageTitle from "../../../components/page-title";
import OtherServices from "../components/other-services";
import ToolsWeUse from "../components/tools-we-use";
import ServiceDetailsWeServe from "../components/we-serve";
import WorkingStep from "../components/working-step";


const webAppItems = [
	"UI/UX Design", "SPA Development", "CMS Integration", "Responsive Design",
	"Web Portals", "SEO Optimization", "Progressive Web App", "Front-End Dev",
	"Web Animations", "Web Security", "Code Optimization", "Real-Time Chat"
];

const mobileAppItems = [
	"iOS Development", "Android Development", "Flutter", "React Native",
	"App UI/UX", "Cross-Platform Apps", "App Store Deployment", "Push Notifications",
	"GPS & Maps", "Camera Integration", "Offline Mode", "Firebase Integration"
];

const backendDevItems = [
	"API Development", "RESTful Services", "GraphQL", "Authentication",
	"Database Design", "Serverless Functions", "Job Queues", "Caching Systems",
	"File Storage", "Admin Panels", "WebSockets", "Third-party Integration"
];

const services = {
	'Web Application': webAppItems,
	'Mobile Application': mobileAppItems,
	'Backend Development': backendDevItems
}

const steps = [
	{
		number: "01",
		title: "Requirement Gathering",
		desc: "We begin with deep discussions to understand your business goals, user needs, and technical requirements for a strong project foundation."
	},
	{
		number: "02",
		title: "Planning & Strategy",
		desc: "We create a detailed roadmap, define the tech stack, timelines, and prioritize features to ensure efficient and structured development."
	},
	{
		number: "03",
		title: "UI/UX Design",
		desc: "Our designers craft user-centric interfaces that are intuitive, engaging, and aligned with your brand for an optimal user experience."
	},
	{
		number: "04",
		title: "Agile Development",
		desc: "Using agile methodology, we build in iterations, ensuring fast delivery, flexibility, and continuous collaboration for high-quality output."
	},
	{
		number: "05",
		title: "Testing & QA",
		desc: "We conduct rigorous testing including manual and automated methods to ensure the software is stable, secure, and performs as expected."
	},
	{
		number: "06",
		title: "Deployment & Support",
		desc: "After deployment, we monitor, maintain, and provide ongoing support to ensure smooth performance and accommodate future enhancements."
	},
];

const tools = [
	{ icon: GitBranch, name: "Git" },
	{ icon: Figma, name: "Figma" },
	{ icon: Box, name: "Jira" },
	{ icon: Box, name: "Docker" },
	{ icon: MessageSquare, name: "Twilio" },
	{ icon: Slack, name: "Slack" },
];

const otherServices = [
	{ name: "Intelligent", description: "Connect the world with AI", link: "/services/intelligent" },
	{ name: "Design", description: "Design the future of tomorrow", link: "/services/design" },
];

export default function ServicesSoftware() {
	return (
		<>
			<PageTitle
				label="Software"
				mainTitle="Software"
				subTitle="Services"
				description="We deliver innovative, scalable software solutions tailored to meet your business goals, enhance productivity, and drive digital transformation."
			/>

			<ServiceDetailsWeServe
				description="Delivering Scalable, Smart, and Custom Software Services to Empower Businesses with Innovation, Speed, and Seamless Functionality."
				services={services}
			/>

			<WorkingStep steps={steps} />

			<ToolsWeUse tools={tools} />

			<OtherServices otherServices={otherServices} />
		</>
	)
}