import { useState } from "react";
import { motion } from "motion/react";
import { InputField } from "../../../../components/input-field";
import PageHeading2 from "../../../../components/page-heading-2";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Network, Send } from "lucide-react";

const services = [
	"Analyse my idea", "Plan my budget", "Build my MVP",
	"Get first customers", "Scale my product", "Something else"
];
const domains = [
	'Marketplace', 'Medical', 'Finance', 'Education', 'Real Estate',
	'Trading', 'Logistics', 'Hospitality', 'Entertainment', 'Government', 'Others'
];

const emptyForm = {name: '', email: '', phoneNumber: '', company: '', domain: '', services: '', comments: ''};
type Field = keyof typeof emptyForm;

const requiredMessages: Record<Field, string> = {
	name: "Name is required",
	email: "Email is required",
	phoneNumber: "Phone Number is required",
	company: "Company is required",
	domain: "Domain is required",
	services: "Services are required",
	comments: "Comments are required",
};

const labelClass = "text-foreground/80 font-semibold text-lg md:text-xl tracking-wide";

function StyledPhoneInput({label, value, onChange, error}: {
	label: string;
	value: string;
	onChange: (v: string) => void;
	error?: string
}) {
	return (
		<div className="flex flex-col gap-3 relative group">
			<label className={`${labelClass} group-focus-within:text-primary transition-colors`}>
				{label} <span className="text-primary">*</span>
			</label>

			<div
				className="border border-black/10 dark:border-transparent rounded-2xl px-2 py-2 bg-background/40 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary focus-within:shadow-[0_0_20px_hsla(12,95%,60%,0.2)] transition-all flex items-center gap-2">
				<PhoneInput
					country="in"
					value={value}
					onChange={onChange}
					containerClass="!w-full relative z-10"
					inputClass="!w-full !text-base !bg-transparent !border-none !outline-none !shadow-none text-foreground placeholder:text-muted-foreground pl-12"
					buttonClass="!bg-transparent !border-none !outline-none"
					dropdownClass="!bg-background !text-foreground !border-black/10 dark:!border-transparent custom-scrollbar !max-h-64"
				/>
			</div>

			{error && (
				<motion.p initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}}
				          className="text-red-500 text-sm mt-1">
					{error}
				</motion.p>
			)}
		</div>
	);
}

