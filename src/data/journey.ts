import {Microscope, PiggyBank, Hammer, Megaphone, Rocket, type LucideIcon} from "lucide-react";

export type Stage = {
	id: string;
	step: string;
	title: string;
	nickname: string;
	when: string;
	icon: LucideIcon;
	/** Tailwind background class for the stage's sticker colour */
	bg: string;
	summary: string;
	weDo: string[];
	youGet: string[];
};

export const stages: Stage[] = [
	{
		id: "analyse",
		step: "01",
		title: "Analyse your idea",
		nickname: "The idea X-ray",
		when: "Weeks 1–2",
		icon: Microscope,
		bg: "bg-lilac",
		summary:
			"Before anyone writes a line of code, we pressure-test the idea: who it's for, what problem it really solves, who else is out there, and what the smallest useful version looks like.",
		weDo: [
			"Problem & target-user deep dive",
			"Competitor and market scan",
			"Define the leanest MVP that proves the idea",
			"Honest go / pivot / rethink call",
		],
		youGet: ["Idea analysis report", "MVP feature scope", "Risk list — the stuff that could sink it"],
	},
	{
		id: "budget",
		step: "02",
		title: "Build the budget",
		nickname: "The money map",
		when: "Week 2",
		icon: PiggyBank,
		bg: "bg-accent",
		summary:
			"A clear, line-by-line budget for getting to market — build, tools, launch and first-customer costs. No surprise invoices, no vague 'it depends'.",
		weDo: [
			"Line-item cost for every MVP feature",
			"Tooling & third-party service costs",
			"Launch and first-customer spend plan",
			"Milestone-based payment plan",
		],
		youGet: ["MVP budget sheet", "Milestone plan", "Servers on us till your first customer — $0 hosting"],
	},
	{
		id: "build",
		step: "03",
		title: "Idea → MVP",
		nickname: "The build sprint",
		when: "Weeks 3–10",
		icon: Hammer,
		bg: "bg-primary",
		summary:
			"Design, build and test the MVP. Our engineers pair with AI coding agents to move fast without cutting corners, and you see a working demo every single week.",
		weDo: [
			"UX flows & clickable designs",
			"Web / mobile app engineering",
			"AI-assisted code review & testing",
			"Deploy to our servers (100% uptime)",
		],
		youGet: ["A live, working MVP", "Weekly demo + progress report", "Clean, documented code you own"],
	},
	{
		id: "customers",
		step: "04",
		title: "Land first customers",
		nickname: "The first fans",
		when: "Weeks 9–12",
		icon: Megaphone,
		bg: "bg-mint",
		summary:
			"An MVP nobody uses proves nothing. We help you launch, reach your first real users, and measure what they actually do — so decisions come from data, not gut feel.",
		weDo: [
			"Launch plan & landing page",
			"Outreach to your first target users",
			"Onboarding & feedback loops",
			"Product analytics set up from day one",
		],
		youGet: ["Market test report", "Real user feedback", "What to build (and kill) next"],
	},
	{
		id: "scale",
		step: "05",
		title: "Scale it up",
		nickname: "The growth engine",
		when: "After 90 days",
		icon: Rocket,
		bg: "bg-sky",
		summary:
			"Found traction? We stay on as your tech co-builder — hardening the architecture, scaling servers and shipping the features your users are asking for.",
		weDo: [
			"Architecture & performance hardening",
			"Infrastructure that grows with usage",
			"Feature roadmap driven by real data",
			"Help hiring & handing over to your own team",
		],
		youGet: ["Scale roadmap", "A product ready for growth", "A partner, not a vendor"],
	},
];

export const months = [
	{
		month: "Month 1",
		title: "Think & design",
		bg: "bg-lilac",
		items: ["Idea analysis & MVP scope", "Budget & milestone plan", "UX flows and clickable designs", "Servers provisioned (free)"],
		report: "Idea analysis report + budget",
	},
	{
		month: "Month 2",
		title: "Build",
		bg: "bg-primary",
		items: ["Core features engineered", "AI-assisted testing & review", "Weekly live demos", "Staging environment you can click"],
		report: "Weekly progress reports",
	},
	{
		month: "Month 3",
		title: "Launch & learn",
		bg: "bg-mint",
		items: ["MVP live for real users", "First-customer outreach", "Analytics & feedback loops", "Next-step plan: pivot, iterate or scale"],
		report: "MVP market test report",
	},
];
