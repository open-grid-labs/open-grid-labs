import { useState } from "react";
import { InputField } from "../../../../components/input-field";
import PageHeading2 from "../../../../components/page-heading-2";
import ButtonLink from "../../../../components/ui/button-link.tsx";

const services = ["UX-UI", "Web Apps", "Mobile Apps", "Web Design", "Web Flow", "Intelligence", "App UI", "Other"];
const budgets = ["30k - 50k", "50k - 100k", ">100k"];

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
	const [selectedService, setSelectedService] = useState("");
	const [selectedBudget, setSelectedBudget] = useState("");

	return (
		<section id="contact-us-contact-form" className="w-full flex flex-col">
			<PageHeading2 mainTitle="Let's Talk!" />

			<form className="w-full flex flex-col gap-10 mt-8">
				<div className="grid md:grid-cols-2 gap-8">
					<InputField label="Hi! I am" placeholder="John Doe" />
					<InputField label="Reach me at" placeholder="hello@gmail.com" type="email" />
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					<InputField label="Mobile No" placeholder="91234 56789" type="tel" prefix="+91" />
					<InputField label="Company Name" placeholder="Company Name" />
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-foreground font-semibold text-lg md:text-xl">Services</h2>
					<RadioPills name="service" options={services} value={selectedService} setValue={setSelectedService} />
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-foreground font-semibold text-lg md:text-xl">Budget In USD</h2>
					<RadioPills name="budget" options={budgets} value={selectedBudget} setValue={setSelectedBudget} />
				</div>

				<InputField label="Comments" placeholder="Write your message here..." type="textarea" rows={4} />

				<ButtonLink
					to="#"
					className="text-xl"
				>
					Send
				</ButtonLink>
			</form>
		</section>
	);
}
