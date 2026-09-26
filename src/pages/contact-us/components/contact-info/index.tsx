import type {MouseEvent, ReactNode} from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {Grid2X2, Linkedin, Mail, MapPin, MessageCircle} from "lucide-react";

type ContactCardProps = {
	icon: ReactNode
	label: string
	items: string[]
	href?: string
	hrefItemIdx?: number
	children?: ReactNode
}

const socialLinks = [
	{icon: <Linkedin className="w-4 h-4"/>, href: "https://www.linkedin.com/company/opengridlabs", label: "LinkedIn"},
];

const cards: ContactCardProps[] = [
	{
		icon: <MapPin size={28}/>,
		label: "Our Location",
		items: ["New Delhi, India", "New York, USA", "Alberta, Canada", "London, UK", "Munich, Germany"],
	},
	{
		icon: <Mail size={28}/>,
		label: "Email",
		items: ["Reach us via email for inquiries", "priyanshu@opengridlabs.com"],
		href: "mailto:priyanshu@opengridlabs.com",
		hrefItemIdx: 1,
	},
	{
		icon: <MessageCircle size={28}/>,
		label: "WhatsApp",
		items: ["+1 315 908 7303"],
		href: "https://wa.me/13159087303",
		hrefItemIdx: 0,
	},
	{
		icon: <Grid2X2 size={28}/>,
		label: "Social Media",
		items: ["Connect with us"],
		children: (
			<div className="flex items-center gap-4 mt-2">
				{socialLinks.map((link) => (
					<a key={link.href} href={link.href} aria-label={link.label} target="_blank" rel="noreferrer"
					   className="text-foreground hover:text-primary border border-black/10 dark:border-transparent hover:border-primary/50 transition-all duration-300 bg-white/50 dark:bg-foreground/5 hover:bg-primary/20 rounded-full p-4 shadow-inner hover:-translate-y-1">
						{link.icon}
					</a>
				))}
			</div>
		),
	},
];

function ContactCard({icon, label, items, href, hrefItemIdx, children, delay}: ContactCardProps & { delay: number }) {
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const rotateX = useTransform(useSpring(y, {stiffness: 300, damping: 30}), [0, 1], [10, -10]);
	const rotateY = useTransform(useSpring(x, {stiffness: 300, damping: 30}), [0, 1], [-10, 10]);

	function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
		const rect = e.currentTarget.getBoundingClientRect();
		x.set((e.clientX - rect.left) / rect.width);
		y.set((e.clientY - rect.top) / rect.height);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.6, delay }}
			onMouseMove={handleMouseMove}
			onMouseLeave={() => {
				x.set(0.5);
				y.set(0.5);
			}}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1000px" }}
			className="group relative flex flex-col gap-6 p-8 glass-panel rounded-3xl overflow-hidden"
		>
			<div
				className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>

			<div style={{ transform: "translateZ(30px)" }} className="relative flex flex-col h-full z-10">
				<div className="p-4 rounded-2xl bg-white/50 dark:bg-foreground/5 border border-black/10 dark:border-transparent w-fit text-primary group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors shadow-inner mb-2">
					{icon}
				</div>
				<h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">{label}</h3>
				<div className="flex flex-col gap-3 mt-2">
					{items.map((item, i) => (href && hrefItemIdx === i) ? (
						<div key={i}>
							<a href={href} target="_blank" rel="noopener noreferrer"
							   className="inline-block text-lg md:text-xl text-primary/80 font-mono hover:text-primary transition-colors hover:translate-x-1 transform duration-300">{item}</a>
						</div>
					) : (
						<p key={i}
						   className={`text-lg md:text-xl text-muted-foreground font-medium ${href ? "" : "group-hover:text-foreground/90"} transition-colors`}>{item}</p>
					))}
				</div>
				<div className="mt-auto pt-6">
					{children}
				</div>
			</div>
		</motion.div>
	)
}

export default function ContactInfo() {
	return (
		<div className="w-full grid md:grid-cols-2 gap-8 mt-16 text-left relative z-10">
			{cards.map((card, i) => (
				<ContactCard key={card.label} {...card} delay={(i + 1) / 10}/>
			))}
		</div>
	);
}
