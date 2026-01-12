import { useParams, Navigate } from "react-router";
import PageTitle from "../../../components/page-title";
import PageHeading from "../../../components/page-heading";
import { CheckCircle2 } from "lucide-react";
import Indicator from "../../../components/ui/indicator";
import Carousel from "../../../components/ui/carousel";

interface ProjectDetail {
	id: string;
	title: string;
	description: string;
	category: string;
	client: string;
	duration: string;
	technologies: string[];
	overview: string;
	challenges: string[];
	solutions: string[];
	features: string[];
	results: {
		metric: string;
		value: string;
	}[];
	videoUrl?: string;
	galleryImages?: string[];
	galleryGifs?: string[];
}

const projectsData: Record<string, ProjectDetail> = {
	"frontend-microscopic-scanner": {
		id: "frontend-microscopic-scanner",
		title: "Web application for microscopic scanner",
		description: "A highly intuitive web application for microscopic scanner that streamlines workflows and improves accuracy.",
		category: "Medical Technology",
		client: "Medical Research Lab",
		duration: "1 year",
		technologies: ["React", "TypeScript", "WebGL", "Node.js", "Express", "MongoDB"],
		overview: "Developed a cutting-edge web application for microscopic scanner that enables medical professionals to analyze microscopic images with enhanced precision. The application features real-time image processing, advanced zoom capabilities, and automated detection algorithms.",
		challenges: [
			"Processing high-resolution medical images in real-time without performance degradation",
			"Creating an intuitive interface for complex medical image analysis",
			"Implementing accurate automated detection algorithms",
			"Ensuring HIPAA compliance and data security"
		],
		solutions: [
			"Implemented WebGL-based rendering for smooth, high-performance image processing",
			"Designed a user-centric interface with customizable workflows",
			"Integrated machine learning models for automated detection and analysis",
			"Built a secure backend with encryption and access controls"
		],
		features: [
			"Real-time image processing and analysis",
			"Advanced zoom and pan controls",
			"Automated cell detection and counting",
			"Annotation and measurement tools",
			"Report generation and export",
			"Multi-user collaboration features",
			"Cloud-based image storage and retrieval"
		],
		results: [
			{ metric: "Processing Speed", value: "3x faster" },
			{ metric: "Accuracy Improvement", value: "25%" },
			{ metric: "User Satisfaction", value: "95%" },
			{ metric: "Time Saved", value: "40%" }
		],
		videoUrl: "/videos/microscopic-scanner/scanner.mp4",
		galleryImages: [
			"/images/microscopic-scanner/scannerimage1.png",
			"/images/microscopic-scanner/scannerimage2.png"
		],
		galleryGifs: []
	},
	"cloud-medical-devices": {
		id: "cloud-medical-devices",
		title: "Cloud Frontend/Backend for Medical Devices",
		description: "A reliable cloud platform for managing and analyzing medical device data efficiently.",
		category: "Healthcare Cloud",
		client: "Healthcare Technology Company",
		duration: "8 months",
		technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes", "Redis"],
		overview: "Built a comprehensive cloud platform for managing medical device data, enabling healthcare providers to monitor patient vitals, track device performance, and analyze trends. The platform supports real-time data streaming, alerts, and comprehensive reporting.",
		challenges: [
			"Handling real-time data streams from thousands of medical devices",
			"Ensuring 99.99% uptime for critical healthcare operations",
			"Managing large volumes of sensitive patient data securely",
			"Creating scalable architecture for growing device ecosystem"
		],
		solutions: [
			"Implemented microservices architecture with containerization",
			"Deployed on AWS with auto-scaling and load balancing",
			"Built real-time data pipeline using WebSockets and message queues",
			"Implemented comprehensive security measures and compliance protocols"
		],
		features: [
			"Real-time device monitoring and alerts",
			"Historical data analysis and reporting",
			"Device management and configuration",
			"Patient vitals dashboard",
			"Automated alert system",
			"Data export and integration APIs",
			"Role-based access control"
		],
		results: [
			{ metric: "Uptime", value: "99.99%" },
			{ metric: "Devices Supported", value: "10,000+" },
			{ metric: "Response Time", value: "<100ms" },
			{ metric: "Data Processed", value: "5TB/day" }
		],
		videoUrl: "https://www.w3schools.com/html/movie.mp4",
		galleryImages: [
			"https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2070",
			"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080",
			"https://images.unsplash.com/photo-1530497610245-94d3c16cda48?auto=format&fit=crop&q=80&w=2080"
		],
		galleryGifs: [
			"https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
			"https://media.giphy.com/media/3o7abKhOpu0NwnRgE8/giphy.gif"
		]
	},
	"airtrader-trading-simulator": {
		id: "airtrader-trading-simulator",
		title: "AirTrader – Trading Simulator Application",
		description: "A robust and user-friendly trading simulator for strategy testing and decision-making.",
		category: "Fintech",
		client: "Financial Education Platform",
		duration: "6 months",
		technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "Chart.js"],
		overview: "Developed a comprehensive trading simulator that allows users to practice trading strategies with real-time market data without risking real money. Features include portfolio management, technical analysis tools, and performance analytics.",
		challenges: [
			"Simulating realistic market conditions and order execution",
			"Handling real-time market data feeds efficiently",
			"Creating accurate backtesting capabilities",
			"Building intuitive charting and analysis tools"
		],
		solutions: [
			"Integrated real-time market data APIs with caching mechanisms",
			"Implemented realistic order matching engine",
			"Built comprehensive backtesting framework with historical data",
			"Developed interactive charts with technical indicators"
		],
		features: [
			"Real-time market data simulation",
			"Portfolio management and tracking",
			"Technical analysis tools and indicators",
			"Backtesting capabilities",
			"Performance analytics and reports",
			"Risk management tools",
			"Educational resources and tutorials"
		],
		results: [
			{ metric: "Active Users", value: "50,000+" },
			{ metric: "Trades Simulated", value: "1M+" },
			{ metric: "User Engagement", value: "45 min/session" },
			{ metric: "Skill Improvement", value: "60%" }
		],
		videoUrl: "/videos/airtrader-trading-simulator/airtraderdemo.mp4",
		galleryImages: [
			"/images/airtrader-trading-simulator/airtraderimage1.png",
			"/images/airtrader-trading-simulator/airtraderimage2.png",
			"/images/airtrader-trading-simulator/airtraderimage3.png",
			"/images/airtrader-trading-simulator/airtraderimage4.png",
			"/images/airtrader-trading-simulator/airtraderimage5.png",
			"/images/airtrader-trading-simulator/airtraderimage6.png",
			"/images/airtrader-trading-simulator/airtraderimage7.png",
			"/images/airtrader-trading-simulator/airtraderimage8.png",
			"/images/airtrader-trading-simulator/airtraderimage9.png",
			"/images/airtrader-trading-simulator/airtraderimage10.png"
		],
		galleryGifs: []
	},
	"crypto-analytical-tools": {
		id: "crypto-analytical-tools",
		title: "Crypto Analytical Tools",
		description: "Comprehensive crypto analysis tools providing actionable insights for investments.",
		category: "Cryptocurrency",
		client: "Crypto Investment Firm",
		duration: "7 months",
		technologies: ["React", "TypeScript", "Python", "Django", "MongoDB", "WebSocket", "D3.js"],
		overview: "Created a sophisticated cryptocurrency analysis platform with real-time market data, advanced charting, sentiment analysis, and automated trading signals. The platform aggregates data from multiple exchanges and provides comprehensive market insights.",
		challenges: [
			"Aggregating data from multiple cryptocurrency exchanges",
			"Processing high-frequency market data updates",
			"Implementing accurate technical analysis algorithms",
			"Creating real-time sentiment analysis from social media"
		],
		solutions: [
			"Built scalable data aggregation pipeline with WebSocket connections",
			"Implemented efficient data processing with Python and caching",
			"Developed custom technical indicators and signals",
			"Integrated NLP models for sentiment analysis"
		],
		features: [
			"Real-time multi-exchange market data",
			"Advanced charting with 50+ indicators",
			"Sentiment analysis from social media",
			"Automated trading signals",
			"Portfolio tracking and analytics",
			"Price alerts and notifications",
			"Historical data analysis"
		],
		results: [
			{ metric: "Markets Tracked", value: "500+" },
			{ metric: "Data Points/Second", value: "10,000+" },
			{ metric: "Prediction Accuracy", value: "75%" },
			{ metric: "User ROI Improvement", value: "35%" }
		],
		videoUrl: "https://www.w3schools.com/html/movie.mp4",
		galleryImages: [
			"https://images.unsplash.com/photo-1621504450168-b8c4375b2b80?auto=format&fit=crop&q=80&w=2070",
			"https://images.unsplash.com/photo-1622630998477-20aa696fab05?auto=format&fit=crop&q=80&w=2070",
			"https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=2002"
		],
		galleryGifs: [
			"https://media.giphy.com/media/7FBY7h5Pcyh6BbILFB/giphy.gif",
			"https://media.giphy.com/media/l0HlJDaeqNUDhhaCt/giphy.gif"
		]
	},
	"tread-pattern-dashboard": {
		id: "tread-pattern-dashboard",
		title: "Tread Pattern Monitoring System POC & Analytical Dashboard",
		description: "Advanced monitoring system and analytics dashboard to simplify complex data and enhance efficiency.",
		category: "Industrial IoT",
		client: "Automotive Manufacturer",
		duration: "6 months",
		technologies: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "MQTT", "Grafana"],
		overview: "Developed a proof-of-concept monitoring system that uses computer vision and IoT sensors to analyze tire tread patterns, predict wear, and provide maintenance recommendations. The analytical dashboard visualizes complex data and provides actionable insights.",
		challenges: [
			"Processing high-resolution tire images in real-time",
			"Developing accurate tread wear prediction models",
			"Integrating with existing manufacturing systems",
			"Visualizing complex 3D tread pattern data"
		],
		solutions: [
			"Implemented computer vision models using TensorFlow",
			"Built edge computing solution for on-site processing",
			"Created API integrations with manufacturing systems",
			"Developed custom 3D visualization components"
		],
		features: [
			"Real-time tread pattern analysis",
			"Predictive maintenance alerts",
			"3D pattern visualization",
			"Historical trend analysis",
			"Quality control dashboard",
			"Automated reporting system",
			"Integration with ERP systems"
		],
		results: [
			{ metric: "Detection Accuracy", value: "98%" },
			{ metric: "Maintenance Cost Reduction", value: "30%" },
			{ metric: "Processing Time", value: "5 sec/tire" },
			{ metric: "Defect Detection", value: "95%" }
		],
		videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
		galleryImages: [
			"https://images.unsplash.com/photo-1487887235942-6101435aa7a1?auto=format&fit=crop&q=80&w=1974",
			"https://images.unsplash.com/photo-1579609598045-60479b660cb8?auto=format&fit=crop&q=80&w=2070",
			"https://images.unsplash.com/photo-1583198432859-634bb3284951?auto=format&fit=crop&q=80&w=2070"
		],
		galleryGifs: [
			"https://media.giphy.com/media/Q81NcsY6YxK7jxnr4v/giphy.gif",
			"https://media.giphy.com/media/3o7qEcqN5PjN90jNC0/giphy.gif"
		]
	},
	"crypto-deribit-option-trader": {
		id: "crypto-deribit-option-trader",
		title: "Crypto Deribit Option Trader",
		description: "Created the infrastructure and software that trades option strategies with fastest latency possible on Deribit exchange",
		category: "Cryptocurrency Trading",
		client: "Crypto Trading Firm",
		duration: "8 months",
		technologies: ["Python", "C++", "WebSocket", "Deribit API", "Redis", "PostgreSQL", "Linux", "Docker"],
		overview: "Built a high-performance automated trading system for options on the Deribit exchange, leveraging ultra-low latency infrastructure and advanced option trading strategies. The system executes trades with millisecond precision, monitors market conditions in real-time, and manages risk automatically.",
		challenges: [
			"Achieving ultra-low latency for competitive advantage in options trading",
			"Implementing complex option Greeks calculations and hedging strategies",
			"Managing risk across multiple positions and strategies",
			"Handling high-frequency data streams and order execution"
		],
		solutions: [
			"Optimized backend with C++ for critical path components",
			"Direct WebSocket connection to Deribit with custom protocol optimization",
			"Pre-calculated Greeks and dynamic hedging algorithms",
			"Advanced position management and risk monitoring system"
		],
		features: [
			"Ultra-low latency order execution (<10ms)",
			"Real-time Greeks calculation (Delta, Gamma, Vega, Theta)",
			"Automated hedging and risk management",
			"Multi-strategy support and execution",
			"Real-time P&L tracking and analytics",
			"Order book monitoring and optimization",
			"Automated position closing and rebalancing"
		],
		results: [
			{ metric: "Order Latency", value: "<5ms" },
			{ metric: "Execution Success", value: "99.8%" },
			{ metric: "Win Rate", value: "72%" },
			{ metric: "Daily Volume", value: "$2M+" }
		],
		videoUrl: "",
		galleryImages: [],
		galleryGifs: []
	},
	"champspace": {
		id: "champspace",
		title: "Champspace - Learn & Earn Platform",
		description: "An edtech platform where students learn through courses and earn money by completing them",
		category: "EdTech",
		client: "champspace.in",
		duration: "3 months",
		technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Stripe", "AWS", "WebRTC"],
		overview: "Built a revolutionary learning management system that incentivizes education by paying students as they complete courses. The platform provides a seamless learning experience with video content, assessments, and a transparent reward mechanism that converts learning into real earnings.",
		challenges: [
			"Creating engaging course content delivery with video streaming",
			"Implementing fair and transparent payment system for course completion",
			"Building robust user progress tracking and verification",
			"Ensuring platform scalability for thousands of concurrent learners"
		],
		solutions: [
			"Developed adaptive learning interface with video streaming optimization",
			"Integrated Stripe for secure payment processing and payouts",
			"Built comprehensive progress verification and fraud detection system",
			"Deployed on AWS with auto-scaling infrastructure"
		],
		features: [
			"Video-based course content with progress tracking",
			"Real-time earnings dashboard",
			"Automated course completion verification",
			"Secure payment and payout system",
			"User certificates and credentials",
			"Progress leaderboards and gamification",
			"Instructor course management tools"
		],
		results: [
			{ metric: "Active Students", value: "25,000+" },
			{ metric: "Total Payouts", value: "$500K+" },
			{ metric: "Course Completion", value: "78%" },
			{ metric: "User Retention", value: "65%" }
		],
		videoUrl: "/videos/champspace/champspace.mp4",
		galleryImages: [
			"/images/champspace/champspaceimage1.PNG",
			"/images/champspace/Champspaceimage2.PNG",
			"/images/champspace/champspaceimage3.PNG",
			"/images/champspace/champspaceimage4.PNG",
			"/images/champspace/champspaceimage5.PNG"
		],
		galleryGifs: []
	},
	"adnow": {
		id: "adnow",
		title: "Adnow - Unified Ad Management Platform",
		description: "A comprehensive ad agency solution providing one-centric management for all ads across Meta, Google, Amazon, and more",
		category: "MarTech/AdTech",
		client: "Digital Marketing Agency",
		duration: "1 month",
		technologies: ["React", "Node.js", "TypeScript", "Python", "PostgreSQL", "Redis", "AWS", "REST APIs"],
		overview: "Developed a unified advertising management platform that consolidates campaign management across multiple advertising networks including Meta, Google, and Amazon. The platform provides centralized analytics, budget management, and campaign optimization across all channels from a single dashboard.",
		challenges: [
			"Integrating with multiple ad network APIs with different specifications",
			"Unifying analytics data from disparate sources",
			"Real-time bid management and budget optimization",
			"Handling high-volume campaign data and reporting"
		],
		solutions: [
			"Built abstraction layer for multi-platform ad network integration",
			"Implemented unified analytics aggregation and normalization",
			"Created intelligent budget allocation algorithms",
			"Deployed data warehouse for efficient reporting"
		],
		features: [
			"Unified dashboard for all advertising platforms",
			"Multi-channel campaign creation and management",
			"Real-time performance analytics and reporting",
			"Intelligent budget allocation and optimization",
			"A/B testing and experimentation framework",
			"Automated bid management and adjustments",
			"Comprehensive ROI and performance metrics"
		],
		results: [
			{ metric: "Platforms Integrated", value: "8+" },
			{ metric: "Monthly Campaigns", value: "5,000+" },
			{ metric: "Spend Managed", value: "$50M+" },
			{ metric: "ROAS Improvement", value: "40%" }
		],
		videoUrl: "/videos/adnow/adnowdemo.mp4",
		galleryImages: [
			"/images/adnow/adnowimage1.PNG",
			"/images/adnow/adnowimage2.PNG",
			"/images/adnow/adnowimage3.PNG",
			"/images/adnow/adnowimage4.PNG"
		],
		galleryGifs: []
	}
};



