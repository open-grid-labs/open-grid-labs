import { useState, useRef } from "react";
import { useParams, Navigate } from "react-router";
import PageHeading from "../../../components/page-heading";
import SEO from "../../../components/seo";
import {CheckCircle2, Shield, Lock, Cpu, Activity, Clock, Server, Layers, type LucideIcon} from "lucide-react";
import Indicator from "../../../components/ui/indicator";

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
}

const projectsData: Record<string, ProjectDetail> = {
	"safeguard": {
		id: "safeguard",
		title: "Safeguard.sh — Software Supply Chain Security, From Zero to Platform",
		description: "A comprehensive software supply chain security platform built from the ground up — helping enterprises find, fix, and prevent vulnerabilities before they ever reach production.",
		category: "Cybersecurity · DevSecOps · Enterprise SaaS",
		client: "Safeguard.sh",
		duration: "18 months",
		technologies: ["React", "TypeScript", "Node.js", "Go", "Python", "PostgreSQL", "OpenSearch", "Redis", "Kubernetes", "AWS", "OCI", "Docker", "GraphQL"],
		overview: "OpenGridLabs partnered with Safeguard from day one to design, build, and scale a full software supply chain security platform. What started as a focused SBOM (Software Bill of Materials) management tool grew into an end-to-end platform spanning vulnerability detection, automated remediation, cloud and API security posture management, compliance automation, and AI-native risk analysis — built to serve security teams at organizations that can't afford blind spots in their software supply chain. We didn't just ship a product. We architected the system that today powers everything from dependency-tree scanning to autonomous fix generation, built to meet the compliance bar of the most demanding industries, including FedRAMP High, IL7, and SOC 2 Type II.",
		challenges: [
			"Making sense of a fractured security landscape: Security teams were juggling a dozen disconnected tools — one for SBOMs, another for cloud posture, another for API security, another for compliance evidence.",
			"Detecting vulnerabilities before they're public knowledge: Traditional vulnerability scanning only catches what's already been disclosed as a CVE. We needed a way to surface risk earlier.",
			"Remediation fatigue: Finding a vulnerability is only half the problem. Security teams were drowning in findings with no realistic path to fixing them, burning engineering time on false positives.",
			"Meeting the compliance bar of regulated industries: Enterprise and government customers required audit-ready evidence, tenant isolation, and certifications like SOC 2 Type II, FedRAMP High, and IL7.",
			"Scaling from single-tenant tool to multi-tenant platform: As the customer base grew, the architecture had to support strict tenant isolation, org hierarchies, and role-based access."
		],
		solutions: [
			"Built a unified data model connecting SBOMs, vulnerabilities, cloud assets, APIs, and compliance controls into a queryable graph to provide a single source of truth.",
			"Engineered deep dependency-tree scanning that goes beyond top-level packages to surface risk buried in transitive dependencies.",
			"Developed taint-analysis-based detection capable of surfacing zero-day-class risk before a CVE is ever assigned.",
			"Designed autonomous remediation workflows that generate fix pull requests automatically, cutting the manual triage-to-fix cycle from days to minutes.",
			"Cut false positives dramatically through smarter reachability and context-aware analysis.",
			"Built compliance automation from the ground up — automated evidence collection, control mapping, and audit-ready reporting for SOC 2 Type II, FedRAMP High, and IL7.",
			"Architected strict multi-tenant isolation, role-based access controls, and audit trails so the platform could scale to enterprise and government customers."
		],
		features: [
			"Full-depth SBOM generation and dependency-tree scanning (SCA)",
			"Pre-CVE / zero-day risk discovery via taint analysis",
			"Autonomous, AI-generated fix pull requests",
			"SAST, DAST, IaC, container, Kubernetes, and secrets scanning",
			"Cloud security posture management (CSPM) across AWS, Azure, GCP",
			"API security posture management (discovery, OWASP API Top 10 coverage)",
			"Compliance automation across SOC 2, ISO 27001, HIPAA, PCI-DSS, NIST, GDPR, FedRAMP",
			"AI-native security posture management (model inventory, prompt-injection check, LLM supply chain check)",
			"Vendor and third-party risk management (TPRM)",
			"Real-time alerting, incident workflows, and SOC-style investigation tooling",
			"Deep integrations: GitHub, GitLab, Bitbucket, Azure DevOps, Slack, Jira, ServiceNow",
			"MCP-based agentic access for conversational security operations querying"
		],
		results: [
			{ metric: "MTTR Reduction", value: "-85%" },
			{ metric: "False Positives Cut", value: "90%" },
			{ metric: "Vulnerability Depth", value: "Full Transitive" },
			{ metric: "Compliance Readiness", value: "FedRAMP High & IL7" },
			{ metric: "Time to Market", value: "18 Months" },
			{ metric: "Platform Scope", value: "Zero to Enterprise Suite" }
		]
	}
};

