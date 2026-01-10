import { useState, useId, useEffect, type DragEvent, type ChangeEvent } from "react";
import PageTitle from "../../../components/page-title";
import PageHeading from "../../../components/page-heading";
import { Briefcase, Code, TestTube, Shield, Users, Megaphone, GraduationCap, MapPin, Clock, ChevronDown, ChevronUp, Send, X, Upload } from "lucide-react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface JobPosition {
	id: string;
	title: string;
	department: string;
	type: "Full-time" | "Intern";
	location: string;
	experience: string;
	description: string;
	responsibilities: string[];
	requirements: string[];
	niceToHave?: string[];
	icon: React.ReactNode;
}

const jobPositions: JobPosition[] = [
	// Full-time Positions
	{
		id: "software-developer",
		title: "Software Developer",
		department: "Engineering",
		type: "Full-time",
		location: "Remote / On-site",
		experience: "2-5 years",
		description: "We're looking for a talented Software Developer to join our engineering team. You'll work on cutting-edge projects, building scalable web and mobile applications using modern technologies.",
		responsibilities: [
			"Design, develop, and maintain high-quality software applications",
			"Collaborate with cross-functional teams to define and implement new features",
			"Write clean, maintainable, and well-documented code",
			"Participate in code reviews and provide constructive feedback",
			"Troubleshoot and debug applications to optimize performance",
			"Stay up-to-date with emerging technologies and industry trends"
		],
		requirements: [
			"Bachelor's degree in Computer Science or related field",
			"2+ years of experience in software development",
			"Proficiency in React, TypeScript, and Node.js",
			"Experience with databases (PostgreSQL, MongoDB)",
			"Strong problem-solving and analytical skills",
			"Excellent communication and teamwork abilities"
		],
		niceToHave: [
			"Experience with cloud platforms (AWS, GCP, Azure)",
			"Knowledge of CI/CD pipelines",
			"Contributions to open-source projects"
		],
		icon: <Code className="w-6 h-6" />
	},
	{
		id: "sdet",
		title: "SDET (Software Development Engineer in Test)",
		department: "Quality Engineering",
		type: "Full-time",
		location: "Remote / On-site",
		experience: "2-4 years",
		description: "Join our Quality Engineering team as an SDET to build robust test automation frameworks and ensure the highest quality of our software products.",
		responsibilities: [
			"Design and develop automated test frameworks and scripts",
			"Create and maintain CI/CD pipeline integrations for testing",
			"Perform API, integration, and end-to-end testing",
			"Collaborate with developers to implement testable code",
			"Analyze test results and report defects with detailed information",
			"Continuously improve testing processes and methodologies"
		],
		requirements: [
			"Bachelor's degree in Computer Science or related field",
			"2+ years of experience in test automation",
			"Proficiency in testing frameworks (Selenium, Cypress, Playwright)",
			"Strong programming skills in JavaScript/TypeScript or Python",
			"Experience with API testing tools (Postman, REST Assured)",
			"Understanding of Agile/Scrum methodologies"
		],
		niceToHave: [
			"Experience with performance testing tools (JMeter, k6)",
			"Knowledge of containerization (Docker, Kubernetes)",
			"ISTQB or similar certification"
		],
		icon: <Shield className="w-6 h-6" />
	},
	{
		id: "quality-tester",
		title: "Quality Tester",
		department: "Quality Assurance",
		type: "Full-time",
		location: "Remote / On-site",
		experience: "1-3 years",
		description: "We're seeking a detail-oriented Quality Tester to ensure our products meet the highest standards of quality and user experience.",
		responsibilities: [
			"Execute manual and exploratory testing on web and mobile applications",
			"Create comprehensive test cases and test plans",
			"Document and track bugs using issue tracking systems",
			"Verify bug fixes and perform regression testing",
			"Collaborate with developers and product managers",
			"Participate in sprint planning and review meetings"
		],
		requirements: [
			"1+ years of experience in software testing",
			"Strong understanding of QA methodologies and processes",
			"Experience with bug tracking tools (Jira, Azure DevOps)",
			"Excellent attention to detail and analytical skills",
			"Good written and verbal communication skills",
			"Basic understanding of web technologies (HTML, CSS, JavaScript)"
		],
		niceToHave: [
			"Experience with test management tools (TestRail, Zephyr)",
			"Basic knowledge of SQL",
			"Familiarity with Agile/Scrum practices"
		],
		icon: <TestTube className="w-6 h-6" />
	},
	{
		id: "project-manager",
		title: "Project Manager",
		department: "Project Management",
		type: "Full-time",
		location: "Remote / On-site",
		experience: "3-6 years",
		description: "Lead and deliver successful projects by coordinating cross-functional teams, managing timelines, and ensuring client satisfaction.",
		responsibilities: [
			"Plan, execute, and close projects on time and within budget",
			"Define project scope, goals, and deliverables",
			"Coordinate internal resources and third-party vendors",
			"Manage project risks and develop mitigation strategies",
			"Communicate project status to stakeholders and clients",
			"Ensure resource availability and optimal allocation"
		],
		requirements: [
			"Bachelor's degree in Business, IT, or related field",
			"3+ years of project management experience in IT/Software",
			"Proficiency in project management tools (Jira, Asana, MS Project)",
			"Strong understanding of Agile and Waterfall methodologies",
			"Excellent leadership and interpersonal skills",
			"PMP or Scrum Master certification preferred"
		],
		niceToHave: [
			"Experience managing remote teams",
			"Technical background in software development",
			"Client-facing experience"
		],
		icon: <Users className="w-6 h-6" />
	},
	{
		id: "marketing-expert",
		title: "Project Marketing Expert",
		department: "Marketing",
		type: "Full-time",
		location: "Remote / On-site",
		experience: "2-5 years",
		description: "Drive our marketing initiatives and help us reach new audiences through creative campaigns, content strategy, and digital marketing.",
		responsibilities: [
			"Develop and execute marketing strategies for projects and services",
			"Create compelling content for various platforms (website, social media, email)",
			"Manage digital marketing campaigns (SEO, SEM, social media ads)",
			"Analyze marketing metrics and optimize campaigns",
			"Collaborate with sales team to generate and nurture leads",
			"Build and maintain relationships with industry influencers"
		],
		requirements: [
			"Bachelor's degree in Marketing, Communications, or related field",
			"2+ years of experience in B2B or tech marketing",
			"Proficiency in digital marketing tools (Google Analytics, HubSpot, SEMrush)",
			"Strong content writing and storytelling skills",
			"Experience with social media marketing and management",
			"Data-driven mindset with analytical capabilities"
		],
		niceToHave: [
			"Experience in IT/Software industry marketing",
			"Knowledge of marketing automation tools",
			"Graphic design skills (Figma, Canva)"
		],
		icon: <Megaphone className="w-6 h-6" />
	},
	// Intern Positions
	{
		id: "software-developer-intern",
		title: "Software Developer Intern",
		department: "Engineering",
		type: "Intern",
		location: "Remote / On-site",
		experience: "Fresher / Students",
		description: "Kickstart your career in software development! Join our team as an intern and gain hands-on experience building real-world applications.",
		responsibilities: [
			"Assist in developing web and mobile applications",
			"Learn and apply modern development practices",
			"Participate in code reviews and team meetings",
			"Write unit tests and documentation",
			"Collaborate with senior developers on projects",
			"Complete assigned tasks and mini-projects"
		],
		requirements: [
			"Currently pursuing or recently completed degree in CS/IT",
			"Basic knowledge of programming (JavaScript, Python, or similar)",
			"Familiarity with HTML, CSS, and web fundamentals",
			"Eagerness to learn and grow",
			"Good communication skills",
			"Ability to work 20-40 hours per week"
		],
		icon: <GraduationCap className="w-6 h-6" />
	},
	{
		id: "sdet-intern",
		title: "SDET Intern",
		department: "Quality Engineering",
		type: "Intern",
		location: "Remote / On-site",
		experience: "Fresher / Students",
		description: "Learn test automation and quality engineering from industry experts. Build your career in the growing field of software testing.",
		responsibilities: [
			"Learn and implement test automation frameworks",
			"Write automated test scripts under guidance",
			"Assist in API and integration testing",
			"Document test cases and results",
			"Participate in QA team activities",
			"Learn CI/CD integration for testing"
		],
		requirements: [
			"Currently pursuing or recently completed degree in CS/IT",
			"Basic programming knowledge",
			"Interest in software testing and quality assurance",
			"Attention to detail",
			"Willingness to learn testing tools and frameworks",
			"Good analytical and problem-solving skills"
		],
		icon: <GraduationCap className="w-6 h-6" />
	},
	{
		id: "quality-tester-intern",
		title: "Quality Tester Intern",
		department: "Quality Assurance",
		type: "Intern",
		location: "Remote / On-site",
		experience: "Fresher / Students",
		description: "Start your QA journey with us! Learn software testing fundamentals and gain practical experience in ensuring product quality.",
		responsibilities: [
			"Execute test cases on web and mobile applications",
			"Learn to write effective test cases",
			"Report bugs and track issues",
			"Assist in regression testing",
			"Learn QA tools and methodologies",
			"Participate in team meetings and reviews"
		],
		requirements: [
			"Currently pursuing or recently completed degree in CS/IT",
			"Basic understanding of software development lifecycle",
			"Strong attention to detail",
			"Good written communication skills",
			"Curiosity and willingness to learn",
			"Basic computer and internet skills"
		],
		icon: <GraduationCap className="w-6 h-6" />
	},
	{
		id: "project-manager-intern",
		title: "Project Manager Intern",
		department: "Project Management",
		type: "Intern",
		location: "Remote / On-site",
		experience: "Fresher / Students",
		description: "Learn the art of project management! Gain exposure to real projects and develop skills in planning, coordination, and leadership.",
		responsibilities: [
			"Assist project managers in daily activities",
			"Help maintain project documentation",
			"Coordinate meetings and prepare minutes",
			"Track project tasks and timelines",
			"Learn project management tools and methodologies",
			"Support in client communication"
		],
		requirements: [
			"Currently pursuing degree in Business, IT, or related field",
			"Strong organizational skills",
			"Proficiency in MS Office / Google Workspace",
			"Excellent communication skills",
			"Ability to multitask and prioritize",
			"Interest in IT/Software industry"
		],
		icon: <GraduationCap className="w-6 h-6" />
	},
	{
		id: "marketing-intern",
		title: "Marketing Intern",
		department: "Marketing",
		type: "Intern",
		location: "Remote / On-site",
		experience: "Fresher / Students",
		description: "Explore the world of digital marketing! Learn content creation, social media management, and marketing analytics.",
		responsibilities: [
			"Assist in creating marketing content",
			"Manage social media posts and engagement",
			"Help with email marketing campaigns",
			"Research industry trends and competitors",
			"Support in marketing analytics and reporting",
			"Assist in event planning and execution"
		],
		requirements: [
			"Currently pursuing degree in Marketing, Communications, or related field",
			"Strong writing and communication skills",
			"Familiarity with social media platforms",
			"Creative mindset",
			"Basic knowledge of design tools is a plus",
			"Enthusiasm for digital marketing"
		],
		icon: <GraduationCap className="w-6 h-6" />
	}
];