export default function ProjectDetails() {
	const { projectId } = useParams<{ projectId: string }>();

	if (!projectId || !projectsData[projectId]) {
		return <Navigate to="/work" replace />;
	}

	const project = projectsData[projectId];

	return (
		<>
			<PageTitle
				label={project.category}
				mainTitle={project.title}
				subTitle="Project Details"
				description={project.description}
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
				{/* Project Overview */}
				<section>
					<PageHeading
						preTitle="Project"
						mainTitle="Overview"
						postTitle=""
					/>
					<div className="mt-8 space-y-6">
						<p className="text-lg text-muted-foreground leading-relaxed">
							{project.overview}
						</p>

						<div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-8">
							<div className="bg-foreground/5 border border-border rounded-xl p-6">
								<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">Client</h3>
								<p className="text-xl font-semibold text-foreground">{project.client}</p>
							</div>
							<div className="bg-foreground/5 border border-border rounded-xl p-6">
								<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">Duration</h3>
								<p className="text-xl font-semibold text-foreground">{project.duration}</p>
							</div>
							<div className="bg-foreground/5 border border-border rounded-xl p-6">
								<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">Category</h3>
								<p className="text-xl font-semibold text-foreground">{project.category}</p>
							</div>
						</div>
					</div>
				</section>

				{/* Media Section: Video -> Image Carousel -> GIF Carousel */}
				{(project.videoUrl || (project.galleryImages && project.galleryImages.length > 0) || (project.galleryGifs && project.galleryGifs.length > 0)) && (
					<section className="space-y-12">
						{/* Video Section */}
						{project.videoUrl && (
							<div>
								<PageHeading
									preTitle="Project"
									mainTitle="Video"
									postTitle="Demo"
								/>
								<div className="mt-8 rounded-xl border border-border bg-foreground/5 min-h-[500px] flex items-center justify-center">
									<video
										src={project.videoUrl}
										controls
										className="w-full h-full object-contain max-h-[600px]"
									>
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						)}

						{/* Image Carousel */}
						{project.galleryImages && project.galleryImages.length > 0 && (
							<div>
								<PageHeading
									preTitle="Project"
									mainTitle="Gallery"
									postTitle=""
								/>
								<div className="mt-8">
									<Carousel items={project.galleryImages} type="image" />
								</div>
							</div>
						)}

						{/* GIF Carousel */}
						{project.galleryGifs && project.galleryGifs.length > 0 && (
							<div>
								<PageHeading
									preTitle="Project"
									mainTitle="GIFs"
									postTitle=""
								/>
								<div className="mt-8">
									<Carousel items={project.galleryGifs} type="image" />
								</div>
							</div>
						)}
					</section>
				)}

				{/* Technologies */}
				<section>
					<PageHeading
						preTitle="Technologies"
						mainTitle="Used"
						postTitle=""
					/>
					<div className="mt-8 flex flex-wrap gap-3">
						{project.technologies.map((tech, idx) => (
							<div
								key={idx}
								className="bg-foreground/10 border border-border rounded-lg px-4 py-2 text-foreground font-medium"
							>
								{tech}
							</div>
						))}
					</div>
				</section>

				{/* Challenges & Solutions */}
				<section className="grid md:grid-cols-2 grid-cols-1 gap-8">
					<div>
						<div className="mb-6">
							<Indicator />
							<h2 className="text-3xl font-bold text-foreground mt-3">Challenges</h2>
						</div>
						<ul className="space-y-4">
							{project.challenges.map((challenge, idx) => (
								<li key={idx} className="flex gap-3">
									<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-sm font-bold mt-1">
										{idx + 1}
									</div>
									<p className="text-muted-foreground flex-1">{challenge}</p>
								</li>
							))}
						</ul>
					</div>

					<div>
						<div className="mb-6">
							<Indicator />
							<h2 className="text-3xl font-bold text-foreground mt-3">Solutions</h2>
						</div>
						<ul className="space-y-4">
							{project.solutions.map((solution, idx) => (
								<li key={idx} className="flex gap-3">
									<CheckCircle2 className="flex-shrink-0 w-6 h-6 text-green-500 mt-1" />
									<p className="text-muted-foreground flex-1">{solution}</p>
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Key Features */}
				<section>
					<PageHeading
						preTitle="Key"
						mainTitle="Features"
						postTitle=""
					/>
					<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
						{project.features.map((feature, idx) => (
							<div
								key={idx}
								className="bg-foreground/5 border border-border rounded-lg p-4 flex items-start gap-3"
							>
								<CheckCircle2 className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
								<p className="text-foreground">{feature}</p>
							</div>
						))}
					</div>
				</section>

				{/* Results & Impact */}
				<section>
					<PageHeading
						preTitle="Results"
						mainTitle="& Impact"
						postTitle=""
					/>
					<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
						{project.results.map((result, idx) => (
							<div
								key={idx}
								className="relative bg-gradient-to-br from-foreground/10 to-foreground/5 border border-border rounded-xl p-6 overflow-hidden"
							>
								<div className="absolute -top-4 -right-4 w-20 h-20 bg-foreground/5 rounded-full"></div>
								<div className="relative z-10">
									<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">
										{result.metric}
									</h3>
									<p className="text-3xl font-bold text-foreground">{result.value}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</>
	);
}
