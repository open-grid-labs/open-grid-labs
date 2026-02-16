import { useState, useEffect } from "react";
import PageTitle from "../../../components/page-title";
import SEO from "../../../components/seo";
import PageHeading from "../../../components/page-heading";
import { Briefcase, GraduationCap, MapPin, Clock, ChevronDown, ChevronUp, Send, X } from "lucide-react";
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

];

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
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedPosition, setSelectedPosition] = useState("");

	const handleApply = (position: string) => {
		setSelectedPosition(position);
		setIsModalOpen(true);
	};

	return (
		<>
			<SEO
				title="Careers at OpenGridLabs - Join Our Team"
				description="Join OpenGridLabs and work on cutting-edge software, AI, and design projects. Explore open positions for developers, interns, and tech professionals. Remote and on-site opportunities available."
				canonical="/about/career"
				keywords="OpenGridLabs careers, software developer jobs, tech jobs, internship, remote jobs, AI engineer jobs, developer internship"
			/>
			<PageTitle
				label="Join Our Team"
				mainTitle="Career"
				subTitle="At"
				description="Join our dynamic team to innovate, grow, and shape the future with exciting opportunities, continuous learning, and meaningful impact."
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

				<section>
					<PageHeading
						preTitle="Open"
						mainTitle="Positions"
						postTitle=""
						icon={Briefcase}
					/>

					{/* Job Listings */}
					<div className="mt-8 space-y-4">
						{jobPositions.map((job) => (
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