// Resume Upload Component
function ResumeUpload({ file, onChange }: { file: File | null; onChange: (file: File | null) => void }) {
	const inputId = useId();

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			const droppedFile = e.dataTransfer.files[0];
			if (validateFile(droppedFile)) {
				onChange(droppedFile);
			}
		}
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const selectedFile = e.target.files[0];
			if (validateFile(selectedFile)) {
				onChange(selectedFile);
			}
		}
	};

	const validateFile = (file: File): boolean => {
		const maxSize = 10 * 1024 * 1024; // 10MB
		const allowedTypes = [
			'application/pdf',
			'application/msword',
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
			'image/jpeg',
			'image/png'
		];

		if (file.size > maxSize) {
			toast.error("File size must be less than 10MB");
			return false;
		}

		if (!allowedTypes.includes(file.type)) {
			toast.error("Please upload PDF, DOC, DOCX, JPG, or PNG files only");
			return false;
		}

		return true;
	};

	const handleClick = () => {
		document.getElementById(inputId)?.click();
	};

	const handleRemove = (e: React.MouseEvent) => {
		e.stopPropagation();
		onChange(null);
	};

	return (
		<div className="flex flex-col gap-2 w-full">
			<label className="text-foreground font-semibold text-base">
				Resume / CV <span className="text-red-500">*</span>
			</label>
			<div
				className="flex flex-col items-center justify-center w-full h-32 bg-foreground/5 text-foreground border border-dashed border-border rounded-xl cursor-pointer hover:bg-foreground/10 transition-colors"
				onDrop={handleDrop}
				onDragOver={(e) => e.preventDefault()}
				onClick={handleClick}
			>
				<div className="flex flex-col items-center justify-center text-center px-4">
					{file ? (
						<div className="flex flex-col items-center gap-2">
							<p className="font-semibold text-foreground text-sm">{file.name}</p>
							<p className="text-xs text-muted-foreground">
								{(file.size / 1024 / 1024).toFixed(2)} MB
							</p>
							<button
								type="button"
								onClick={handleRemove}
								className="inline-flex items-center text-red-500 hover:text-red-700 font-medium text-sm transition-colors"
							>
								Remove file
							</button>
						</div>
					) : (
						<>
							<Upload className="w-6 h-6 mb-2 text-muted-foreground" />
							<p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
							<p className="text-xs text-muted-foreground">PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
						</>
					)}
				</div>
			</div>
			<input
				id={inputId}
				type="file"
				className="hidden"
				accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
				onChange={handleFileChange}
			/>
		</div>
	);
}

