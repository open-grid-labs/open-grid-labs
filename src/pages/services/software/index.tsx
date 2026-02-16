import PageTitle from "../../../components/page-title";
import SEO from "../../../components/seo";
import OtherServices from "../components/other-services";
import ToolsWeUse from "../components/tools-we-use";
import ServiceDetailsWeServe from "../components/we-serve";
import WorkingStep from "../components/working-step";
import { faAws, faDocker, faJava, faJs, faLinux, faPython, faReact, faStripe } from "@fortawesome/free-brands-svg-icons";
import { BarChart, Brain, Code, Database, FileCode, FileSpreadsheet, LineChart, Network, PieChart, Radio, Server, Terminal, Webhook } from "lucide-react";


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
	{ icon: faReact, name: "React" },
	{ icon: faJs, name: "JavaScript" },
	{ icon: <FileCode className="text-primary w-12 h-12" />, name: "TypeScript" },
	{ icon: faPython, name: "Python" },
	{ icon: <FileCode className="text-primary w-12 h-12" />, name: "Django" },
	{ icon: faJava, name: "Java" },
	{ icon: <Code className="text-primary w-12 h-12" />, name: "C++" },
	{ icon: <Database className="text-primary w-12 h-12" />, name: "MySQL" },
	{ icon: <Database className="text-primary w-12 h-12" />, name: "PostgreSQL" },
	{ icon: <Database className="text-primary w-12 h-12" />, name: "MongoDB" },
	{ icon: <Database className="text-primary w-12 h-12" />, name: "Redis" },
	{ icon: faAws, name: "AWS" },
	{ icon: faDocker, name: "Docker" },
	{ icon: <Server className="text-primary w-12 h-12" />, name: "Kubernetes" },
	{ icon: faLinux, name: "Linux" },
	{ icon: <Server className="text-primary w-12 h-12" />, name: "Nginx" },
	{ icon: faStripe, name: "Stripe" },
	{ icon: <Network className="text-primary w-12 h-12" />, name: "WebSocket" },
	{ icon: <BarChart className="text-primary w-12 h-12" />, name: "D3.js" },
	{ icon: <LineChart className="text-primary w-12 h-12" />, name: "ChartIQ" },
	{ icon: <Brain className="text-primary w-12 h-12" />, name: "TensorFlow" },
	{ icon: <Radio className="text-primary w-12 h-12" />, name: "MQTT" },
	{ icon: <PieChart className="text-primary w-12 h-12" />, name: "Grafana" },
	{ icon: <Terminal className="text-primary w-12 h-12" />, name: "Deribit API" },
	{ icon: <Webhook className="text-primary w-12 h-12" />, name: "REST APIs" },
	{ icon: <FileSpreadsheet className="text-primary w-12 h-12" />, name: "Excel" },
];

const otherServices = [
	{ name: "Intelligent", description: "Connect the world with AI", link: "/services/intelligent" },
	{ name: "Design", description: "Design the future of tomorrow", link: "/services/design" },
];

export default function ServicesSoftware() {
	return (
		<>
			<SEO
				title="Software Development Services - Web, Mobile & Backend"
				description="Custom software development services including web applications, mobile apps, backend systems, API development, and cloud solutions. Built with React, Python, Django, AWS, and more."
				canonical="/services/software"
				keywords="software development services, web app development, mobile app development, backend development, API development, React, Python, Django, AWS, cloud solutions"
			/>
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