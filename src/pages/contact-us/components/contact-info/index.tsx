import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid2X2, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { socialLinks } from "../../../../components/footer";


type ContactCardProps = {
	icon: ReactNode
	label: string
	children?: ReactNode
	items: string[]
	href?: string
	hrefItemIdx?: number
}

function ContactCard({
	icon,
	label,
	children,
	items,
	href,
	hrefItemIdx
}: ContactCardProps) {
	return (
		<div className="flex flex-col gap-4 p-6 bg-foreground/5 rounded-2xl">
			<div className="p-3 rounded-lg bg-foreground w-fit">
				{icon}
			</div>
			<h3 className="text-2xl md:text-3xl font-semibold text-foreground">{label}</h3>
			<div className="flex flex-col gap-2">
				{
					items.map((item, i) => (
						(href && hrefItemIdx == i) ? (
							<div>
								<a key={i} href={href} target="_blank" rel="noopener noreferrer" className="inline text-lg md:text-xl text-muted-foreground font-medium hover:underline">{item}</a>
							</div>
						) : (
							<p key={i} className="text-lg md:text-xl text-muted-foreground font-medium">{item}</p>
						)
					))
				}
			</div>
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
				items={[
					"New Delhi, India",
					"New York, USA",
					"Alberta, Canada",
					"London, UK",
					"Munich, Germany"
				]}
			/>

			<ContactCard
				icon={<Mail className="text-background" size={28} />}
				label="Email"
				items={['Reach us via email for inquiries', 'contact@company.com']}
				href="mailto:contact@company.com"
				hrefItemIdx={1}
			/>

			<ContactCard
				icon={<FontAwesomeIcon icon={faWhatsapp} className="text-background" size={'xl'} />}
				label="WhatsApp"
				items={['+1 315 908 7303']}
				href={'https://wa.me/13159087303'}
				hrefItemIdx={0}
			/>

			<ContactCard
				icon={<Grid2X2 className="text-background" size={28} />}
				label="Social Media"
				items={['Connect with us']}
			>
				<div className="flex items-center gap-4 mt-2">
					{socialLinks.map((link, i) => (
						<a key={i} href={link.href} target="_blank" rel="noreferrer" className="text-secondary hover:scale-110 transition bg-foreground rounded-full p-2">
							{link.icon}
						</a>
					))}
				</div>
			</ContactCard>
		</div>
	);
}