function RadioPills({title, options, name, value, onChange, error}: {
	title: string;
	options: string[];
	name: string;
	value: string;
	onChange: (v: string) => void;
	error?: string
}) {
	return (
		<div
			className="flex flex-col gap-4 bg-background/20 p-8 rounded-2xl border border-black/5 dark:border-transparent">
			<h2 className={labelClass}>{title} <span className="text-primary">*</span></h2>
			<div className="flex flex-wrap gap-4 mt-2">
				{options.map((option) => (
					<motion.label
						whileHover={{scale: 1.05}}
						whileTap={{scale: 0.95}}
						key={option}
						className={`relative px-6 py-3 rounded-2xl text-sm md:text-base cursor-pointer transition-all duration-300 font-bold tracking-wide border overflow-hidden
							${value === option
							? "bg-primary/20 text-foreground border-primary shadow-[0_0_20px_hsla(12,95%,60%,0.4)]"
							: "bg-white/50 dark:bg-foreground/10 border-black/10 dark:border-transparent text-foreground/80 dark:text-foreground/60 hover:text-foreground"}`}
					>
						{value === option && (
							<motion.div layoutId={`pill-bg-${name}`}
							            className="absolute inset-0 bg-primary opacity-20 pointer-events-none"/>
						)}
						<input
							type="radio"
							name={name}
							value={option}
							checked={value === option}
							onChange={() => onChange(option)}
							className="hidden"
						/>
						<span className="relative z-10">{option}</span>
					</motion.label>
				))}
			</div>
			{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
		</div>
	);
}

export default function ContactForm() {
	const [formData, setFormData] = useState(emptyForm);
	const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
	const [loading, setLoading] = useState(false);

	const field = (key: Field) => ({
		value: formData[key],
		error: errors[key],
		onChange: (v: string) => {
			setFormData({...formData, [key]: v});
			if (errors[key]) setErrors({...errors, [key]: ""});
		},
	});

	const handleSubmit = async () => {
		const newErrors: Partial<Record<Field, string>> = {};
		for (const key of Object.keys(emptyForm) as Field[]) {
			if (!formData[key]) newErrors[key] = requiredMessages[key];
		}
		setErrors(newErrors);
		if (Object.keys(newErrors).length > 0) return;

		setLoading(true);
		const fd = new FormData();
		Object.entries(formData).forEach(([key, value]) => fd.append(key, value));
		fd.append("access_key", "7ce8502f-e86a-4944-a377-30c9e87456ad");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {method: "POST", body: fd});
			const data = await response.json();
			if (data.success) {
				toast.success("Project inquiry submitted successfully!");
				setFormData(emptyForm);
			} else {
				toast.error("Error submitting form (may be detected as spam)");
			}
		} catch {
			toast.error("Network error. Please try again.");
		}
		setLoading(false);
	};

	return (
		<section id="contact-us-contact-form" className="w-full flex flex-col relative z-20 overflow-x-clip" style={{ perspective: "1000px" }}>
			<style>{`.react-tel-input .country-list .country:hover { background-color: var(--color-primary); color: white; }`}</style>
			<div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

			<PageHeading2 mainTitle="Initialize Protocol"/>

			<motion.div
				initial={{opacity: 0, rotateX: 10, y: 50}}
				whileInView={{opacity: 1, rotateX: 0, y: 0}}
				viewport={{once: true}}
				transition={{duration: 0.8}}
				className="w-full relative mt-16"
			>
				<form
					className="w-full flex flex-col gap-12 glass-panel p-8 md:p-14 rounded-3xl relative overflow-hidden preserve-3d">
					<div className="flex items-center gap-4 border-b border-black/10 dark:border-transparent pb-6 mb-2">
						<Network className="w-8 h-8 text-primary animate-pulse"/>
						<div className="flex flex-col">
							<span
								className="text-foreground/70 dark:text-foreground/50 font-mono text-sm tracking-widest uppercase">System Status: Online</span>
							<span className="text-foreground font-display font-bold text-xl tracking-wide">Project Parameters Input</span>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-10">
						<InputField {...field("name")} label="Operator Name" placeholder="John Doe"/>
						<InputField {...field("email")} label="Secure Comm Link" placeholder="hello@example.com"
						            type="email"/>
					</div>

					<div className="grid md:grid-cols-2 gap-10">
						<StyledPhoneInput {...field("phoneNumber")} label="Mobile Relay"/>
						<InputField {...field("company")} label="Organization Identifier" placeholder="Your Company"/>
					</div>

					<RadioPills title="Target Sector" name="domain" options={domains} {...field("domain")} />
					<RadioPills title="Required Modules" name="service" options={services} {...field("services")} />

					<InputField {...field("comments")} label="Mission Directives"
					            placeholder="Specify your exact requirements, architectural needs, and expected outcomes..."
					            type="textarea" rows={5}/>

					<div className="flex justify-end pt-6 border-t border-black/10 dark:border-transparent">
						<motion.button
							whileHover={{scale: 1.05}}
							whileTap={{scale: 0.95}}
							type="button"
							onClick={handleSubmit}
							disabled={loading}
							className="w-full md:w-auto min-w-[240px] justify-center text-lg overflow-hidden inline-flex items-center gap-3 font-bold transition-all relative select-none cursor-pointer h-16 px-10 bg-gradient-to-r from-primary to-accent text-white rounded-2xl shadow-[0_0_30px_hsla(12,95%,60%,0.3)] hover:shadow-[0_0_50px_hsla(12,95%,60%,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{loading ? (
								<span
									className="w-6 h-6 border-2 border-black/30 dark:border-transparent border-t-white rounded-full animate-spin inline-block"/>
							) : (
								<>
									<Send className="w-5 h-5"/>
									<span>Transmit Data</span>
								</>
							)}
						</motion.button>
					</div>
				</form>
			</motion.div>
		</section>
	);
}
