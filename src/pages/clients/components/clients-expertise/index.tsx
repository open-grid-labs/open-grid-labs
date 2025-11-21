import {
	Car,
	Landmark,
	Briefcase,
	ShoppingCart,
	GraduationCap,
	Bolt,
	PartyPopper,
	Utensils,
	Cpu,
	Plane,
	HeartPulse,
	Building2,
} from "lucide-react";

const cards = [
	{ title: "Automobiles", icon: <Car size={80} /> },
	{ title: "Capital", icon: <Landmark size={80} /> },
	{ title: "Consulting", icon: <Briefcase size={80} /> },
	{ title: "E-Commerce", icon: <ShoppingCart size={80} /> },
	{ title: "Education", icon: <GraduationCap size={80} /> },
	{ title: "Energy", icon: <Bolt size={80} /> },
	{ title: "Events", icon: <PartyPopper size={80} /> },
	{ title: "Food", icon: <Utensils size={80} /> },
	{ title: "Hardware", icon: <Cpu size={80} /> },
	{ title: "Travel", icon: <Plane size={80} /> },
	{ title: "Healthcare", icon: <HeartPulse size={80} /> },
	{ title: "Real-Estate", icon: <Building2 size={80} /> },
];

export default function ClientsExpertise() {
	return (
		<div className="w-full grid md:grid-cols-4 grid-cols-2 gap-8 mt-10">
			{cards.map((item, i) => (
				<div
					key={i}
					className="flex flex-col items-center justify-center p-6 rounded-3xl border border-border"
				>
					<div className="w-16 h-16 flex items-center justify-center mb-4 bg-primary/10 rounded-full">
						{item.icon}
					</div>
					<h4 className="text-lg md:text-xl font-semibold">
						{item.title}
					</h4>
				</div>
			))}
		</div>
	);
}