const CUBE_FACES: { transform: string; icon: LucideIcon; label?: string; labelIcon?: string }[] = [
	{transform: "rotateY(0deg)", icon: Shield},
	{transform: "rotateY(180deg)", icon: Lock},
	{transform: "rotateY(90deg)", icon: Cpu},
	{transform: "rotateY(-90deg)", icon: Activity},
	{transform: "rotateX(90deg)", icon: Layers, label: "SECURE", labelIcon: "text-yellow-500"},
	{transform: "rotateX(-90deg)", icon: Server, label: "PLATFORM", labelIcon: "text-red-400"},
];

function ProjectDetailsHero({ project }: { project: ProjectDetail }) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const containerRef = useRef<HTMLElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		setMousePosition({
			x: (e.clientX - rect.left) / rect.width - 0.5,
			y: (e.clientY - rect.top) / rect.height - 0.5,
		});
	};

	const metas = [
		{icon: Server, iconClass: "text-primary", label: "Client", value: project.client},
		{icon: Clock, iconClass: "text-accent", label: "Duration", value: project.duration},
		{icon: Activity, iconClass: "text-green-500", label: "Status", value: "Production Live"},
	];

	return (
		<section
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={() => setMousePosition({x: 0, y: 0})}
			className="relative w-[95%] max-w-[1600px] mx-auto rounded-[36px] mt-2 mb-16 overflow-hidden p-8 md:p-16 lg:p-20 border border-border/10 shadow-2xl transition-all duration-700 bg-glass backdrop-blur-[24px]"
			style={{
				transform: `perspective(1000px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg)`,
				willChange: "transform",
			}}
		>
			{/* Perspective grid floor */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none" style={{perspective: "1000px"}}>
				<div
					className="absolute left-[-20%] right-[-20%] bottom-[-50%] h-[120%] opacity-40 dark:opacity-20"
					style={{
						transform: "rotateX(65deg)",
						transformOrigin: "center bottom",
						backgroundImage:
							"linear-gradient(to right, rgba(249,98,59,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,98,59,0.1) 1px, transparent 1px)",
						backgroundSize: "60px 60px",
					}}
				/>
			</div>
			<div
				className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"/>
			<div
				className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/80 dark:bg-accent/10 rounded-full blur-[150px] pointer-events-none"/>

			<div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
				<div className="flex-1 flex flex-col items-start">
					<div
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(249,98,59,0.1)]">
						<span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
						<span
							className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary">{project.category}</span>
					</div>
					<h1
						className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.2] text-foreground"
					>
						<span className="block mb-2 text-foreground/45 text-lg font-bold tracking-widest uppercase">CASE STUDY</span>
						{project.title}
					</h1>
					<p className="text-foreground/60 dark:text-foreground/45 text-base md:text-lg mt-6 max-w-2xl leading-relaxed font-light">
						{project.description}
					</p>
					<div className="flex flex-wrap gap-4 mt-8 w-full border-t border-foreground/5 pt-6">
						{metas.map(({icon: Icon, iconClass, label, value}) => (
							<div key={label}
							     className="flex items-center gap-3 bg-foreground/5 px-4 py-3 rounded-2xl border border-border/10">
								<Icon className={`w-4 h-4 ${iconClass}`}/>
								<div>
									<span
										className="text-[9px] uppercase tracking-wider text-muted-foreground block font-bold">{label}</span>
									<span className="text-xs font-semibold text-foreground">{value}</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="flex-shrink-0 w-full lg:w-auto flex items-center justify-center relative min-h-[340px] px-8">
					<div
						className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-primary/25"
						style={{animation: "spinRing 25s linear infinite"}}
					/>
					<div
						className="absolute w-[380px] h-[380px] rounded-full border border-dotted border-primary/20"
						style={{animation: "spinRingRev 30s linear infinite"}}
					/>
					<div className="relative w-[min(220px,45vw)] h-[min(220px,45vw)] transform-3d"
					     style={{perspective: "1200px"}}>
						<div className="absolute inset-0 transform-3d"
						     style={{animation: "rotateCube 20s linear infinite"}}>
							{CUBE_FACES.map(({transform, icon: Icon, label, labelIcon}) => (
								<div
									key={transform}
									className="absolute inset-0 flex flex-col gap-1 items-center justify-center border-[1.5px] border-primary/35 bg-primary/6 backdrop-blur-[6px] shadow-[inset_0_0_40px_rgba(249,98,59,0.15)] dark:border-primary/40 dark:bg-primary/4 dark:shadow-[inset_0_0_40px_rgba(249,98,59,0.1)]"
									style={{transform: `${transform} translateZ(min(110px, 22.5vw))`}}
								>
									{label ? (
										<>
											<Icon className={`w-6 h-6 ${labelIcon}`}/>
											<span
												className="text-[9px] tracking-widest text-foreground/50 font-mono">{label}</span>
										</>
									) : (
										<Icon
											className="w-12 h-12 text-primary drop-shadow-[0_0_15px_rgba(249,98,59,0.6)]"/>
									)}
								</div>
							))}
						</div>
					</div>
					<div
						className="absolute bottom-6 w-48 h-10 rounded-full blur-[8px] opacity-60 pointer-events-none"
						style={{background: "radial-gradient(ellipse at 50% 50%, rgba(249,98,59,0.4), transparent 75%)"}}
					/>
				</div>
			</div>
		</section>
	);
}

function ListHeading({children}: { children: string }) {
	return (
		<div className="mb-6">
			<Indicator/>
			<h2 className="text-3xl font-bold text-foreground mt-3">{children}</h2>
		</div>
	);
}

export default function ProjectDetails() {
	const { projectId } = useParams<{ projectId: string }>();
	const project = projectId ? projectsData[projectId] : undefined;

	if (!project) return <Navigate to="/work" replace/>;

	return (
		<>
			<SEO
				title={`${project.title} - Case Study`}
				description={project.overview.slice(0, 160)}
				canonical={`/work/${projectId}`}
				keywords={project.technologies.join(", ")}
			/>
			<ProjectDetailsHero project={project} />

			<div className="w-[90%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
				<section>
					<PageHeading preTitle="Project" mainTitle="Overview"/>
					<p className="mt-8 text-lg text-muted-foreground leading-relaxed">{project.overview}</p>
				</section>

				<section>
					<PageHeading preTitle="Technologies" mainTitle="Used"/>
					<div className="mt-8 flex flex-wrap gap-3">
						{project.technologies.map((tech) => (
							<div
								key={tech}
								className="bg-white/50 dark:bg-foreground/10 border border-border rounded-lg px-4 py-2 text-foreground font-medium"
							>
								{tech}
							</div>
						))}
					</div>
				</section>

				<section className="grid md:grid-cols-2 grid-cols-1 gap-8">
					<div>
						<ListHeading>Challenges</ListHeading>
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
						<ListHeading>Solutions</ListHeading>
						<ul className="space-y-4">
							{project.solutions.map((solution) => (
								<li key={solution} className="flex gap-3">
									<CheckCircle2 className="flex-shrink-0 w-6 h-6 text-green-500 mt-1" />
									<p className="text-muted-foreground flex-1">{solution}</p>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section>
					<PageHeading preTitle="Key" mainTitle="Features"/>
					<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
						{project.features.map((feature) => (
							<div
								key={feature}
								className="bg-white/50 dark:bg-foreground/5 border border-border rounded-lg p-4 flex items-start gap-3"
							>
								<CheckCircle2 className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
								<p className="text-foreground">{feature}</p>
							</div>
						))}
					</div>
				</section>

				<section>
					<PageHeading preTitle="Results" mainTitle="& Impact"/>
					<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
						{project.results.map((result) => (
							<div
								key={result.metric}
								className="relative bg-gradient-to-br from-foreground/10 to-foreground/5 border border-border rounded-xl p-6 overflow-hidden"
							>
								<div
									className="absolute -top-4 -right-4 w-20 h-20 bg-white/50 dark:bg-foreground/5 rounded-full"/>
								<div className="relative z-10">
									<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">{result.metric}</h3>
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
