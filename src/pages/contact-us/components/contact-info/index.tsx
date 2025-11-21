import { Dribbble, Facebook, Grid2X2, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import type { ReactNode } from "react";

const socialLinks = [
	{ href: "https://www.facebook.com", svg: Facebook },
	{ href: "https://www.instagram.com", svg: Instagram },
	{ href: "https://www.youtube.com", svg: Youtube },
	{ href: "https://www.dribbble.com", svg: Dribbble },
];

type ContactCardProps = {
	icon: ReactNode
	label: string
	children?: ReactNode
	items: string[]
}

function ContactCard({
	icon,
	label,
	children,
	items
}: ContactCardProps) {
	return (
		<div className="flex flex-col gap-4 p-6 bg-foreground/5 rounded-2xl">
			<div className="p-3 rounded-lg bg-foreground w-fit">
				{icon}
			</div>
			<h3 className="text-2xl md:text-3xl font-semibold text-foreground">{label}</h3>
			{
				items.map((item, i) => (
					<p key={i} className="text-lg md:text-xl text-muted-foreground font-medium">{item}</p>
				))
			}
			{children}
		</div>
	)
}

export default function ContactInfo() {
	return (
		<div className="w-full grid md:grid-cols-2 gap-8 mt-12 text-left">

			<ContactCard
				icon={<MapPin className="text-background" size={28} />}
				label="Our Location"
				items={['New Delhi, India', 'USA Office: California']}
			/>

			<ContactCard
				icon={<Phone className="text-background" size={28} />}
				label="Phone"
				items={['+91 123 456 7890']}
			/>

			<ContactCard
				icon={<Mail className="text-background" size={28} />}
				label="Email"
				items={['Reach us via email for inquiries', 'contact@company.com']}
			/>

			<ContactCard
				icon={<Grid2X2 className="text-background" size={28} />}
				label="Social Media"
				items={['Connect with us']}
			>
				<div className="flex items-center gap-4 mt-2">
					{socialLinks.map((link, i) => (
						<a key={i} href={link.href} target="_blank" rel="noreferrer" className="text-secondary hover:scale-110 transition bg-foreground rounded-full p-2">
							<link.svg size={20} />
						</a>
					))}
				</div>
			</ContactCard>
		</div>
	);
}
