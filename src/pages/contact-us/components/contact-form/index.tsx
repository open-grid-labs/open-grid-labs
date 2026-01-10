import { useState } from "react";
import { InputField } from "../../../../components/input-field";
import PageHeading2 from "../../../../components/page-heading-2";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FileUpload from "../../../../components/file-upload";


const services = ["UX-UI", "Web Apps", "Mobile Apps", "Web Design", "Web Flow", "Intelligence", "App UI", "Other"];
const budgets = ["10k - 30k", "30k - 50k", "50k - 100k", ">100k"];
const domains = [
	'Marketplace',
	'Medical',
	'Finance',
	'Education',
	'Real Estate',
	'Trading',
	'Logistics',
	'Hospitality',
	'Entertainment',
	'Government',
	'Others'
];


type StyledPhoneInputProps = {
	label: string;
	value: string;
	onChange: (v: string) => void;
	error?: string
}

function StyledPhoneInput({
	label,
	value,
	onChange,
	error,
}: StyledPhoneInputProps) {
	return (
		<div className="flex flex-col gap-2">
			<label className="text-foreground font-semibold text-lg md:text-xl">
				{label}
			</label>

			<div className="border border-border rounded-xl px-2 py-[0.4rem] flex items-center gap-2">
				<PhoneInput
					country="in"
					value={value}
					onChange={onChange}
					containerClass="!w-full"
					inputClass="!w-full !text-base !bg-transparent !border-none !outline-none !shadow-none text-foreground placeholder:text-muted-foreground"
					buttonClass="!bg-transparent !border-none !outline-none"
					dropdownClass="!bg-card !text-foreground"
				/>
			</div>

			{error && <p className="text-red-600">{error}</p>}
		</div>
	);
}


function RadioPills({ options, name, value, setValue }: { options: string[]; name: string; value: string; setValue: (val: string) => void }) {
	return (
		<div className="flex flex-wrap gap-4">
			{options.map((option) => (
				<label
					key={option}
					className={`px-4 py-2 border rounded-xl text-sm md:text-base cursor-pointer transition 
						${value === option ? "bg-foreground text-background border-foreground" : "border-border text-foreground hover:bg-foreground/10"}`}
				>
					<input
						type="radio"
						name={name}
						value={option}
						checked={value === option}
						onChange={() => setValue(option)}
						className="hidden"
					/>
					{option}
				</label>
			))}
		</div>
	);
}

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		company: '',
		domain: '',
		services: '',
		budget: '',
		comments: '',
	})
	const [attachment, setAttachment] = useState<File | null>(null)
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		company: '',
		domain: '',
		services: '',
		budget: '',
		comments: '',
	})
	const [loading, setLoading] = useState(false)

	const handleSubmit = async () => {
		let newErrors: any = {};

		if (!formData.name) newErrors.name = "Name is required";
		if (!formData.email) newErrors.email = "Email is required";
		if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
		if (!formData.company) newErrors.company = "Company is required";
		if (!formData.domain) newErrors.domain = "Domain is required";
		if (!formData.services) newErrors.services = "Services are required";
		if (!formData.budget) newErrors.budget = "Budget is required";
		if (!formData.comments) newErrors.comments = "Comments are required";

		// Validate file size (Web3Forms limit is 10MB)
		if (attachment && attachment.size > 10 * 1024 * 1024) {
			toast.error("File size must be less than 10MB");
			return;
		}

		setErrors(newErrors);

		if (Object.keys(newErrors).length > 0) return;

		setLoading(true)
		const fd = new FormData();
		Object.entries(formData).forEach(([key, value]) => {
			fd.append(key, value);
		});
		if (attachment) {
			fd.append("attachment", attachment);
		}
		fd.append("access_key", "7ce8502f-e86a-4944-a377-30c9e87456ad");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: fd
		});
		const data = await response.json();
		if (data.success) {
			toast.success("Form submitted successfully!")
			// Reset form after successful submission
			setFormData({
				name: '',
				email: '',
				phoneNumber: '',
				company: '',
				domain: '',
				services: '',
				budget: '',
				comments: '',
			});
			setAttachment(null);
		} else {
			toast.error("Error submitting form (may be detected as spam)")
		}
		setLoading(false)
	};


	return (
		<section id="contact-us-contact-form" className="w-full flex flex-col">
			<PageHeading2 mainTitle="Let's Talk!" />

			<form className="w-full flex flex-col gap-10 mt-8">
				<div className="grid md:grid-cols-2 gap-8">
					<InputField value={formData.name}
						onChange={(v) => {
							setFormData({ ...formData, name: v })
							if (errors.name) setErrors({ ...errors, name: "" });
						}}
						error={errors.name}
						label="Hi! I am" placeholder="John Doe" />
					<InputField value={formData.email}
						onChange={(v) => {
							setFormData({ ...formData, email: v })
							if (errors.email) setErrors({ ...errors, email: "" });
						}}
						error={errors.email}
						label="Reach me at" placeholder="hello@gmail.com" type="email" />
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					<StyledPhoneInput value={formData.phoneNumber}
						onChange={(v) => {
							setFormData({ ...formData, phoneNumber: v })
							if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: "" });
						}}
						error={errors.phoneNumber}
						label="Mobile No" />


					<InputField value={formData.company}
						onChange={(v) => {
							setFormData({ ...formData, company: v })
							if (errors.company) setErrors({ ...errors, company: "" });
						}}
						error={errors.company}
						label="Company Name" placeholder="Company Name" />
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-foreground font-semibold text-lg md:text-xl">Domain</h2>
					<RadioPills name="domain" options={domains} value={formData.domain}
						setValue={(v) => {
							setFormData({ ...formData, domain: v })
							if (errors.domain) setErrors({ ...errors, domain: "" });
						}}
					/>
					{
						errors.domain && (
							<p className="text-red-600">{errors.domain}</p>
						)
					}
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-foreground font-semibold text-lg md:text-xl">Services</h2>
					<RadioPills name="service" options={services} value={formData.services}
						setValue={(v) => {
							setFormData({ ...formData, services: v })
							if (errors.services) setErrors({ ...errors, services: "" });
						}}
					/>
					{
						errors.services && (
							<p className="text-red-600">{errors.services}</p>
						)
					}
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-foreground font-semibold text-lg md:text-xl">Budget In USD</h2>
					<RadioPills name="budget" options={budgets} value={formData.budget}
						setValue={(v) => {
							setFormData({ ...formData, budget: v })
							if (errors.budget) setErrors({ ...errors, budget: "" });
						}}
					/>
					{
						errors.budget && (
							<p className="text-red-600">{errors.budget}</p>
						)
					}
				</div>

				<InputField value={formData.comments}
					onChange={(v) => {
						setFormData({ ...formData, comments: v })
						if (errors.comments) setErrors({ ...errors, comments: "" });
					}}
					error={errors.comments}
					label="Comments" placeholder="Write your message here..." type="textarea" rows={4} />

				<FileUpload
					label="Attachment (Optional)"
					file={attachment}
					onChange={setAttachment}
				/>

				<button
					type="button"
					onClick={handleSubmit}
					disabled={loading}
					className={`w-28 justify-center text-xl overflow-hidden inline-flex shrink-0 items-center font-semibold transition-colors relative select-none cursor-pointer h-12 px-6 bg-foreground text-background hover:bg-foreground/85 rounded-[15px]`}
				>
					{
						loading ? (
							<span className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin inline-block"></span>
						) : (
							<span>Send</span>
						)
					}
				</button>

			</form>
		</section>
	);
}