// Application Form Modal
function ApplicationModal({ 
	isOpen, 
	onClose, 
	selectedPosition 
}: { 
	isOpen: boolean; 
	onClose: () => void; 
	selectedPosition: string;
}) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		position: selectedPosition,
		experience: '',
		coverLetter: ''
	});
	const [resume, setResume] = useState<File | null>(null);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [loading, setLoading] = useState(false);

	// Update position when selectedPosition changes
	useEffect(() => {
		setFormData(prev => ({ ...prev, position: selectedPosition }));
	}, [selectedPosition]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		let newErrors: Record<string, string> = {};

		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.email.trim()) newErrors.email = "Email is required";
		if (!formData.phone) newErrors.phone = "Phone number is required";
		if (!formData.position) newErrors.position = "Position is required";
		if (!formData.experience) newErrors.experience = "Experience is required";
		if (!resume) newErrors.resume = "Resume is required";

		// Validate file size (Web3Forms limit is 10MB)
		if (resume && resume.size > 10 * 1024 * 1024) {
			newErrors.resume = "File size must be less than 10MB";
		}

		setErrors(newErrors);

		if (Object.keys(newErrors).length > 0) return;

		setLoading(true);

		const fd = new FormData();
		// Required by Web3Forms
		fd.append("access_key", "7ce8502f-e86a-4944-a377-30c9e87456ad");
		fd.append("subject", `Job Application: ${formData.position} - ${formData.name}`);
		fd.append("from_name", formData.name);
		
		// Form fields
		fd.append("Name", formData.name);
		fd.append("Email", formData.email);
		fd.append("Phone", formData.phone);
		fd.append("Position Applied", formData.position);
		fd.append("Experience", formData.experience);
		if (formData.coverLetter) {
			fd.append("Cover Letter", formData.coverLetter);
		}
		
		// File attachment - must be last and use correct field name
		if (resume) {
			fd.append("attachment", resume, resume.name);
		}

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: fd
			});
			const data = await response.json();
			
			console.log("Web3Forms response:", data);
			
			if (data.success) {
				toast.success("Application submitted successfully!");
				setFormData({
					name: '',
					email: '',
					phone: '',
					position: '',
					experience: '',
					coverLetter: ''
				});
				setResume(null);
				onClose();
			} else {
				console.error("Web3Forms error:", data);
				toast.error(data.message || "Error submitting application. Please try again.");
			}
		} catch (error) {
			console.error("Submit error:", error);
			toast.error("Network error. Please check your connection and try again.");
		}
		
		setLoading(false);
	};

	if (!isOpen) return null;

	const allPositions = jobPositions.map(job => job.title);

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* Backdrop */}
			<div 
				className="absolute inset-0 bg-black/70 backdrop-blur-sm"
				onClick={onClose}
			/>
			
			{/* Modal */}
			<div className="relative bg-background border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
				{/* Header */}
				<div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
					<h2 className="text-2xl font-bold text-foreground">Apply for Position</h2>
					<button
						onClick={onClose}
						className="p-2 hover:bg-foreground/10 rounded-lg transition-colors"
					>
						<X className="w-5 h-5 text-foreground" />
					</button>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className="p-6 space-y-6">
					{/* Name & Email */}
					<div className="grid md:grid-cols-2 gap-4">
						<div className="flex flex-col gap-2">
							<label className="text-foreground font-semibold text-base">
								Full Name <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								value={formData.name}
								onChange={(e) => {
									setFormData({ ...formData, name: e.target.value });
									if (errors.name) setErrors({ ...errors, name: '' });
								}}
								placeholder="John Doe"
								className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
							/>
							{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-foreground font-semibold text-base">
								Email <span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								value={formData.email}
								onChange={(e) => {
									setFormData({ ...formData, email: e.target.value });
									if (errors.email) setErrors({ ...errors, email: '' });
								}}
								placeholder="john@example.com"
								className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
							/>
							{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
						</div>
					</div>

					{/* Phone */}
					<div className="flex flex-col gap-2">
						<label className="text-foreground font-semibold text-base">
							Phone Number <span className="text-red-500">*</span>
						</label>
						<div className="border border-border rounded-xl px-2 py-1">
							<PhoneInput
								country="in"
								value={formData.phone}
								onChange={(v) => {
									setFormData({ ...formData, phone: v });
									if (errors.phone) setErrors({ ...errors, phone: '' });
								}}
								containerClass="!w-full"
								inputClass="!w-full !text-base !bg-transparent !border-none !outline-none !shadow-none text-foreground placeholder:text-muted-foreground"
								buttonClass="!bg-transparent !border-none !outline-none"
								dropdownClass="!bg-card !text-foreground"
							/>
						</div>
						{errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
					</div>

					{/* Position Selection */}
					<div className="flex flex-col gap-2">
						<label className="text-foreground font-semibold text-base">
							Position Applying For <span className="text-red-500">*</span>
						</label>
						<select
							value={formData.position}
							onChange={(e) => {
								setFormData({ ...formData, position: e.target.value });
								if (errors.position) setErrors({ ...errors, position: '' });
							}}
							className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
						>
							<option value="">Select a position</option>
							{allPositions.map((pos) => (
								<option key={pos} value={pos}>{pos}</option>
							))}
						</select>
						{errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
					</div>

					{/* Experience */}
					<div className="flex flex-col gap-2">
						<label className="text-foreground font-semibold text-base">
							Years of Experience <span className="text-red-500">*</span>
						</label>
						<select
							value={formData.experience}
							onChange={(e) => {
								setFormData({ ...formData, experience: e.target.value });
								if (errors.experience) setErrors({ ...errors, experience: '' });
							}}
							className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
						>
							<option value="">Select experience</option>
							<option value="Fresher">Fresher (0-1 years)</option>
							<option value="1-2 years">1-2 years</option>
							<option value="2-4 years">2-4 years</option>
							<option value="4-6 years">4-6 years</option>
							<option value="6+ years">6+ years</option>
						</select>
						{errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
					</div>

					{/* Resume Upload */}
					<div>
						<ResumeUpload file={resume} onChange={(file) => {
							setResume(file);
							if (errors.resume) setErrors({ ...errors, resume: '' });
						}} />
						{errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
					</div>

					{/* Cover Letter */}
					<div className="flex flex-col gap-2">
						<label className="text-foreground font-semibold text-base">
							Cover Letter / Message (Optional)
						</label>
						<textarea
							value={formData.coverLetter}
							onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
							placeholder="Tell us about yourself and why you're interested in this position..."
							rows={4}
							className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
						/>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						disabled={loading}
						className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-semibold hover:bg-foreground/85 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{loading ? (
							<span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
						) : (
							<>
								<Send className="w-4 h-4" />
								Submit Application
							</>
						)}
					</button>
				</form>
			</div>
		</div>
	);
}

function JobCard({ job, isExpanded, onToggle, onApply }: { job: JobPosition; isExpanded: boolean; onToggle: () => void; onApply: (position: string) => void }) {
	return (
		<div className="bg-foreground/5 border border-border rounded-xl overflow-hidden transition-all duration-300">
			<div
				className="p-6 cursor-pointer hover:bg-foreground/10 transition-colors"
				onClick={onToggle}
			>
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<div className="flex items-start gap-4">
						<div className="p-3 bg-foreground/10 rounded-lg text-foreground">
							{job.icon}
						</div>
						<div>
							<h3 className="text-xl font-bold text-foreground">{job.title}</h3>
							<p className="text-muted-foreground">{job.department}</p>
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-3">
						<span className={`px-3 py-1 rounded-full text-sm font-medium ${job.type === "Intern" ? "bg-purple-500/20 text-purple-400" : "bg-green-500/20 text-green-400"}`}>
							{job.type}
						</span>
						<span className="flex items-center gap-1 text-sm text-muted-foreground">
							<MapPin className="w-4 h-4" /> {job.location}
						</span>
						<span className="flex items-center gap-1 text-sm text-muted-foreground">
							<Clock className="w-4 h-4" /> {job.experience}
						</span>
						{isExpanded ? <ChevronUp className="w-5 h-5 text-foreground" /> : <ChevronDown className="w-5 h-5 text-foreground" />}
					</div>
				</div>
			</div>

			{isExpanded && (
				<div className="px-6 pb-6 border-t border-border pt-6 space-y-6">
					<div>
						<p className="text-muted-foreground leading-relaxed">{job.description}</p>
					</div>

					<div>
						<h4 className="text-lg font-semibold text-foreground mb-3">Responsibilities</h4>
						<ul className="space-y-2">
							{job.responsibilities.map((item, idx) => (
								<li key={idx} className="flex items-start gap-2 text-muted-foreground">
									<span className="text-foreground mt-1">•</span>
									{item}
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold text-foreground mb-3">Requirements</h4>
						<ul className="space-y-2">
							{job.requirements.map((item, idx) => (
								<li key={idx} className="flex items-start gap-2 text-muted-foreground">
									<span className="text-foreground mt-1">•</span>
									{item}
								</li>
							))}
						</ul>
					</div>

					{job.niceToHave && (
						<div>
							<h4 className="text-lg font-semibold text-foreground mb-3">Nice to Have</h4>
							<ul className="space-y-2">
								{job.niceToHave.map((item, idx) => (
									<li key={idx} className="flex items-start gap-2 text-muted-foreground">
										<span className="text-foreground mt-1">•</span>
										{item}
									</li>
								))}
							</ul>
						</div>
					)}

					<div className="pt-4">
						<button
							onClick={(e) => {
								e.stopPropagation();
								onApply(job.title);
							}}
							className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-semibold hover:bg-foreground/85 transition-colors"
						>
							<Send className="w-4 h-4" />
							Apply Now
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default function Career() {
	const [expandedJob, setExpandedJob] = useState<string | null>(null);
	const [filter, setFilter] = useState<"all" | "Full-time" | "Intern">("all");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedPosition, setSelectedPosition] = useState("");

	const handleApply = (position: string) => {
		setSelectedPosition(position);
		setIsModalOpen(true);
	};

	const filteredJobs = filter === "all" 
		? jobPositions 
		: jobPositions.filter(job => job.type === filter);

	const fullTimeJobs = jobPositions.filter(job => job.type === "Full-time");
	const internJobs = jobPositions.filter(job => job.type === "Intern");

	return (
		<>
			<PageTitle
				label="Join Our Team"
				mainTitle="Career"
				subTitle="At"
				description="Join our dynamic team to innovate, grow, and shape the future with exciting opportunities, continuous learning, and meaningful impact."
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
				{/* Why Join Us Section */}
				<section>
					<PageHeading
						preTitle="Why"
						mainTitle="Join Us"
						postTitle=""
						icon={Briefcase}
					/>
					<div className="mt-8 grid md:grid-cols-3 gap-6">
						<div className="bg-foreground/5 border border-border rounded-xl p-6 text-center">
							<div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<Code className="w-6 h-6 text-foreground" />
							</div>
							<h3 className="text-xl font-bold text-foreground mb-2">Cutting-Edge Tech</h3>
							<p className="text-muted-foreground">Work with the latest technologies and tools on exciting projects across various domains.</p>
						</div>
						<div className="bg-foreground/5 border border-border rounded-xl p-6 text-center">
							<div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<GraduationCap className="w-6 h-6 text-foreground" />
							</div>
							<h3 className="text-xl font-bold text-foreground mb-2">Continuous Learning</h3>
							<p className="text-muted-foreground">Grow your skills with mentorship, training programs, and opportunities to learn from experts.</p>
						</div>
						<div className="bg-foreground/5 border border-border rounded-xl p-6 text-center">
							<div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<Users className="w-6 h-6 text-foreground" />
							</div>
							<h3 className="text-xl font-bold text-foreground mb-2">Great Culture</h3>
							<p className="text-muted-foreground">Be part of a collaborative, inclusive team that values innovation and work-life balance.</p>
						</div>
					</div>
				</section>

				{/* Filter Tabs */}
				<section>
					<PageHeading
						preTitle="Open"
						mainTitle="Positions"
						postTitle=""
						icon={Briefcase}
					/>
					<div className="mt-8 flex flex-wrap gap-4 mb-8">
						<button
							onClick={() => setFilter("all")}
							className={`px-6 py-2 rounded-xl font-medium transition-colors ${filter === "all" ? "bg-foreground text-background" : "bg-foreground/10 text-foreground hover:bg-foreground/20"}`}
						>
							All ({jobPositions.length})
						</button>
						<button
							onClick={() => setFilter("Full-time")}
							className={`px-6 py-2 rounded-xl font-medium transition-colors ${filter === "Full-time" ? "bg-foreground text-background" : "bg-foreground/10 text-foreground hover:bg-foreground/20"}`}
						>
							Full-time ({fullTimeJobs.length})
						</button>
						<button
							onClick={() => setFilter("Intern")}
							className={`px-6 py-2 rounded-xl font-medium transition-colors ${filter === "Intern" ? "bg-foreground text-background" : "bg-foreground/10 text-foreground hover:bg-foreground/20"}`}
						>
							Internships ({internJobs.length})
						</button>
					</div>

					{/* Job Listings */}
					<div className="space-y-4">
						{filteredJobs.map((job) => (
							<JobCard
								key={job.id}
								job={job}
								isExpanded={expandedJob === job.id}
								onToggle={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
								onApply={handleApply}
							/>
						))}
					</div>
				</section>
			</div>

			{/* Application Modal */}
			<ApplicationModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				selectedPosition={selectedPosition}
			/>
		</>
	);
}