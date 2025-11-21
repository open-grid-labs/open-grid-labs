import { PhoneCall } from "lucide-react";
import ButtonLink from "../ui/button-link.tsx";

export default function Contact() {
	return (
		<div className="w-full bg-foreground/2 rounded-2xl border border-border my-10 px-8 py-16 grid md:grid-cols-2 gap-10 items-center">

			<div className="space-y-6">
				<h2 className="text-3xl md:text-5xl font-bold leading-tight text-muted-foreground uppercase">
					Ready to grow?<br />
					<span className="text-foreground">Take action now!</span>
				</h2>

				<p className="text-lg text-muted-foreground max-w-xl">
					We craft digital experiences through innovative design and strategic thinking. Let’s take your business to the next level.
				</p>

				<ButtonLink to="/contact-us" className="w-fit">
					Book A Call
					<PhoneCall size={20} className="ml-2" />
				</ButtonLink>
			</div>

			<div className="hidden md:block">
				<div className="flex justify-center items-center w-full h-64 bg-foreground/3 rounded-xl">
					logo
				</div>
			</div>

		</div>
	);
}
